function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

function inOrder(root) {
  if (root === null) {
    return;
  }

  inOrder(root.left);

  console.log(root.value);

  inOrder(root.right);
}
// creating a root node
const root = createNode(1);
// add element at left node
root.left = createNode(2);
// add element at right node
root.right = createNode(3);
// add more element at left node (2)
root.left.left = createNode(4);
// add more element at right node(2)
root.left.right = createNode(5);
// add more element at right node
root.right.right = createNode(6);

inOrder(root);
