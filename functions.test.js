const Trie = require("./functions");

const example = Trie;
console.log("TESTING: ", example);

describe("Trie class", () => {
  test("it should add a word", () => {
    const newTrie = new Trie();
    newTrie.insert("testing");
    newTrie.insert("");

    expect(Trie.ins(2, 2)).toBe(4);
  });
});
