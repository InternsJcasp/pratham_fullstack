// Normal stack.
// This array stores all the elements.
const stack = [];

// Min stack.
// This array stores the minimum values.
const minStack = [];

// PUSH FUNCTION
// Adds a new value to the stack.
function push(value) {
  // Step 1:
  // Add the value to the normal stack.
  stack.push(value);

  // Step 2:
  // Check whether minStack is empty.
  if (minStack.length === 0) {
    // If minStack is empty,
    // the current value becomes the minimum.
    minStack.push(value);
  }

  // If minStack is NOT empty,
  // compare the new value with the current minimum.
  else if (value <= minStack[minStack.length - 1]) {
    // If the new value is smaller than
    // or equal to the current minimum,
    // add it to minStack.
    minStack.push(value);
  }
}

// POP FUNCTION

// Removes and returns the top element.
function pop() {
  // Check whether the stack is empty.
  if (stack.length === 0) {
    // Nothing to remove.
    return null;
  }

  // Remove the top element from the normal stack.
  const removedValue = stack.pop();

  // Check whether the removed value
  // is also the current minimum.
  if (removedValue === minStack[minStack.length - 1]) {
    // If it is the minimum,
    // remove it from minStack too.
    minStack.pop();
  }

  // Return the removed value.
  return removedValue;
}

// Returns the top element without removing it.
function peek() {
  // Check whether stack is empty.
  if (stack.length === 0) {
    // Nothing is available.
    return null;
  }

  // Return the last element.
  // The last element represents the top of our stack.
  return stack[stack.length - 1];
}

// Returns the minimum value in O(1) time.
function getMin() {
  // Check whether minStack is empty.
  if (minStack.length === 0) {
    // There is no minimum value.
    return null;
  }

  // The top of minStack always contains
  // the current minimum value.
  return minStack[minStack.length - 1];
}

push(3);
push(4);
push(2);
push(1);

console.log("Stack element");
console.log(stack);
console.log("MinStack");
console.log(minStack);
