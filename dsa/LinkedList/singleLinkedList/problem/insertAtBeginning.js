// Create a new node
function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

// Insert a new node at the beginning
function insertAtBeginning(head, data) {
  // Step 1: Create a new node
  let newNode = createNode(data);

  // Step 2: Connect new node to the current head
  newNode.next = head;

  // Step 3: Make the new node the head
  head = newNode;

  // Step 4: Return the updated head
  return head;
}

// Traverse the linked list
function traverse(head) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

// Create the first node
let head = createNode(10);

// Insert 20 at the beginning
head = insertAtBeginning(head, 20);

// Insert 30 at the beginning
head = insertAtBeginning(head, 30);

// Display the linked list
traverse(head);
