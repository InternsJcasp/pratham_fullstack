function Node(data) {
  this.data = data;
  this.next = null;
}

function insertAtEnd(head, data) {
  const newNode = new Node(data);

  if (head === null) {
    return newNode;
  }

  let current = head;

  while (current.next !== null) {
    current = current.next;
  }

  current.next = newNode;

  return head;
}

function printList(head) {
  let current = head;

  while (current !== null) {
    console.log(current.data);
    current = current.next;
  }
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

let head = null;

head = insertAtEnd(head, 10);
head = insertAtEnd(head, 20);
head = insertAtEnd(head, 30);
head = insertAtEnd(head, 40);
head = insertAtEnd(head, 50);

printList(head);

const middle = findMiddle(head);

console.log("Middle:", middle.data);
