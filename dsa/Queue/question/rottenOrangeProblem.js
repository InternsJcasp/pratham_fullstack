function orangesRotting(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const queue = [];

  let freshCount = 0;

  // Step 1: Find rotten and fresh oranges
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 2) {
        queue.push([row, col]);
      }

      if (grid[row][col] === 1) {
        freshCount++;
      }
    }
  }

  // Four possible directions
  const directions = [
    [-1, 0], // UP
    [1, 0], // DOWN
    [0, -1], // LEFT
    [0, 1], // RIGHT
  ];

  let minutes = 0;

  // Step 2: Process queue
  while (queue.length > 0 && freshCount > 0) {
    const currentSize = queue.length;

    // Process all oranges of current minute
    for (let i = 0; i < currentSize; i++) {
      const [row, col] = queue.shift();

      // Check all 4 directions
      for (const [rowDirection, colDirection] of directions) {
        const newRow = row + rowDirection;
        const newCol = col + colDirection;

        // Check boundary
        if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
          continue;
        }

        // Check fresh orange
        if (grid[newRow][newCol] === 1) {
          // Make it rotten
          grid[newRow][newCol] = 2;

          // One less fresh orange
          freshCount--;

          // Add newly rotten orange to queue
          queue.push([newRow, newCol]);
        }
      }
    }

    // One minute completed
    minutes++;
  }

  // Step 3: Check remaining fresh oranges
  if (freshCount > 0) {
    return -1;
  }

  return minutes;
}
