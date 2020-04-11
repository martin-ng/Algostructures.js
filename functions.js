// const functions = {
//   add: (num1, num2) => num1 + num2
// };

// module.exports = functions;

class Trie {
  constructor() {
    this.root = new Map();
  }

  insert(word) {
    let current = this.root;
    for (let char of word) {
      if (!current.has(char)) {
        current.set(char, new Map());
      }
      current = current.get(char);
    }
    current.endOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (let char of word) {
      current = current.get(char);
      if (current === undefined) {
        return false;
      }
    }
    return current.endOfWord === true;
  }

  startsWith(prefix) {
    let current = this.root;
    for (let char of prefix) {
      current = current.get(char);
      if (current === undefined) {
        return false;
      }
    }
    return true;
  }
}

const newTrie = new Trie();
module.exports = newTrie;

// newTrie.insert("martin");
// newTrie.insert("leetcode");
// newTrie.search("leetcode");
// newTrie.search("visual");
// newTrie.search("martin");
// console.log(newTrie.startsWith("mar"));
// newTrie.startsWith("tin");
