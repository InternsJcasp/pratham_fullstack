function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Create the binary tree
const root = createNode(3);

root.left = createNode(5);
root.right = createNode(1);

root.left.left = createNode(6);
root.left.right = createNode(2);

root.right.left = createNode(0);
root.right.right = createNode(8);

root.left.right.left = createNode(7);
root.left.right.right = createNode(4);

// Lowest Common Ancestor
function lowestCommonAncestor(root, p, q) {
  // Base case:
  // If tree/subtree is empty
  if (root === null) {
    return null;
  }

  // If current node is either p or q
  if (root === p || root === q) {
    return root;
  }

  // Search for p or q in left subtree
  const left = lowestCommonAncestor(root.left, p, q);

  // Search for p or q in right subtree
  const right = lowestCommonAncestor(root.right, p, q);

  // If one node is found on the left
  // and the other node is found on the right,
  // current root is their Lowest Common Ancestor
  if (left !== null && right !== null) {
    return root;
  }

  // If only left subtree contains p or q
  if (left !== null) {
    return left;
  }

  // Otherwise return whatever was found on the right
  return right;
}

// Select p and q
const p = root.left; 
const q = root.right; 


const result = lowestCommonAncestor(root, p, q);

console.log(result);
