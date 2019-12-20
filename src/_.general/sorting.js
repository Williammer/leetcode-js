function swap(arr, i, j) {
  if (i === j) {
    return;
  }
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function checkArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Expect input to be an array.");
  }
}

/**
 * Selection sort, sorted by selecting min to max items for the start to the end position of the
 * array.
 *
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 *
 * @param {Array} array
 * @return {Array}
 *
 */
export function selectionSort(array) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
}

/**
 * Bubble sort, sorted by swapping item pairs(if needed) from the start postion to the end of the
 * array.
 * First round will have a largest item swapped to the array end, and second round will have the
 * second largest item swapped to array end - 1 position, and so on until all items are sorted.
 *
 * Time complexity: O(N^2)
 * Space complexity: O(1)
 *
 * @param {Array} array
 * @return {Array}
 *
 */
export function bubbleSort(array) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) return arr;

  for (let i = arr.length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) return arr;
  }
  return arr;
}

/**
 * Insertion sort, sorted by inserting each item into a proper position of the sorted part of the
 * array before it.
 * The second item is the first one to insert, this carries on until the last item is inserted into
 * the sorted part of the array before it.
 * Insertion sort is extra fast when the array to sort is `small`, or is `partially sorted`.
 *
 * Time complexity: O(N) ~ O(N^2)
 * Space complexity: O(1)
 *
 * @param {Array} array
 * @return {Array}
 *
 */
export function insertionSort(array) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    let j = i;
    const toInsert = arr[j];
    while (j > 0 && arr[j - 1] > toInsert) {
      // compare all prev items with the one to insert until find the position to insert
      arr[j] = arr[j - 1];
      j -= 1;
    }
    arr[j] = toInsert;
  }
  return arr;
}

/**
 * Shell sort, a type of insertion sort, sorted by swapping each gapped array items. The gap reduces
 * after the gapped array items are sorted. This goes on until the array is sorted.
 * The gap number is determined by a base number, for example, if the base number is 2, then for an
 * array of 16 items, its gap range will be 7, 3, 1.
 *
 * Time complexity: O(NlogN)
 * Space complexity: O(1)
 *
 * @param {Array} array
 * @return {Array}
 *
 */
export function shellSort(array, base = 3) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) return arr;

  const len = arr.length;
  let gap = 1;

  while (gap < len / base) {
    gap = gap * base + 1;
  }
  while (gap > 0) {
    for (let init = gap; init < len; init++) {
      const tmp = arr[init];
      let pos = init;
      for (; pos >= gap && arr[pos - gap] > tmp; pos -= gap) {
        arr[pos] = arr[pos - gap];
      }
      arr[pos] = tmp;
    }
    gap = Math.floor(gap / base);
  }

  return arr;
}

/**
 * Quick sort, sorted by performing a partition process for a chosen pivot item, and the same is
 * done for the left/right partitioned parts, and so on.
 * The partition process will swap pairs of items until the left part are all smaller than pivot,
 * and right part are all larger.
 * This function implemented it by creating extra partitioned array upon each partition process.
 * It's concise and easy to read, but has extra space complexity.
 *
 * Time complexity: O(NlogN, N^2)
 * Space complexity: O(N)
 *
 * @param {Array} array
 * @return {Array}
 *
 */
export function quickSortWithArray(array) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) return arr;

  const [pivot, ...rest] = arr;
  const larger = rest.filter((item) => item > pivot);
  const smaller = rest.filter((item) => item <= pivot); // includes items equal to pivot

  return [...quickSortWithArray(smaller), pivot, ...quickSortWithArray(larger)];
}

/**
 * Quick sort, sorted by performing a partition process for a chosen pivot item, and the same is
 * done for the left/right partitioned parts, and so on.
 * The partition process will swap pairs of items until the left part are all smaller than pivot,
 * and right part are all larger.
 *
 * Time complexity: O(NlogN)
 * Space complexity: O(logN)
 *
 * @param {Array} array
 * @return {Array}
 *
 */
export function quickSort(array, lo = 0, hi = array.length) {
  checkArray(array);
  if (array.length < 2 || hi - 1 <= lo) return array;

  const partition = (arr, left, right) => {
    let i = left;
    let j = right;
    const pivot = arr[left];

    while (i < j) {
      while (arr[++i] <= pivot) if (i === right) break; // eslint-disable-line no-plusplus
      while (arr[--j] >= pivot) if (j === left) break; // eslint-disable-line no-plusplus
      if (i < j) swap(arr, i, j);
    }
    swap(arr, left, j);
    return j;
  };
  const pivotIndex = partition(array, lo, hi);
  quickSort(array, lo, pivotIndex);
  quickSort(array, pivotIndex + 1, hi);

  return array;
}

/**
 * Merge sort, sorted by recursively dividing the array into two sub-arrays and merging
 * corresponding sub-arrays back into a sorted array. The merge process ensures that the merged
 * array is sorted.
 *
 * Time complexity: O(NlogN)
 * Space complexity: O(N)
 *
 * @param {Array} array
 * @return {Array}
 *
 */
export function mergeSort(array) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) return arr;

  const merge = (left, right) => {
    const result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i += 1;
      }
      if (left[i] >= right[j]) {
        result.push(right[j]);
        j += 1;
      }
    }
    return result.concat(left.slice(i), right.slice(j));
  };

  const mid = Math.floor(arr.length / 2); // be aware that it's not `arr.length - 1`
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

/**
 * Heap sort, sorted by using the heapify process of the Heap data structure.
 * The Heap data structure looks like a binary tree, but there cannot be `null` gap within it.
 * A proper Heap should have the property that all parent nodes are larger than or equal to its
 * child nodes.
 * The heapify process can find the largest item of the array at a time, and then swap the largest
 * item to the end of the array. This process is repeated until all the array become sorted.
 *
 * Time complexity: O(NlogN)
 * Space complexity: O(1)
 *
 * @param {Array} array
 * @return {Array}
 *
 */
export function heapSort(array) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) return arr;

  const heapify = (list, index, end = list.length - 1) => {
    const parentIndex = Math.ceil(index / 2) - 1;
    if (index < 0 || parentIndex < 0) {
      return;
    }
    const isLeft = index % 2 === 1;
    const peerIndex = isLeft ? index + 1 : index - 1;

    let largest = parentIndex;
    if (list[index] > list[largest]) largest = index;
    if (peerIndex <= end && list[peerIndex] > list[largest]) largest = peerIndex;
    if (largest !== parentIndex) swap(list, largest, parentIndex);

    heapify(list, index - 2, end);
  };

  for (let last = arr.length - 1; last > 0; last -= 1) {
    heapify(arr, last, last);
    swap(arr, 0, last);
  }

  return arr;
}
