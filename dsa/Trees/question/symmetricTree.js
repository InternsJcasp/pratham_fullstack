// Create a new tree node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Helper function to check whether two trees
// are mirror images of each other
function isMirror(leftTree, rightTree) {
  // Approach:
  // If both nodes are null,
  // they are mirror images.
  if (leftTree === null && rightTree === null) {
    return true;
  }

  // If only one node is null,
  // they cannot be mirrors.
  if (leftTree === null || rightTree === null) {
    return false;
  }

  // Current node values must be equal.
  if (leftTree.value !== rightTree.value) {
    return false;
  }

  // Compare:
  // Left tree's LEFT  with Right tree's RIGHT
  // Left tree's RIGHT with Right tree's LEFT
  return (
    isMirror(leftTree.left, rightTree.right) &&
    isMirror(leftTree.right, rightTree.left)
  );
}

// Function to check whether the tree is symmetric
function isSymmetric(root) {
  // An empty tree is symmetric.
  if (root === null) {
    return true;
  }

  // Compare the left subtree and right subtree
  // as mirror images.
  return isMirror(root.left, root.right);
}

const root = createNode(1);

root.left = createNode(2);
root.right = createNode(2);

root.left.left = createNode(3);
root.left.right = createNode(4);

root.right.left = createNode(4);
root.right.right = createNode(3);

// Check whether tree is symmetric
console.log(isSymmetric(root));
