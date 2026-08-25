let head = null;
let tail = null;

function createNode(data) {
  return {
    data: data,
    prev: null,
    next: null,
  };
}

function insertAtEnd(data) {
  const newNode = createNode(data);

  // If list is empty
  if (head === null) {
    head = newNode;
    tail = newNode;

    return;
  }

  // Connect old tail to new node
  tail.next = newNode;

  // Connect new node to old tail
  newNode.prev = tail;

  // Make new node the tail
  tail = newNode;
}

function traverseForward() {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

function traverseBackward() {
  let current = tail;

  while (current !== null) {
    console.log(current.data);
    current = current.prev;
  }
}

insertAtEnd(10);
insertAtEnd(20);
insertAtEnd(30);
insertAtEnd(40);

console.log("Forward:");
traverseForward();

console.log("Backward:");
traverseBackward();
