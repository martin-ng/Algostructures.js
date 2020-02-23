const permutations = function(arr) {
  let res = [];
  permutate(arr, res);
  return res;

  function permutate(arr, res, temp = []) {
    if (temp.length === arr.length) {
      res.push(temp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (temp.includes(arr[i])) continue;
        temp.push(arr[i]);
        permutate(arr, res, temp);
        temp.pop();
      }
    }
  }
};

// console.log(permutations(["1", "2", "3"]));
console.log(permutations([1, 2, 3, 4]));
// console.log(permutations(["m", "a", "r", "t", "i", "n"]));
