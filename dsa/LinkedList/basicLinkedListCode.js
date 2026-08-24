// Node class represents a single node in the linked list
class Node {
  // Constructor is called whenever a new Node is created
  constructor(data) {
    // Store the value/data inside the node
    this.data = data;

    // Initially, the node does not point to any other node
    this.next = null;
  }
}

// Create the first node with data 10
const node1 = new Node(10);

// Create the second node with data 20
const node2 = new Node(20);

// Create the third node with data 30
const node3 = new Node(30);

// Connect node1 to node2
// 10 → 20
node1.next = node2;

// Connect node2 to node3
// 10 → 20 → 30
node2.next = node3;

// The first node is the starting point of the linked list
// So, node1 becomes the head
const head = node1;

// Start traversal from the head node
let current = head;

// Continue traversing until current becomes null
while (current !== null) {
  // Print the data of the current node
  console.log(current.data);

  // Move to the next node
  current = current.next;
}
