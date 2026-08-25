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
    newNode.prev = current;
  }

  deleteFirst() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    this.head = this.head.next;

    if (this.head !== null) {
      this.head.prev = null;
    }
  }

  display() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new DoublyLinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);

list.deleteFirst();

list.display();
