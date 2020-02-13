// Rotate clockwise 90 degrees

var rotate = function(matrix) {
  if (matrix[0].length !== matrix.length) return null;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = temp;
    }
  }

  return matrix;
};

// Rotate counter clockwise 90 degrees

var rotate = function(matrix) {
  if (matrix[0].length !== matrix.length) return null;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < matrix.length / 2; i++) {
    for (let j = 0; j < matrix.length; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[matrix.length - i - 1][j];
      matrix[matrix.length - i - 1][j] = temp;
    }
  }

  return matrix;
};

// main difference is horizontally swapping as oppose to vertically swapping after transposing the matrices

// let matrix = [[1,2,3],[4,5,6],[7,8,9]]
// let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
let matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25]
];

console.log(rotate(matrix));
