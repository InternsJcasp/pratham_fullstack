// Create a new tree node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Preorder Traversal
// Order: Root → Left → Right
function preOrder(root) {
  // Base case:
  // If tree is empty, stop recursion
  if (root === null) {
    return;
  }

  // 1. Visit the current/root node
  console.log(root.value);

  // 2. Traverse the left subtree
  preOrder(root.left);

  // 3. Traverse the right subtree
  preOrder(root.right);
}
  
// Create the Binary Tree
const root = createNode(1);

root.left = createNode(2);
root.right = createNode(3);

root.left.left = createNode(4);
root.left.right = createNode(5);

root.right.right = createNode(6);

// Call the function
preOrder(root);
