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

function removeDup(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      obj[arr[i]] = true;
    }
  }
  return Object.keys(obj);
}
