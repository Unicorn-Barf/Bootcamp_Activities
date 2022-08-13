// create the Stack class with two methods to remove and add an element
class Stack {
  constructor(container = []) {
    this.container = container;
  }

  addToStack(newItem) {
    this.container.push(newItem);
  }

  removeFromStack() {
    return this.container.pop();
  }

}

module.exports = Stack;
