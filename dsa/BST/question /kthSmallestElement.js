function createNode(value) {
  return {
    value: value,
    left: null,
    right: null,
  };
}

const root = createNode(5);
root.left = createNode(2);
root.right = createNode(7);

root.left.left = createNode(1);
root.left.right = createNode(4);
root.left.right.left = createNode(3);

root.right.right = createNode(8);

function kthSmallestElement(root, k) {
  let count = 0;
  let answer = null;

  function inOrder(node) {
    // Base case or early exit if answer is found
    if (node === null || answer !== null) {
      return;
    }

    inOrder(node.left); // 1. Traverse Left

    count += 1; // 2. Process Current Node
    if (count === k) {
      answer = node.value;
      return;
    }

    inOrder(node.right);
  }

  inOrder(root);
  return answer;
}

let k = 3;
const result = kthSmallestElement(root, k);
console.log(result); 
