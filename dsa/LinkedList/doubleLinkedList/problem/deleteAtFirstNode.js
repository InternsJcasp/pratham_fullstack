function createNode(data) {
  return {
    data: data,
    prev: null,
    next: null,
  };
}

let head = null;

const node1 = createNode(10);
const node2 = createNode(20);
const node3 = createNode(30);

node1.next = node2;

node2.prev = node1;
node2.next = node3;

node3.prev = node2;

head = node1;

function deleteFirst() {
  if (head === null) {
    console.log("List is empty");
    return;
  }

  head = head.next;

  if (head !== null) {
    head.prev = null;
  }
}

deleteFirst();
