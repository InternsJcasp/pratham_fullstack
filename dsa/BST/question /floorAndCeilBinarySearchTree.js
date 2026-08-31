function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

// Create BST
const root = createNode(8);

root.left = createNode(4);
root.right = createNode(12);

root.left.left = createNode(2);
root.left.right = createNode(6);

root.right.left = createNode(10);
root.right.right = createNode(14);

root.left.right.left = createNode(5);
root.left.right.right = createNode(7);

// Find Floor and Ceil
function findFloorAndCeil(root, target) {
  let floor = null;
  let ceil = null;

  let current = root;

  while (current !== null) {
    // Target found
    if (current.value === target) {
      floor = current.value;
      ceil = current.value;
      break;
    }

    // Current value is greater than target
    if (current.value > target) {
      // Current value can be a possible ceil
      ceil = current.value;

      // Search for a smaller ceil
      current = current.left;
    }

    // Current value is smaller than target
    else {
      // Current value can be a possible floor
      floor = current.value;

      // Search for a larger floor
      current = current.right;
    }
  }

  return {
    floor: floor,
    ceil: ceil,
  };
}

// Target value
const target = 9;

const result = findFloorAndCeil(root, target);

console.log(result);
