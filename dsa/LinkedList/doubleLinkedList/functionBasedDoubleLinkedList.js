function createNode(data) {
  return {
    data: data,
    prev: null,
    next: null,
  };
}

function printForward(head) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

function printBackward(tail) {
  let current = tail;

  while (current !== null) {
    console.log(current.data);
    current = current.prev;
  }
}

// Create nodes
const node1 = createNode(10);
const node2 = createNode(20);
const node3 = createNode(30);

// Connect nodes
node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;

// Forward
console.log("Forward:");
printForward(node1);

// Backward
console.log("Backward:");
printBackward(node3);
