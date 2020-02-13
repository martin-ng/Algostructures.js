var canPermutePalindrome = function(s) {
  const charSet = {};

  for (let i of s) {
    if (charSet[i]) delete charSet[i];
    else charSet[i] = 1;
  }

  return Object.keys(charSet).length <= 1;
};

let s = "code";

// let s = "aab"

// let s = "carerac"

canPermutePalindrome(s);
