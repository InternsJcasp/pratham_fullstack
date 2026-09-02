// Short Approach:
// 1. Start i at the last actual element of nums1.
// 2. Start j at the last element of nums2.
// 3. Start k at the last position of nums1.
// 4. Compare nums1[i] and nums2[j].
// 5. Put the larger value at nums1[k].
// 6. Move the corresponding pointer backward.
// 7. Continue until all elements of nums2 are merged.
//

function mergeSortedArray(nums1, m, nums2, n) {
  // i points to the last actual element in nums1.
  let i = m - 1;

  // j points to the last element in nums2.
  let j = n - 1;

  // k points to the last position of nums1.
  let k = m + n - 1;

  // Continue while nums2 still has elements.
  while (j >= 0) {
    // If nums1 still has elements
    // and its current element is greater than nums2's element.
    if (i >= 0 && nums1[i] > nums2[j]) {
      // Put nums1[i] at the current position.
      nums1[k] = nums1[i];

      // Move i backward.
      i--;
    } else {
      // Otherwise, put nums2[j] at the current position.
      nums1[k] = nums2[j];

      // Move j backward.
      j--;
    }

    // Move the position where we will put
    // the next largest element.
    k--;
  }

  // Return the merged array.
  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

const result = mergeSortedArray(nums1, 3, nums2, 3);

console.log(result);

// Time Complexity: O(m + n)
// Space Complexity: O(1)
