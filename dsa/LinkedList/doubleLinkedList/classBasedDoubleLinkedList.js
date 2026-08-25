class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

// Create nodes
const node1 = new Node(10);
const node2 = new Node(20);
const node3 = new Node(30);

// Connect nodes
node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;

// Print forward
let current = node1;

while (current !== null) {
  console.log(current.data);
  current = current.next;
}
