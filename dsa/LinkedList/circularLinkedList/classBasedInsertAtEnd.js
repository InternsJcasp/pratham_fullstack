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

    // Empty list
    if (this.head === null) {
      this.head = newNode;
      newNode.next = this.head;
      return;
    }

    // Find last node
    let current = this.head;

    while (current.next !== this.head) {
      current = current.next;
    }

    // Connect last node to new node
    current.next = newNode;

    // Connect new node to head
    newNode.next = this.head;
  }

  traverse() {
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
list.insertAtEnd(40);

list.traverse();
