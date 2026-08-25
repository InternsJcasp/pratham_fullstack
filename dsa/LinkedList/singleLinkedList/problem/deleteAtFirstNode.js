function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

let head = null;

// Create nodes
const node1 = createNode(10);
const node2 = createNode(20);
const node3 = createNode(30);

// Connect nodes
node1.next = node2;
node2.next = node3;

// Set head
head = node1;

// Delete first node
function deleteFirst() {
  if (head === null) {
    console.log("List is empty");
    return;
  }

  head = head.next;
}

deleteFirst();
