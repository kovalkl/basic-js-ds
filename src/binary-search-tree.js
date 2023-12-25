const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.firstRoot = null;
  }

  root() {
    return this.firstRoot;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.firstRoot) {
      this.firstRoot = newNode;
      return;
    }

    let valueOfNode = this.firstRoot;

    while (valueOfNode) {
      if (newNode.data < valueOfNode.data) {
        if (!valueOfNode.left) {
          valueOfNode.left = newNode;
          return;
        }

        valueOfNode = valueOfNode.left;
      } else if (newNode.data === valueOfNode.data) {
        return;
      } else {
        if (!valueOfNode.right) {
          valueOfNode.right = newNode;
          return;
        }

        valueOfNode = valueOfNode.right;
      }
    }
  }

  has(data) {
    if (!this.firstRoot) {
      return false;
    }

    let valueOfNode = this.firstRoot;

    while (valueOfNode) {
      if (data < valueOfNode.data) {
        if (!valueOfNode.left) {
          return false;
        }

        valueOfNode = valueOfNode.left;
      } else if (data === valueOfNode.data) {
        return true;
      } else {
        if (!valueOfNode.right) {
          return false;
        }

        valueOfNode = valueOfNode.right;
      }
    }
  }

  find(data) {
    if (!this.firstRoot) {
      return null;
    }

    let valueOfNode = this.firstRoot;

    while (valueOfNode) {
      if (data < valueOfNode.data) {
        if (!valueOfNode.left) {
          return null;
        }

        valueOfNode = valueOfNode.left;
      } else if (data === valueOfNode.data) {
        return valueOfNode;
      } else {
        if (!valueOfNode.right) {
          return null;
        }

        valueOfNode = valueOfNode.right;
      }
    }
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.firstRoot) {
      return null;
    }

    let valueOfNode = this.firstRoot;
    while (valueOfNode.left) {
      valueOfNode = valueOfNode.left;
    }
    return valueOfNode.data;
  }

  max() {
    if (!this.firstRoot) {
      return null;
    }

    let valueOfNode = this.firstRoot;
    while (valueOfNode.right) {
      valueOfNode = valueOfNode.right;
    }
    return valueOfNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
