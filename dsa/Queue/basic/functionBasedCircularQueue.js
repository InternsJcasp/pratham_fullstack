const size = 5;

const queue = new Array(size);

let front = -1;
let rear = -1;

// Add element
function enqueue(value) {
  // Check full
  if ((rear + 1) % size === front) {
    console.log("Queue is Full");
    return;
  }

  // First element
  if (front === -1) {
    front = 0;
  }

  // Move rear
  rear = (rear + 1) % size;

  queue[rear] = value;
}

// Remove element
function dequeue() {
  // Check empty
  if (front === -1) {
    console.log("Queue is Empty");
    return;
  }

  const value = queue[front];

  // Only one element
  if (front === rear) {
    front = -1;
    rear = -1;
  } else {
    front = (front + 1) % size;
  }

  return value;
}

// Get first element
function peek() {
  if (front === -1) {
    return "Queue is Empty";
  }

  return queue[front];
}

// Display queue
function display() {
  if (front === -1) {
    console.log("Queue is Empty");
    return;
  }

  let result = [];
  let i = front;

  while (true) {
    result.push(queue[i]);

    if (i === rear) {
      break;
    }

    i = (i + 1) % size;
  }

  console.log(result);
}

enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);

display();

console.log(dequeue());

console.log(dequeue());

enqueue(50);
enqueue(60);

display();
