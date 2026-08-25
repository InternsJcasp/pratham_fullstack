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

  deleteFirst() {
    if (this.head === null) {
      console.log("List is empty");
      return;
    }

    this.head = this.head.next;
  }

  display() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);

list.deleteFirst();

list.display();
