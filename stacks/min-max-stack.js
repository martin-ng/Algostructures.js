class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minMaxStack = [];
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      let lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

const newStack = new MinMaxStack();

newStack.push(5);
console.log(newStack);
newStack.push(10);
console.log(newStack);
newStack.pop();
console.log(newStack);
newStack.getMax();
newStack.push(8);
newStack.getMin();
newStack.push(9);
console.log(newStack);
