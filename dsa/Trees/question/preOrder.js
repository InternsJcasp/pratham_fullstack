// Function to create a new tree node
function createNode(value) {
  // Return an object representing the node
  return {
    // Store the value inside the node
    value: value,

    // Initially, left child is empty
    left: null,

    // Initially, right child is empty
    right: null,
  };
}

// Function for PreOrder Traversal
function preOrder(root) {
  // If there is no node, stop the function
  if (root === null) {
    return;
  }

  // Step 1: Visit/print the current node
  console.log(root.value);

  // Step 2: Visit the left subtree
  preOrder(root.left);

  // Step 3: Visit the right subtree
  preOrder(root.right);
}

// Create the root node
const root = createNode(1);

// Add left child of 1
root.left = createNode(2);

// Add right child of 1
root.right = createNode(3);

// Add left child of node 2
root.left.left = createNode(4);

// Add right child of node 2
root.left.right = createNode(5);

// Add right child of node 3
root.right.right = createNode(6);

// Start PreOrder Traversal from the root
preOrder(root);
