// Function to create a new tree node
function createNode(value) {
  // Return a node object
  return {
    // Store the value
    value: value,

    // Initially, left child is empty
    left: null,

    // Initially, right child is empty
    right: null,
  };
}

// Function for PostOrder Traversal
function postOrder(root) {
  // If there is no node, stop
  if (root === null) {
    // Go back to the previous node
    return;
  }

  // Step 1: First visit the left subtree
  postOrder(root.left);

  // Step 2: Then visit the right subtree
  postOrder(root.right);

  // Step 3: Finally print the current node
  console.log(root.value);
}

// Create the root node
const root = createNode(1);

// Add left child of 1
root.left = createNode(2);

// Add right child of 1
root.right = createNode(3);

// Add left child of 2
root.left.left = createNode(4);

// Add right child of 2
root.left.right = createNode(5);

// Add right child of 3
root.right.right = createNode(6);

// Start PostOrder Traversal from root
postOrder(root);
