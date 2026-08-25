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

  insertAtBeginningNode(data) {
    const newNode = new Node(data);

    newNode.next = this.head;

    this.head = newNode;
  }

  traversal() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let list = new LinkedList();

list.insertAtBeginningNode(10);
list.insertAtBeginningNode(20);
list.insertAtBeginningNode(30);

list.traversal();
