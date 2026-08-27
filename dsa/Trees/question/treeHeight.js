function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

const root = createNode(1);

root.left = createNode(2);
root.right = createNode(3);

root.left.left = createNode(4);
root.left.right = createNode(5);

root.left.left.left = createNode(6);

function treeHeight(root) {
  // Base case
  if (root === null) {
    return -1;
  }

  // Find left subtree height
  const leftHeight = treeHeight(root.left);

  // Find right subtree height
  const rightHeight = treeHeight(root.right);

  // Return bigger height + 1
  return Math.max(leftHeight, rightHeight) + 1;
}

console.log("Tree Height:", treeHeight(root));
