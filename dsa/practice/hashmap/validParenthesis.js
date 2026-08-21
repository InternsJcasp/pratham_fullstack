// Approach:
// 1. Use HashMap to store closing bracket -> opening bracket
// 2. Use Stack to store opening brackets
// 3. If current character is an opening bracket, push it into stack
// 4. If it is a closing bracket:
//    - Get the expected opening bracket from HashMap
//    - Compare it with the top of stack
//    - If they don't match, return false
// 5. At the end, stack should be empty for valid parentheses
function isValid(s) {
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  const stack = [];

  for (let char of s) {
    // Opening bracket
    if (!map.has(char)) {
      stack.push(char);
    }
    // Closing bracket
    else {
      if (stack.pop() !== map.get(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([{}])"));

// time complexity : O(n)  -> single loop
// space complexity :O(n)
