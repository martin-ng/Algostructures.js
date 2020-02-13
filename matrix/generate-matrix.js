function generateMatrix(n) {
  if (!n) return [];

  let left = 0;
  let right = n - 1;
  let top = 0;
  let bot = n - 1;
  let counter = 1;

  let matrix = new Array(n);

  for (let i = 0; i < n; i++) {
    matrix[i] = new Array(n);
  }

  while (counter <= n * n) {
    for (let i = left; i <= right && counter <= n * n; i++) {
      matrix[top][i] = counter;
      counter++;
    }
    for (let i = top + 1; i <= bot && counter <= n * n; i++) {
      matrix[i][right] = counter;
      counter++;
    }
    for (let i = right - 1; i >= left && counter <= n * n; i--) {
      matrix[bot][i] = counter;
      counter++;
    }
    for (let i = bot - 1; i >= top + 1 && counter <= n * n; i--) {
      matrix[i][left] = counter;
      counter++;
    }
    left++;
    right--;
    top++;
    bot--;
  }
  return matrix;
}

// console.log(generateMatrix(3));
// console.log(generateMatrix(4));
console.log(generateMatrix(5));
