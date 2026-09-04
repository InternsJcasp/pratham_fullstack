// Create a new BST node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Insert a value into BST
function insertBST(root, value) {
  // If root is empty,
  // create and return a new node
  if (root === null) {
    return createNode(value);
  }

  // If value is smaller than root,
  // insert into left subtree
  if (value < root.value) {
    root.left = insertBST(root.left, value);
  }

  // If value is greater than root,
  // insert into right subtree
  else if (value > root.value) {
    root.right = insertBST(root.right, value);
  }

  // Return the unchanged root
  return root;
}

let root = null;

root = insertBST(root, 50);
root = insertBST(root, 30);
root = insertBST(root, 70);
root = insertBST(root, 20);
root = insertBST(root, 40);
root = insertBST(root, 60);
root = insertBST(root, 80);
root = insertBST(root, 65);

console.log(root);
