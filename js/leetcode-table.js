/****
 * leetcode table with Vue.js
 ***/
(function($) {
  /**
   * v-table component
   */
  const VTableComponent = {
    template: `
      <table class="leetcode-tb">
        <span class="leetcode-tb-total">Total: {{filteredData.length}}</span>
        <thead>
          <tr>
            <th v-for="key in columns" @click="sortBy(key)" :class="{ active: sortKey === key }">
              {{ key | capitalize }}
              <span class="arrow" :class="sortOrders[key] > 0 ? 'dsc' : 'asc'"></span>
            </th>
          </tr>
        </thead>
        <tbody name="leetcode-tb-tr"
          is="transition-group"
          v-bind:css="false"
          v-on:before-enter="beforeEnter"
          v-on:enter="enter"
          v-on:leave="leave"
        >
          <tr v-for="(entry, index) in filteredData"
            :key="entry.num"
            :data-index="index"
          >
            <template v-for="key in columns">
              <td v-if="isLinkEntry(key)">
                <v-link :link="entry[key]"></v-link>
              </td>
              <td v-else>
                {{entry[key]}}
              </td>
            </template>
          </tr>
        </transition-group>
      </table>
    `,

    components: {
      'v-link': {
        props: { link: { type: String, required: true } },
        template: '<a @click="showSourceCode(link)" id="v-link">solution</a>',
        methods: {
          setModalContent(data) {
            const vModal = document.getElementById('v-modal');
            const preElement = document.createElement('pre');
            const codeElement = document.createElement('code');

            // clear #v-modal element
            vModal.innerHTML = "";

            // append sourceCode
            codeElement.innerHTML = data;
            codeElement.className = 'language-javascript';
            preElement.appendChild(codeElement);
            vModal.appendChild(preElement);

            $.Prism.highlightAll();

            return vModal;
          },
          showModal(data) {
            const vModalContent = this.setModalContent(data);

            new $.Modal({
              content: vModalContent,
              className: 'zoom'
            }).open();
            // TODO: clear up upon close modal.
          },
          showSourceCode(url) {
            if (!(typeof url === 'string' && url.length > 0)) {
              console.warn('[showSourceCode] invalid url.');
              return;
            }

            $.fetch(url)
              .then((response) => response.text())
              .then(this.showModal.bind(this))
              .catch((ex) => {
                console.warn('get solution.js failed', ex);
              });
          }
        }
      }
    },
    replace: true,
    props: {
      data: Array,
      columns: Array,
      filterKey: String
    },
    /* derived data state model */
    data() {
      const sortOrders = {};
      this.columns.forEach((key) => {
        sortOrders[key] = 1
      });

      return {
        sortKey: 'num',
        sortOrders: sortOrders
      };
    },
    computed: {
      filteredData() {
        const sortKey = this.sortKey;
        const filterKey = this.filterKey && this.filterKey.toLowerCase();
        const order = this.sortOrders[sortKey] || 1;
        let data = this.data;

        if (filterKey) {
          data = data.filter((row) =>
            Object.keys(row)
              .some((key) =>
                String(row[key]).toLowerCase().indexOf(filterKey) > -1));
        }
        if (sortKey) {
          data = data.slice().sort((a, b) => {
            a = a[sortKey];
            b = b[sortKey];
            return (a === b ? 0 : a > b ? 1 : -1) * order;
          });
        }
        return data;
      }
    },
    filters: {
      capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    },
    methods: {
      isLinkEntry(key) {
        return key === 'solution.js';
      },
      sortBy(key) {
        this.sortKey = key;
        if (!this.sortOrders[key]) {
          this.sortOrders[key] = 1;
        }
        this.sortOrders[key] = this.sortOrders[key] * -1;
      },
      beforeEnter(el) {
        el.style.opacity = 0;
      },
      enter(el, done) {
        $.Velocity(
          el, { opacity: 1 }, { complete: done }
        );
      },
      leave(el, done) {
        $.Velocity(
          el, { opacity: 0 }, { complete: done }
        );
      }
    }
  };

  /**
   * Init - get leetcode data from remote then display in v-table.
   */
  $.fetch('https://raw.githubusercontent.com/Williammer/leetcode-js/master/leetcode-data.json')
    .then((response) => response.json())
    .then((tbData) => {
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
      });
    })
    .catch((ex) => {
      console.warn('parsing failed', ex);
    });
})(window);
