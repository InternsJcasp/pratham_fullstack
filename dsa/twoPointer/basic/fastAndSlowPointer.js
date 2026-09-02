// Slow and Fast Pointer

// Now let's understand the second major pattern.

// Here both pointers move in the same direction, but at different speeds.

// slow →
// fast →→

// Usually:

// slow moves 1 step
// fast moves 2 steps

// This is extremely common with linked lists.

// It is used for:

// Finding the middle of a linked list
// Detecting a cycle
// Finding the start of a cycle
// Finding the nth node from the end
// Some array problems

// Find the middle of the linked list
// Approached
// 1. slow starts at head.
// 2. fast starts at head.
// 3. Move slow by 1 node.
// 4. Move fast by 2 nodes.
// 5. When fast reaches the end,
//    slow will be at the middle.
// 6. Return slow.

function createNode(value) {
  return {
    value: value,
    next: null,
  };
}

function findMiddle(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

const head = createNode(1);
head.next = createNode(2);
head.next.next = createNode(3);
head.next.next.next = createNode(4);
head.next.next.next.next = createNode(5);

const middle = findMiddle(head);

console.log(middle.value);
