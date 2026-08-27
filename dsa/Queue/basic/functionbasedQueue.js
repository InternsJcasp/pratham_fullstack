const queue = [];

// Add element
function enqueue(element) {
  queue.push(element);
}

// Remove first element
function dequeue() {
  if (queue.length === 0) {
    return "Queue is empty";
  }

  return queue.shift();
}

// Get first element
function peek() {
  if (queue.length === 0) {
    return "Queue is empty";
  }

  return queue[0];
}

// Check empty
function isEmpty() {
  return queue.length === 0;
}

// Get size
function size() {
  return queue.length;
}

// Display queue
function display() {
  console.log(queue);
}

enqueue(10);
enqueue(20);
enqueue(30);

display();

console.log(peek());

console.log(dequeue());

display();

console.log(size());
