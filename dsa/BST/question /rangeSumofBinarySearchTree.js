function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

function rangeSumBST(root, low, high) {
  // If there is no node
  if (root === null) {
    return 0;
  }

  // Current node is smaller than the range
  if (root.value < low) {
    return rangeSumBST(root.right, low, high);
  }

  // Current node is larger than the range
  if (root.value > high) {
    return rangeSumBST(root.left, low, high);
  }

  // Current node is inside the range
  return (
    root.value +
    rangeSumBST(root.left, low, high) +
    rangeSumBST(root.right, low, high)
  );
}

// Create BST

const root = createNode(10);

root.left = createNode(5);
root.right = createNode(15);

root.left.left = createNode(3);
root.left.right = createNode(7);

root.right.right = createNode(18);

// Range
const low = 7;
const high = 15;


const result = rangeSumBST(root, low, high);

console.log(result);
