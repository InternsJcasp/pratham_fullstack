// Node function
function Node(value) {
  this.value = value;
  this.next = null;
}

// Display linked list
function display(head) {
  let current = head;

  while (current !== null) {
    console.log(current.value);
    current = current.next;
  }
}

// Delete last node
function deleteLast(head) {
  // Case 1: Empty list
  if (head === null) {
    return null;
  }

  // Case 2: Only one node
  if (head.next === null) {
    return null;
  }

  // Start from the head
  let current = head;

  // Find the second-last node
  while (current.next.next !== null) {
    current = current.next;
  }

  // Remove the last node
  current.next = null;

  // Return the updated head
  return head;
}

let head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

console.log("Before deletion:");

display(head);

head = deleteLast(head);

console.log("After deletion:");

display(head);
