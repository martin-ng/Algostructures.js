function quickSort(arr, left, right) {
  if (left >= right) return;

  let pivot = arr[Math.floor((left + right) / 2)];
  let index = partition(arr, left, right, pivot);

  quickSort(arr, left, index - 1);
  quickSort(arr, index, right);

  return arr;
}

function partition(arr, left, right, pivot) {
  while (left <= right) {
    console.log("pivot is at : ", pivot, arr);
    while (arr[left] < pivot) {
      left++;
      console.log("moving left: ", arr[left]);
    }
    while (arr[right] > pivot) {
      right--;
      console.log("moving right: ", arr[right]);
    }
    if (left <= right) {
      console.log("swapped: ", arr);
      swap(arr, left, right);
      left++;
      right--;
    }
  }
  return left;
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

// let arr = [5, 3, 7, 6, 2, 9]
// let arr = [2, 3, 5, 1, 6, 7, 8, 9]
// let arr = [2, 10, 1, 4, 0, 3, 25, 93];
let arr = [5, 6, 9, 1, 3, 2];

let sortedArr = quickSort(arr, 0, arr.length - 1);
console.log(sortedArr);
