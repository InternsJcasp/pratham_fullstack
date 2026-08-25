// Function to create a node
function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

// Create nodes
const node1 = createNode(10);
const node2 = createNode(20);
const node3 = createNode(30);

// Connect nodes
node1.next = node2;
node2.next = node3;

// Head points to the first node
const head = node1;

console.log(head);
