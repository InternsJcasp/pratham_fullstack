const stack1 = [];
const stack2 = [];
// Add element to queue
function enqueue(value) {
  stack1.push(value);
}

// removing the element in the queue
function dequeue() {
  // queue is empty
  if (stack1.length === 0 && stack2.length === 0) {
    return "Queue is empty";
  }
  //   Move element only when stack 2 is empty
  if (stack2.length === 0) {
    while (stack1.length > 0) {
      stack2.push(stack1.pop());
    }
  }
  return stack2.pop();
}
// See first element
function peek() {
  // Queue is empty
  if (stack1.length === 0 && stack2.length === 0) {
    return "Queue is Empty";
  }

  // Move elements if stack2 is empty
  if (stack2.length === 0) {
    while (stack1.length > 0) {
      stack2.push(stack1.pop());
    }
  }

  return stack2[stack2.length - 1];
}

// Check if queue is empty
function isEmpty() {
  return stack1.length === 0 && stack2.length === 0;
}

enqueue(10);
enqueue(20);
enqueue(30);
console.log(dequeue());