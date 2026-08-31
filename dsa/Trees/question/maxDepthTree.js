// Create a new tree node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Function to find maximum depth of a binary tree
function maxDepth(root) {
  // Approach:
  // If the tree is empty,
  // its depth is 0.
  if (root === null) {
    return 0;
  }

  // Recursively find the depth of the left subtree.
  const leftDepth = maxDepth(root.left);

  // Recursively find the depth of the right subtree.
  const rightDepth = maxDepth(root.right);

  // Current node adds 1 level.
  // Take the larger depth between left and right.
  return 1 + Math.max(leftDepth, rightDepth);
}

// Create Tree

const root = createNode(1);

root.left = createNode(2);
root.right = createNode(3);

root.left.left = createNode(4);
root.left.right = createNode(5);

root.right.right = createNode(6);

// Find maximum depth
console.log(maxDepth(root));
