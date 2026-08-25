let head = null;

// Create a new node
function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

// Insert node at beginning
function insertAtBeginning(data) {
  // Create a new node
  const newNode = createNode(data);

  // If list is empty
  if (head === null) {
    head = newNode;

    // The only node points to itself
    newNode.next = head;

    return;
  }

  // Find the last node
  let last = head;

  while (last.next !== head) {
    last = last.next;
  }

  // New node points to current head
  newNode.next = head;

  // Last node points to new node
  last.next = newNode;

  // New node becomes the head
  head = newNode;
}

// Display the circular linked list
function display() {
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

// Insert elements
insertAtBeginning(30);
insertAtBeginning(20);
insertAtBeginning(10);
insertAtBeginning(5);

// Display
display();
