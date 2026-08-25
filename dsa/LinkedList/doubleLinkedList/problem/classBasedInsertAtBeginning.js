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

  insertAtBeginning(data) {
    const newNode = new Node(data);

    newNode.next = this.head;

    if (this.head !== null) {
      this.head.prev = newNode;
    }

    this.head = newNode;
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
list.insertAtBeginning(30);
list.insertAtBeginning(20);
list.insertAtBeginning(10);
list.insertAtBeginning(5);

list.display();
