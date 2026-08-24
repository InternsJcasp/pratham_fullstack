// Palindrome Check
// version 1
//  olo === olo

function Palindrome(text, index = 0) {
  const reverse = text.split('').reverse().join('');

  if (index === text.length) {
    return 'is palindrome';
  }

  if (text[index] !== reverse[index]) {
    return 'is not palindrome';
  }

  return Palindrome(text, index + 1);
}

console.log(Palindrome('ice'));
// Version 2 :
function palindrome(text, left = 0, right = text.length - 1) {
  // Base case: all characters have been checked
  if (left >= right) {
    return 'is palindrome';
  }

  // If characters don't match
  if (text[left] !== text[right]) {
    return 'is not palindrome';
  }

  // Move both pointers toward the center
  return palindrome(text, left + 1, right - 1);
}

console.log(palindrome('olo'));
