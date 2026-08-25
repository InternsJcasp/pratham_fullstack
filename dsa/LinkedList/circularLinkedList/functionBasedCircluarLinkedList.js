function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

function traverse(head) {
  if (head === null) {
    return;
  }

  let current = head;

  do {
    console.log(current.data);
    current = current.next;
  } while (current !== head);
}

// Create nodes
let node1 = createNode(10);
let node2 = createNode(20);
let node3 = createNode(30);

// Connect nodes
node1.next = node2;
node2.next = node3;
node3.next = node1;

// Head
let head = node1;

// Traverse
traverse(head);
