// Function to create a new BST node
function createNode(value) {
  return {
    value: value, // Store the value in the node
    left: null, // Initially, left child is empty
    right: null, // Initially, right child is empty
  };
}

// Function to insert a value into the Binary Search Tree
function insert(root, value) {
  // APPROACH:
  // 1. If the tree/subtree is empty, create a new node.
  // 2. If value is smaller than the current node,
  //    recursively insert it into the left subtree.
  // 3. If value is greater than the current node,
  //    recursively insert it into the right subtree.
  // 4. If value is equal, we do nothing
  //    because this implementation does not allow duplicates.
  // 5. Finally, return the root of the current subtree.

  // BASE CASE:
  // If root is null, it means we have found the
  // correct empty position for the new value.
  if (root === null) {
    // Create and return the new node.
    // This returned node becomes the child of
    // the previous node.
    return createNode(value);
  }

  // If the new value is smaller than the current node,
  // according to BST property, it must go to the left subtree.
  if (value < root.value) {
    // Recursively insert the value into the left subtree.
    //
    // Example:
    // If root = 50 and value = 30,
    // 30 < 50, so we call:
    // insert(root.left, 30)
    //
    // The returned node is assigned to root.left.
    root.left = insert(root.left, value);
  }

  // If the new value is greater than the current node,
  // it must go to the right subtree.
  else if (value > root.value) {
    // Recursively insert the value into the right subtree.
    //
    // Example:
    // If root = 50 and value = 70,
    // 70 > 50, so we call:
    // insert(root.right, 70)
    //
    // The returned node is assigned to root.right.
    root.right = insert(root.right, value);
  }

  // If value === root.value,
  // nothing happens.
  // Therefore, duplicate values are ignored.

  // Return the current root.
  // This is important because the recursive call
  // needs to connect the newly created node
  // back to the tree.
  return root;
}

// Initially, the tree is empty.
let root = null;

// Insert 50
// Tree: 50
root = insert(root, 50);

// Insert 30
// 30 < 50 → goes to the left
//
//       50
//      /
//     30
root = insert(root, 30);

// Insert 70
// 70 > 50 → goes to the right
//
//       50
//      /  \
//     30   70
root = insert(root, 70);

// Insert 20
// 20 < 50 → left
// 20 < 30 → left
//
//       50
//      /  \
//     30   70
//    /
//   20
root = insert(root, 20);

// Insert 40
// 40 < 50 → left
// 40 > 30 → right
//
//       50
//      /  \
//     30   70
//    /  \
//   20   40
root = insert(root, 40);

// Insert 10
// 10 < 50 → left
// 10 < 30 → left
// 10 < 20 → left
//
//          50
//         /  \
//       30    70
//      /  \
//    20    40
//   /
//  10
root = insert(root, 10);
