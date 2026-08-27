function generateBinaryNumber(n) {
  let queue = ["1"];
  let result = [];

  for (let i = 0; i < n; i++) {
    let current = queue.shift();

    result.push(current);

    queue.push(current + "0");
    queue.push(current + "1");
  }
  return result;
}

let answer = generateBinaryNumber(5);
console.log(answer);

// time Complexity : O (n) - single loop for iteration n element
// space complexity :O (n) - binary number store in result or queue array
