// Function to create a new BST node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Function to find minimum distance between BST nodes
function minDiffInBST(root) {
  // Store the previous value visited in inorder traversal
  let prev = null;

  // Store the minimum difference found so far
  let minDiff = Infinity;

  // Inorder traversal function
  function inorder(node) {
    // Base case: if there is no node, stop
    if (node === null) {
      return;
    }

    // 1. Visit left subtree
    inorder(node.left);

    // 2. Process current node

    // We cannot calculate difference for the first node
    if (prev !== null) {
      // Current value - previous value
      let difference = node.value - prev;

      // Keep the smaller difference
      minDiff = Math.min(minDiff, difference);
    }

    // Current node becomes previous node
    prev = node.value;

    // 3. Visit right subtree
    inorder(node.right);
  }

  // Start inorder traversal from root
  inorder(root);

  // Return the minimum difference
  return minDiff;
}

const root = createNode(10);

root.left = createNode(5);
root.right = createNode(15);

root.left.left = createNode(3);
root.left.right = createNode(7);

root.right.right = createNode(18);

const result = minDiffInBST(root);

console.log("Minimum Distance:", result);
