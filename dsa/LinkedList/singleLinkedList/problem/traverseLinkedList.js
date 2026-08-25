function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

// create a node and insert data
const node1 = createNode(10);
const node2 = createNode(20);
const node3 = createNode(30);

// connecting the node1 to node2
node1.next = node2;
// connecting the node2 to node3
node2.next = node3;

const head = node1;

function display() {
  let current = head;
  // Continue traversing until current becomes null
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

display(head);
