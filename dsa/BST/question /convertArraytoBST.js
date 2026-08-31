// Function to create a new BST node
function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Function to convert sorted array to BST
function sortedArrayToBST(nums) {
  // Recursive helper function
  function buildBST(left, right) {
    // Base case
    if (left > right) {
      return null;
    }

    // Find the middle index
    let mid = Math.floor((left + right) / 2);

    // Create root using middle element
    let root = createNode(nums[mid]);

    // Build left subtree
    root.left = buildBST(left, mid - 1);

    // Build right subtree
    root.right = buildBST(mid + 1, right);

    // Return the root
    return root;
  }

  // Start with the complete array
  return buildBST(0, nums.length - 1);
}

// Sorted array
const nums = [-10, -3, 0, 5, 9];

// Convert array to BST
const root = sortedArrayToBST(nums);

// Print the root
console.log(root);
