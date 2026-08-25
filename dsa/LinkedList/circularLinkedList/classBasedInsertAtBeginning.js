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

  insertAtBeginning(data) {
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

    newNode.next = this.head;
    last.next = newNode;
    this.head = newNode;
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

list.insertAtBeginning(30);
list.insertAtBeginning(20);
list.insertAtBeginning(10);
list.insertAtBeginning(5);

list.display();
