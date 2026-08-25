function Node(data) {
  return {
    data: data,
    next: null,
  };
}

const node1 = Node(10);
const node2 = Node(20);
const node3 = Node(30);
const node4 = Node(40);

node1.next = node2;
node2.next = node3;
node3.next = node4;

const head = node1;

function getLength(head) {
  let count = 0;

  let current = head;

  while (current !== null) {
    count++;

    current = current.next;
  }

  return count;
}

console.log(getLength(head));
