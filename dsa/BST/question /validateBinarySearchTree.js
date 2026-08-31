function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

function insert(root, value) {
  // If the tree/subtree is empty,
  // create a new node here.
  if (root === null) {
    return createNode(value);
  }

  // If value is smaller than current node,
  // insert into the left subtree.
  if (value < root.value) {
    root.left = insert(root.left, value);
  }

  // If value is greater than current node,
  // insert into the right subtree.
  else if (value > root.value) {
    root.right = insert(root.right, value);
  }

  // Return the root of the current subtree.
  return root;
}

function isValidBST(root) {
  // min = minimum allowed value for this node
  // max = maximum allowed value for this node
  function validate(node, min, max) {
    // BASE CASE:
    // An empty tree/subtree is always a valid BST.
    if (node === null) {
      return true;
    }

    // The current node's value must be strictly
    // greater than min and strictly smaller than max.
    //
    // If the value is outside the allowed range,
    // this tree is NOT a valid BST.
    if (node.value <= min || node.value >= max) {
      return false;
    }

    // Check the LEFT subtree.
    //
    // Left subtree values must be:
    //
    //     min < value < node.value
    //
    // Therefore:
    // min stays the same
    // max becomes node.value
    //
    // Then check the RIGHT subtree.
    //
    // Right subtree values must be:
    //
    //     node.value < value < max
    //
    // Therefore:
    // min becomes node.value
    // max stays the same
    return (
      validate(node.left, min, node.value) &&
      validate(node.right, node.value, max)
    );
  }

  // Initially, the root has no restriction.
  //
  // Therefore:
  // minimum = -Infinity
  // maximum = Infinity
  //
  // This means the root can contain any number.
  return validate(root, -Infinity, Infinity);
}

let root1 = null;

root1 = insert(root1, 50);
root1 = insert(root1, 30);
root1 = insert(root1, 70);
root1 = insert(root1, 20);
root1 = insert(root1, 40);
root1 = insert(root1, 60);
root1 = insert(root1, 80);

console.log("Test 1:", isValidBST(root1));  

let root2 = createNode(50);

root2.left = createNode(30);
root2.right = createNode(70);

root2.left.left = createNode(20);
root2.left.right = createNode(60);

console.log("Test 2:", isValidBST(root2));

let root3 = createNode(10);

root3.left = createNode(5);
root3.right = createNode(15);

root3.left.left = createNode(2);
root3.left.right = createNode(7);

root3.right.left = createNode(12);
root3.right.right = createNode(20);

console.log("Test 3:", isValidBST(root3));

let root4 = createNode(10);

root4.left = createNode(5);
root4.right = createNode(15);

root4.right.left = createNode(6);

console.log("Test 4:", isValidBST(root4));
