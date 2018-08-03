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

export function bubble(arr) {
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

export function selection(arr) {
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

export function insertion(arr) {
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
