var LRUCache = function (capacity) {
  this.map = new Map();
  this.cap = capacity;

  this.head = new Node(0, 0);
  this.tail = new Node(0, 0);

  this.head.next = this.tail;
  this.tail.prev = this.head;
};

LRUCache.prototype.get = function (key) {
  let current = this.map.get(key);

  if (!current) {
    return -1;
  }
  this.moveToHead(current);
  return current.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  let current = this.map.get(key);

  if (!current) {
    const newNode = new Node(key, value);
    this.addNode(newNode);
    this.map.set(key, newNode);

    if (this.map.size > this.cap) {
      this.removeNode();
    }
  } else {
    current.key = key;
    current.val = value;
    this.moveToHead(current);
  }
};

LRUCache.prototype.addNode = function (node) {
  node.next = this.head.next;
  node.prev = this.head;

  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.moveToHead = function (node) {
  node.next.prev = node.prev;
  node.prev.next = node.next;

  node.next = this.head.next;
  node.prev = this.head;

  this.head.next.prev = node;
  this.head.next = node;
};

LRUCache.prototype.removeNode = function () {
  let temp = this.tail.prev;
  temp.prev.next = this.tail;
  this.tail.prev = temp.prev;
  this.map.delete(temp.key);
};

function Node(key, val) {
  this.key = key;
  this.val = val;
  this.next = null;
  this.prev = null;
}
