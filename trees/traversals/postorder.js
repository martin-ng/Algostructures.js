function ListNode(value) {
  this.value = value;
  this.left = this.right = null;
}

let newNode = new ListNode(10);
newNode.left = new ListNode(5);
newNode.right = new ListNode(15);

newNode.left.left = new ListNode(3);
newNode.left.right = new ListNode(7);

newNode.right.left = new ListNode(9);
newNode.right.right = new ListNode(11);

function postOrder(root) {
  if (!root) return [];
  let res = [];
  let stack = [];

  let current = root;

  while (current || stack.length) {
    if (current) {
      stack.push(current);
      current = current.left;
      console.log("stack:", stack);
    } else {
      let temp = stack[stack.length - 1].right;
      if (!temp) {
        temp = stack.pop();
        console.log("temp: ", temp);
        res.push(temp.value);
        while (stack.length && temp === stack[stack.length - 1].right) {
          temp = stack.pop();
          res.push(temp.value);
        }
      } else {
        current = temp;
      }
    }
  }
  console.log(res);
}

postOrder(newNode);
