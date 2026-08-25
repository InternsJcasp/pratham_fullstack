class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
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
  traverse() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new SingleLinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(40);
list.insertAtEnd(30);
list.insertAtEnd(50);

list.traverse();
