class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  search(target) {
    let current = this.head;

    while (current !== null) {
      if (current.data === target) {
        return true;
      }

      current = current.next;
    }

    return false;
  }
}
const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

console.log(list.search(30));
console.log(list.search(50));
