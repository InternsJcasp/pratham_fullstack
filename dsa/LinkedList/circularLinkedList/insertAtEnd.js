let head = null;

function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

function CircularInsertAtEnd(data) {
  const newNode = createNode(data);

  // If list is empty
  if (head === null) {
    head = newNode;
    newNode.next = head;
    return;
  }

  // Find the last node
  let current = head;

  while (current.next !== head) {
    current = current.next;
  }

  // Connect last node to new node
  current.next = newNode;

  // Connect new node back to head
  newNode.next = head;
}

function traverse() {
  if (head === null) {
    console.log("List is empty");
    return;
  }

  let current = head;

  do {
    console.log(current.data);
    current = current.next;
  } while (current !== head);
}
CircularInsertAtEnd(10);
CircularInsertAtEnd(20);
CircularInsertAtEnd(30);
CircularInsertAtEnd(40);

traverse();
