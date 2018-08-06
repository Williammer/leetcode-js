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

export function bubbleSort(array) {
  const arr = array.slice();
  checkArray(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

export function selectionSort(array) {
  const arr = array.slice();
  checkArray(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] >= arr[j]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }
  return arr;
}

export function insertionSort(array) {
  const arr = array.slice();
  checkArray(arr);
  for (let i = 1; i < arr.length; i++) {
    let cur = i;
    const curVal = arr[cur];
    while (cur > 0 && arr[cur - 1] > curVal) {
      arr[cur] = arr[cur - 1];
      cur -= 1;
    }
    arr[cur] = curVal;
  }
  return arr;
}

export function shellSort(array, base = 3) {
  const arr = array.slice();
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

export function quickSortWithArray(array) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) {
    return arr;
  }

  const [pivot, ...rest] = arr;
  const larger = rest.filter((item) => item > pivot);
  const smaller = rest.filter((item) => item <= pivot);

  return [...quickSortWithArray(smaller), pivot, ...quickSortWithArray(larger)];
}

export function quickSort(arr, lo, hi) {
  checkArray(arr);
  lo = typeof lo === "number" ? lo : 0;
  hi = typeof hi === "number" ? hi : arr.length;

  if (hi <= lo) return arr;

  let start = lo;
  let end = hi;
  const pivot = arr[lo];

  while (start < end) {
    while (arr[++start] <= pivot) if (start === hi) break;
    while (arr[--end] >= pivot) if (end === lo) break;
    if (start >= end) break;

    swap(arr, start, end);
  }
  swap(arr, lo, end);

  quickSort(arr, lo, end);
  quickSort(arr, end + 1, hi);

  return arr;
}

export function mergeSort(array) {
  const arr = array.slice();
  checkArray(arr);
  if (arr.length < 2) {
    return arr;
  }
  const merge = (arr1, arr2) => {
    const result = [];
    const arrLen1 = arr1.length;
    const arrLen2 = arr2.length;
    let pt1 = 0;
    let pt2 = 0;

    while (pt1 < arrLen1 && pt2 < arrLen2) {
      if (arr1[pt1] === arr2[pt2]) {
        result.push(arr1[pt1], arr2[pt2]);
        pt1 += 1;
        pt2 += 1;
      } else if (arr1[pt1] > arr2[pt2]) {
        result.push(arr2[pt2]);
        pt2 += 1;
      } else {
        result.push(arr1[pt1]);
        pt1 += 1;
      }
    }

    return result.concat(arr1.slice(pt1)).concat(arr2.slice(pt2));
  };
  const mid = Math.floor(arr.length - 1 / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

export function heapSort(array) {
  const heap = array.slice();
  checkArray(heap);
  if (heap.length < 2) {
    return heap;
  }
  const heapify = (arr, index, end = arr.length - 1) => {
    const parentIndex = Math.ceil(index / 2) - 1;
    if (index < 0 || parentIndex < 0) {
      return;
    }
    const isLeft = index % 2 === 1;
    const peerIndex = isLeft ? index + 1 : index - 1;

    let largest = parentIndex;
    if (arr[index] > arr[largest]) largest = index;
    if (peerIndex <= end && arr[peerIndex] > arr[largest]) largest = peerIndex;
    if (largest !== parentIndex) swap(arr, largest, parentIndex);

    heapify(arr, index - 2, end);
  };

  for (let last = heap.length - 1; last > 0; last -= 1) {
    heapify(heap, last, last);
    swap(heap, 0, last);
  }

  return heap;
}
