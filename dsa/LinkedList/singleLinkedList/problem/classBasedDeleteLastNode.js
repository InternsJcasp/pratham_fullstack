class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    // Create a new node
    let newNode = new Node(value);

    // Case 1: Empty list
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Start from head
    let current = this.head;

    // Find the last node
    while (current.next !== null) {
      current = current.next;
    }

    // Connect last node to new node
    current.next = newNode;
  }

  deleteLast() {
    // Case 1: Empty list
    if (this.head === null) {
      return;
    }

    // Case 2: Only one node
    if (this.head.next === null) {
      this.head = null;
      return;
    }

    // Start from head
    let current = this.head;

    // Find second-last node
    while (current.next.next !== null) {
      current = current.next;
    }

    // Remove last node
    current.next = null;
  }

  display() {
    let current = this.head;

    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.append(40);

console.log("Before deleting last node:");

list.display();

list.deleteLast();

console.log("After deleting last node:");

list.display();
