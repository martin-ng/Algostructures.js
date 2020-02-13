var encode = function(strs) {
  let res = "";

  for (let i = 0; i < strs.length; i++) {
    const el = strs[i];
    res = res + el.length + "|" + el;
  }
  return res;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  if (!s) return "";
  let res = [];

  while (s.length) {
    let del = s.indexOf("|");
    let wordLength = parseInt(s.substring(0, del));
    res.push(s.substring(del + 1, del + 1 + wordLength));
    s = s.slice(del + 1 + wordLength);
  }
  return res;
};

// TEST CASES

// let strs = ["dgegba", "thjmmfc", "ffds", "bsfd"];

// let strs = ["a:b", "c"];

let strs = ["martin", "cindy", "tim"];

console.log(decode(encode(strs)));
