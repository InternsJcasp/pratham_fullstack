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

  getLength() {
    let count = 0;

    let current = this.head;

    while (current !== null) {
      count++;

      current = current.next;
    }

    return count;
  }
}

const list = new LinkedList();

list.insert(10);
list.insert(20);
list.insert(30);
list.insert(40);

console.log(list.getLength());
