const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.array = {};
    this.head = 0;
    this.tail = 0;
  }
  getUnderlyingList() {
    function returnArr(head, tail, arr) {
      if (tail > head) {
        return {value: arr[head], next: returnArr(head + 1, tail, arr)}
      } else {
        return null;
      }
    }
    return returnArr(this.head, this.tail, this.array)
  }

  enqueue(value) {
    this.array[this.tail] = value;
    this.tail += 1;
  }

  dequeue() {
    let removedEl = this.array[this.head];
    delete this.array[this.head];
    this.head += 1;
    return removedEl;
  }
}

module.exports = {
  Queue,
};
