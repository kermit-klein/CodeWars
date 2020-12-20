class Stack {
  constructor() {
    this.top = -1;
    this.store = [];
  }

  pop() {
    this.top--;
    this.store.length = this.top + 1;
  }

  push(item) {
    this.top++;
    this.store[this.top] = item;
  }

  getTop() {
    return this.store[this.top];
  }
}
