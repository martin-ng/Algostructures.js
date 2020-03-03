var MyHashMap = function() {
  this.arr = new Array(10000);
  this.size = 10000;
};

MyHashMap.prototype.put = function(key, value) {
  let newArr = [key, value];
  if (!this.arr[key]) {
    this.arr[key] = [newArr];
  } else {
    for (let i = 0; i < this.arr[key].length; i++) {
      const current = this.arr[key][i];
      if (current[0] === key) {
        this.arr[key][i][1] = value;
        return;
      }
    }
    this.arr[key].push(newArr);
  }
};

MyHashMap.prototype.get = function(key) {
  if (!this.arr[key]) {
    return -1;
  }
  for (let i = 0; i < this.arr[key].length; i++) {
    const current = this.arr[key][i];
    if (current[0] === key) {
      return current[1];
    }
  }
  return -1;
};

MyHashMap.prototype.remove = function(key) {
  if (!this.arr[key]) return;
  for (let i = 0; i < this.arr[key].length; i++) {
    const current = this.arr[key][i];
    if (current[0] === key) {
      this.arr[key].splice(i, 1);
    }
  }
};

// below method is for a hash table that uses strings as keys
MyHashMap.prototype.hashing = function(key) {
  let hashedKey = 0;
  for (let i = 0; i < key.length; i++) {
    hashedKey += key.charCodeAt(i);
  }
  return hashedKey % this.size;
};

// NOTE: This can be refactored using ES6 class syntax

// NOTE: Questions to interviewer if asked to design a hash table.
// 1) Are the keys strictly integers, or can they be strings as well ?
// 2) For collision resolution, can we use chaining ?
// 3) Do we have to worry about load factors?
// 4) Can we assume the inputs are valid or do we have to validate them?
// 5) Can we assume this fits memory?
// 6) Splice method to remove runs in O(n) time, is this acceptable?
