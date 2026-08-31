// Function to create a new node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Function to find maximum depth
function maxDepth(root) {
  // Base case
  if (root === null) {
    return 0;
  }

  // Find depth of left subtree
  let leftDepth = maxDepth(root.left);

  // Find depth of right subtree
  let rightDepth = maxDepth(root.right);

  // Current node + deeper subtree
  return 1 + Math.max(leftDepth, rightDepth);
}

// Create BST
const root = createNode(10);

root.left = createNode(5);
root.right = createNode(15);

root.left.left = createNode(3);
root.left.right = createNode(7);

root.right.right = createNode(18);

// Find maximum depth
const result = maxDepth(root);

console.log("Maximum Depth:", result);
