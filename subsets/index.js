const subsets = str => {
  if (!str) return "";
  let res = [];
  helper([], 0);

  function helper(arr, index) {
    res.push(arr);
    for (let i = index; i < str.length; i++) {
      helper(arr.concat(str[i]), i + 1);
    }
  }
  return res;
};

/* modified algorithm below accounts for duplicate elements */

const subsets = str => {
  if (!str) return "";
  let res = [];
  helper([], 0);

  function helper(arr, index) {
    res.push(arr);
    for (let i = index; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        continue;
      }
      helper(arr.concat(str[i]), i + 1);
    }
  }
  return res;
};
