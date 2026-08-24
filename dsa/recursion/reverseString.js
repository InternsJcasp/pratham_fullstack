// reverse string
// version 1:
function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString('hello'));
// version 2:
function reverseString(str, index = str.length - 1) {
  if (index < 0) {
    return '';
  }

  return str[index] + reverseString(str, index - 1);
}

console.log(reverseString('hello'));
