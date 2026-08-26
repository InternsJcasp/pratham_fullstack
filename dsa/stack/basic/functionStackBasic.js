// Create an empty array to store stack elements
const stack = [];

// Push function - adds an element to the top of the stack
function push(element) {
  stack.push(element);
}

// Pop function - removes and returns the top element
function pop() {
  if (isEmpty()) {
    return "Stack is empty";
  }

  return stack.pop();
}

// Peek function - returns the top element without removing it
function peek() {
  if (isEmpty()) {
    return "Stack is empty";
  }

  return stack[stack.length - 1];
}

// isEmpty function - checks whether the stack is empty
function isEmpty() {
  return stack.length === 0;
}

// Size function - returns the number of elements
function size() {
  return stack.length;
}

// Add elements to the stack
push(10);
push(20);
push(30);

// Display the top element
console.log("Top element:", peek());

// Remove the top element
console.log("Removed:", pop());

// Display the new top element
console.log("Top element:", peek());

// Display stack size
console.log("Stack size:", size());
