/****
 * leetcode table with vue
 ***/
(function($) {
    /**
     * v-table component
     */
    var VTableComponent = {
        template: '<table>\
            <thead>\
                <tr>\
                    <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey == key }">\
                        {{ key | capitalize }}\
                        <span class="arrow" :class="sortOrders[key] > 0 ? \'dsc\' : \'asc\'"></span>\
                    </th>\
                </tr>\
            </thead>\
                <tbody name="leetcode-tb-tr"\
                    is="transition-group"\
                    v-bind:css="false"\
                    v-on:before-enter="beforeEnter"\
                    v-on:enter="enter"\
                    v-on:leave="leave"\
                >\
                    <tr v-for="(entry, index) in filteredData"\
                        :key="entry.num"\
                        :data-index="index"\
                    >\
                        <template v-for="key in columns">\
                            <td v-if="isLinkEntry(key)">\
                                <v-link :link="entry[key]"></v-link>\
                            </td>\
                            <td v-else>\
                                {{entry[key]}}\
                            </td>\
                        </template>\
                    </tr>\
                </transition-group>\
        </table>',

        components: {
            'v-link': {
                props: { link: { type: String, required: true } },
                template: '<a :href="link" target="_blank" id="v-link">solution</a>'
            }
        },
        replace: true,
        props: {
            data: Array,
            columns: Array,
            filterKey: String
        },
        /* derived data state model */
        data: function() {
            var sortOrders = {}
            this.columns.forEach(function(key) {
                sortOrders[key] = 1
            })

            return {
                sortKey: 'num',
                sortOrders: sortOrders
            }
        },
        computed: {
            filteredData: function() {
                var sortKey = this.sortKey
                var filterKey = this.filterKey && this.filterKey.toLowerCase()
                var order = this.sortOrders[sortKey] || 1
                var data = this.data
                if (filterKey) {
                    data = data.filter(function(row) {
                        return Object.keys(row).some(function(key) {
                            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                        })
                    })
                }
                if (sortKey) {
                    data = data.slice().sort(function(a, b) {
                        a = a[sortKey]
                        b = b[sortKey]
                        return (a === b ? 0 : a > b ? 1 : -1) * order
                    })
                }
                return data
            }
        },
        filters: {
            capitalize: function(str) {
                return str.charAt(0).toUpperCase() + str.slice(1)
            }
        },
        methods: {
            isLinkEntry: function(key) {
                return key === 'solution.js'
            },
            sortBy: function(key) {
                this.sortKey = key
                if (!this.sortOrders[key]) {
                    this.sortOrders[key] = 1
                }
                this.sortOrders[key] = this.sortOrders[key] * -1
            },
            beforeEnter: function(el) {
                el.style.opacity = 0
            },
            enter: function(el, done) {
                Velocity(
                    el, { opacity: 1 }, { complete: done }
                )
            },
            leave: function(el, done) {
                Velocity(
                    el, { opacity: 0 }, { complete: done }
                )
            }
        }
    }

    /**
     * init
     */
    $.fetch('leetcode-data.json')
        .then(function(response) {
            return response.json()
        })
        .then(function(tbData) {
            // console.debug('parsed json', tbData)
            new Vue({
                el: '#leetcode-table',
                components: {
                    'v-table': VTableComponent
                },
                data: {
                    searchQuery: '',
                    tbColumns: ['num', 'title', 'tags', 'level', 'solution.js'],
                    tbData: tbData
                }
            })
        })
        .catch(function(ex) {
            console.warn('parsing failed', ex)
        })
})(window)
