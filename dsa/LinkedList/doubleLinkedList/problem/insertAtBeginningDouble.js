function Node(data) {
  this.data = data;
  this.prev = null;
  this.next = null;
}

let head = null;

function insertAtBeginning(data) {
  let newNode = new Node(data);

  newNode.next = head;

  if (head !== null) {
    head.prev = newNode;
  }
  head = newNode;
}

function display() {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

insertAtBeginning(30);
insertAtBeginning(20);
insertAtBeginning(10);
insertAtBeginning(5);

display();
