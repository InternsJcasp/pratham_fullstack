class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);

    // List is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    // Connect old tail to new node
    this.tail.next = newNode;

    // Connect new node back to old tail
    newNode.prev = this.tail;

    // Update tail
    this.tail = newNode;
  }

  traverseForward() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  traverseBackward() {
    let current = this.tail;

    while (current !== null) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

const list = new DoublyLinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtEnd(40);

console.log("Forward:");
list.traverseForward();

console.log("Backward:");
list.traverseBackward();
