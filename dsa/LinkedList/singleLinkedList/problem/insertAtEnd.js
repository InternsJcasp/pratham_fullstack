let head = null;

function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

function insertAtEnd(data) {
  const newNode = createNode(data);

  // If list is empty
  if (head === null) {
    head = newNode;
    return;
  }

  // Start from head
  let current = head;

  // Find the last node
  while (current.next !== null) {
    current = current.next;
  }

  // Connect last node to new node
  current.next = newNode;
}

function traverse() {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

insertAtEnd(10);
insertAtEnd(20);
insertAtEnd(30);
insertAtEnd(40);

traverse();
