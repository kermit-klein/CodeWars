function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let left = [];
  let right = [];
  let pivot = arr.pop();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
