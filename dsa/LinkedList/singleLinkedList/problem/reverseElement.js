// Node
function Node(data) {
  this.data = data;
  this.next = null;
}

// Create linked list
let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

// Display Linked List
function display(head) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
}

// Reverse Linked List
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    // 1. Save the next node
    let next = current.next;

    // 2. Reverse the pointer
    current.next = prev;

    // 3. Move prev forward
    prev = current;

    // 4. Move current forward
    current = next;
  }

  // prev is the new head
  return prev;
}

// Before Reverse
console.log("Before Reverse:");
display(head);

// Reverse
head = reverseLinkedList(head);

// After Reverse
console.log("After Reverse:");
display(head);
