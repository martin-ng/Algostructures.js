function findKthLargest(arr, k) {
  k = arr.length - k;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let index = partition(arr, left, right);
    if (index < k) {
      left = index + 1;
    } else if (index > k) {
      right = index - 1;
    } else {
      break;
    }
  }

  function partition(arr, left, right) {
    let pivot = arr[right];

    for (let i = left; i < right; i++) {
      if (arr[i] <= pivot) {
        swap(arr, left, i);
        left++;
      }
    }
    swap(arr, left, right);
    return left;
  }

  function swap(arr, left, right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
  }
  return arr[k];
}

let arr = [3, 2, 1, 5, 6, 4];
let k = 2;

console.log(findKthLargest(arr, k));
