// Binary Tree Creation

// Function to create a new tree node
function createNode(value) {
  return {
    value: value, // Store the value of the node
    left: null, // Initially left child is empty
    right: null, // Initially right child is empty
  };
}

// Create a Binary Tree

// Create the root node
//              1
//             / \
//            2   3
const root = createNode(1);

// Add left and right child of root
root.left = createNode(2);
root.right = createNode(3);

// Add children of node 2
//              1
//             / \
//            2   3
//           / \   \
//          4   5   6

root.left.left = createNode(4);
root.left.right = createNode(5);

// Add right child of node 3
root.right.right = createNode(6);

// 1. Post Order Traversal

// PreOrder follows:
// ROOT → LEFT → RIGHT
//
// Example:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6
//
// Output:
// 1 → 2 → 4 → 5 → 3 → 6

function preOrder(root) {
  // Base case:
  // If the current node is null,
  // there is nothing to process.
  if (root === null) {
    return;
  }

  // Step 1: Visit the current/root node
  console.log(root.value);

  // Step 2: Visit the left subtree
  preOrder(root.left);

  // Step 3: Visit the right subtree
  preOrder(root.right);
}

// 2.InOrder Traversal

// InOrder follows:
// LEFT → ROOT → RIGHT
//
// Example:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6
//
// Output:
// 4 → 2 → 5 → 1 → 3 → 6

function inOrder(root) {
  // Base case:
  // Stop when there is no node.
  if (root === null) {
    return;
  }

  // Step 1: Visit the left subtree
  inOrder(root.left);

  // Step 2: Visit the current/root node
  console.log(root.value);

  // Step 3: Visit the right subtree
  inOrder(root.right);
}

// 3.Post Order Traversal

// PostOrder follows:
// LEFT → RIGHT → ROOT
//
// Example:
//        1
//       / \
//      2   3
//     / \   \
//    4   5   6
//
// Output:
// 4 → 5 → 2 → 6 → 3 → 1

function postOrder(root) {
  // Base case:
  // Stop if current node doesn't exist.
  if (root === null) {
    return;
  }

  // Step 1: Visit the left subtree
  postOrder(root.left);

  // Step 2: Visit the right subtree
  postOrder(root.right);

  // Step 3: Visit the current/root node
  console.log(root.value);
}

// 3. Level Order

// Level Order follows:
// Level by Level
//
// Example:
//
//        1          ← Level 1
//       / \
//      2   3        ← Level 2
//     / \   \
//    4   5   6      ← Level 3
//
// Output:
// 1 → 2 → 3 → 4 → 5 → 6
//
// Level Order uses a QUEUE.
// Queue follows FIFO:
// First In → First Out

function levelOrder(root) {
  // If tree is empty, stop the function
  if (root === null) {
    return;
  }

  // Create a queue and put the root node inside it
  const queue = [root];

  // Continue until the queue becomes empty
  while (queue.length > 0) {
    // Remove the first node from the queue
    // shift() removes the first element
    const current = queue.shift();

    // Visit/print the current node
    console.log(current.value);

    // If left child exists,
    // add it to the queue
    if (current.left !== null) {
      queue.push(current.left);
    }

    // If right child exists,
    // add it to the queue
    if (current.right !== null) {
      queue.push(current.right);
    }
  }
}

// Preorder: ROOT → LEFT → RIGHT
console.log("Preorder:");
preOrder(root);

// Inorder: LEFT → ROOT → RIGHT
console.log("Inorder:");
inOrder(root);

// Postorder: LEFT → RIGHT → ROOT
console.log("Postorder:");
postOrder(root);

// Level Order: LEVEL BY LEVEL
console.log("Level Order:");
levelOrder(root);
