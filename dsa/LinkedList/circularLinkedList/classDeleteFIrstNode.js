class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    let last = this.head;

    while (last.next !== this.head) {
      last = last.next;
    }

    last.next = newNode;
    newNode.next = this.head;
  }

  deleteFirst() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    // Only one node
    if (this.head.next === this.head) {
      this.head = null;
      return;
    }

    // Find last node
    let last = this.head;

    while (last.next !== this.head) {
      last = last.next;
    }

    // Move head to second node
    this.head = this.head.next;

    // Last node points to new head
    last.next = this.head;
  }

  display() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    let current = this.head;

    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.head);
  }
}

const list = new CircularLinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);

list.deleteFirst();

list.display();
