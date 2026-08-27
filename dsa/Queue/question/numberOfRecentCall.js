// Queue
const queue = [];

// Add a new call
function ping(t) {
  // Add current call time into queue
  queue.push(t);

  // Remove old calls
  while (queue[0] < t - 3000) {
    queue.shift();
  }

  // Return number of recent calls
  return queue.length;
}

// Test the function
console.log(ping(1)); // 1
console.log(ping(100)); // 2
console.log(ping(3001)); // 3
console.log(ping(3002)); // 3
