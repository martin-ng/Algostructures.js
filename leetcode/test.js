function ListNode(value) {
  this.value = value;
  this.left = this.right = null;
}

let newNode = new ListNode(5);
newNode.left = new ListNode(1);
newNode.right = new ListNode(4);

//   newNode.left.left = new ListNode(3);
//   newNode.left.right = new ListNode(7);

newNode.right.left = new ListNode(4);
newNode.right.right = new ListNode(6);

var isValidBST = function(root) {
  if (!root) return false;
  let res = [];

  function helper(node, res) {
    if (!node) return;

    helper(node.left, res);
    res.push(node.val);
    helper(node.right, res);
  }

  //   for (let i = 0; i < res.length; i++) {
  //     if (res[i] > res[i + 1]) return false;
  //   }
  console.log(res);
  //   return true;
};

isValidBST(newNode);
