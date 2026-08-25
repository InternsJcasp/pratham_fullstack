// create a node function and it return the object ( data and next element references)
function createNodes(data) {
  return {
    data: data,
    next: null,
  };
}

// create a node and add the element in the node
// Create the first node with data 10
const node1 = createNodes(10);
// Create the first node with data 20
const node2 = createNodes(20);
// Create the first node with data 30
const node3 = createNodes(30);

// connect the node1 to node 2
node1.next = node2;
// connect the node2 to node3
node2.next = node3;

// The first node is the starting point of the linked list
// So, node1 becomes the head

const head = node1;

//  create a function to display the element in the node

function display() {
  // Start traversal from the head node
  let current = head;

  // Continue traversing until current becomes null
  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

display(head);
