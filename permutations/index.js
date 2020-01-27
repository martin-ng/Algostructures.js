const permutations = function(arr) {
  let res = [];

  permutate(arr);
  //   return res;
  console.log(res);
  function permutate(arr, m = []) {
    if (arr.length === 0) {
      res.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permutate(curr.slice(), m.concat(next));
      }
    }
  }
};

// permutations(["1", "2", "3"]);
permutations(["m", "a", "r", "t", "i", "n"]);
