// Short Approach:
// 1. Use two pointers: left and right.
// 2. left starts from the beginning.
// 3. right starts from the end.
// 4. Skip non-alphanumeric characters.
// 5. Compare both characters in lowercase.
// 6. If they are different, return false.
// 7. If they are the same, move both pointers inward.
// 8. If all characters match, return true.

function isPalindrome(s) {
  // Pointer starting from the beginning.
  let left = 0;

  // Pointer starting from the end.
  let right = s.length - 1;

  // Continue until the pointers meet.
  while (left < right) {
    // Skip characters that are not letters or numbers.
    if (!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }

    // Skip characters that are not letters or numbers.
    if (!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }

    // Compare both characters after converting them to lowercase.
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    // Move left pointer toward the center.
    left++;

    // Move right pointer toward the center.
    right--;
  }

  // If all valid characters matched, it is a palindrome.
  return true;
}

// Helper function to check whether a character
// is a letter or a number.
function isAlphaNumeric(ch) {
  const code = ch.charCodeAt(0);
  console.log("ch", ch, "code is:", code);
  const isDigit = code >= 48 && code <= 57; // '0'–'9'
  const isUpper = code >= 65 && code <= 90; // 'A'–'Z'
  const isLower = code >= 97 && code <= 122; // 'a'–'z'
  return isDigit || isUpper || isLower;
}

const input = "A man, a plan, a canal: Panama";

const result = isPalindrome(input);

console.log(result);

// Time Complexity: O(n)
// Space Complexity: O(1)
