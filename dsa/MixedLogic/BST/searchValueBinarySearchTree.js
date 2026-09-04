// Create a new BST node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Search a value in Binary Search Tree
function searchBST(root, target) {
  // Base case:
  // If tree is empty or value is not found
  if (root === null) {
    return false;
  }

  // Target found
  if (root.value === target) {
    return true;
  }

  // If target is smaller, search in left subtree
  if (target < root.value) {
    return searchBST(root.left, target);
  }

  // If target is greater, search in right subtree
  return searchBST(root.right, target);
}

// Create BST
const root = createNode(50);

root.left = createNode(30);
root.right = createNode(70);

root.left.left = createNode(20);
root.left.right = createNode(40);

root.right.left = createNode(60);
root.right.right = createNode(80);

console.log(searchBST(root, 60)); // true
console.log(searchBST(root, 90)); // false
