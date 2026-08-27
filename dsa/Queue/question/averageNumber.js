const size = 3;

const queue = new Array(size);

let front = 0;
let rear = -1;
let count = 0;
let sum = 0;

// Add element
function enqueue(value) {
  // If queue is full
  if (count === size) {
    // Remove oldest element
    const removed = queue[front];

    sum = sum - removed;

    front = (front + 1) % size;

    count--;
  }

  // Move rear
  rear = (rear + 1) % size;

  // Add new value
  queue[rear] = value;

  // Add value to sum
  sum = sum + value;

  // Increase count
  count++;

  // Calculate average
  const average = sum / count;

  return average;
}

console.log(enqueue(1));
console.log(enqueue(10));
console.log(enqueue(3));
console.log(enqueue(5));
console.log(enqueue(7));

// time Complexity : O(1)
// space Complexity : O(1)
