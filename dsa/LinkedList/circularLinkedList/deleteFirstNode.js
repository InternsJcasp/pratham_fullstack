function createNode(data) {
  return {
    data: data,
    next: null,
  };
}

let head = null;

function CircularInsertAtEnd(data) {
  const newNode = createNode(data);

  if (head === null) {
    head = newNode;
    newNode.next = head;
    return;
  }

  let last = head;

  while (last.next !== head) {
    last = last.next;
  }

  last.next = newNode;
  newNode.next = head;
}

function deleteFirst() {
  if (head === null) {
    console.log("List is empty");
    return;
  }

  if (head.next === head) {
    head = null;
    return;
  }

  let last = head;

  while (last.next !== head) {
    last = last.next;
  }

  head = head.next;

  last.next = head;
}
insertAtEnd(10);
insertAtEnd(20);
insertAtEnd(30);

deleteFirst();
