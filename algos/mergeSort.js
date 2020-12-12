function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let resultArr = [];
  let rightI = 0;
  let leftI = 0;

  while (leftI < left.length && rightI < right.length) {
    if (left[leftI] <= right[rightI]) {
      resultArr.push(left[leftI]);
      leftI++;
    } else {
      resultArr.push(right[rightI]);
      rightI++;
    }
  }
  return resultArr.concat(left.slice(leftI)).concat(right.slice(rightI));
}
