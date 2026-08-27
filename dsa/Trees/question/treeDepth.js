function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Create tree
const root = createNode(1);

root.left = createNode(2);
root.right = createNode(3);

root.left.left = createNode(4);
root.left.right = createNode(5);

// Find maximum depth
function treeDepth(root) {
  // If tree is empty
  if (root === null) {
    return 0;
  }

  // Find depth of left subtree
  const leftDepth = treeDepth(root.left);

  // Find depth of right subtree
  const rightDepth = treeDepth(root.right);

  // Return current node + deeper subtree
  return 1 + Math.max(leftDepth, rightDepth);
}

console.log("Tree Depth:", treeDepth(root));
