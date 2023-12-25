const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = {};
    this.length = 0;
  }
  push(element) {
    this.length += 1;
    this.array[this.length] = element;
  }

  pop() {
    if (this.length > 0) {
      const removedEl = this.array[this.length]
      delete this.array[this.length]
      this.length -= 1
      return removedEl
    } else {
      return undefined;
    }
  }

  peek() {
    return this.array[this.length]
  }
}

module.exports = {
  Stack
};
