// Function to create a new BST node
function createNode(value) {
  return {
    value: value, // Store the value
    left: null, // Left child
    right: null, // Right child
  };
}

// Function to insert a value into the BST
function insert(root, value) {
  // If the tree/subtree is empty,
  // create a new node and return it.
  if (root === null) {
    return createNode(value);
  }

  // If value is smaller than root,
  // insert into the left subtree.
  if (value < root.value) {
    root.left = insert(root.left, value);
  }

  // If value is greater than root,
  // insert into the right subtree.
  else if (value > root.value) {
    root.right = insert(root.right, value);
  }

  // Return the current root.
  return root;
}

// Function to search for a value in the BST
function search(root, value) {
  // APPROACH:
  // 1. If root is null, the value does not exist.
  // 2. If root.value equals the value,
  //    we found the value.
  // 3. If value is smaller than root.value,
  //    search in the left subtree.
  // 4. If value is greater than root.value,
  //    search in the right subtree.

  // BASE CASE:
  // If root is null, there is no node to search.
  if (root === null) {
    return false;
  }

  // If current node contains the value,
  // the value has been found.
  if (root.value === value) {
    return true;
  }

  // If the value is smaller than current node,
  // search only in the left subtree.
  if (value < root.value) {
    return search(root.left, value);
  }

  // If the value is greater than current node,
  // search only in the right subtree.
  return search(root.right, value);
}

// CREATE BST

let root = null;

// Insert values into the BST
root = insert(root, 50);
root = insert(root, 30);
root = insert(root, 70);
root = insert(root, 20);
root = insert(root, 40);
root = insert(root, 10);

// BST STRUCTURE

//
//              50
//             /  \
//           30    70
//          /  \
//        20    40
//       /
//      10
//
// Search for 40
console.log("Search 40:", search(root, 40));

// Search for 70
console.log("Search 70:", search(root, 70));

// Search for 10
console.log("Search 10:", search(root, 10));

// Search for 100
console.log("Search 100:", search(root, 100));

// Search for 25
console.log("Search 25:", search(root, 25));
