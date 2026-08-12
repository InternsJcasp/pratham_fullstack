// Sort Students by Name

// Approach:
// 1. Create a copy of the students array.
// 2. Use sort() to compare student names.
// 3. Use localeCompare() to sort names alphabetically.
// 4. Return the sorted array.

export function sortByName(students) {
  return [...students].sort((a, b) => a.name.localeCompare(b.name));
}

// Sort Students by Marks - Ascending

// Approach:
// 1. Create a copy of the students array.
// 2. Use sort() to compare marks.
// 3. Subtract a.marks from b.marks.
// 4. Return the sorted array from lowest to highest marks.

export function sortByMarksAscending(students) {
  return [...students].sort((a, b) => a.marks - b.marks);
}

// Sort Students by Marks - Descending

// Approach:
// 1. Create a copy of the students array.
// 2. Use sort() to compare marks.
// 3. Subtract b.marks from a.marks.
// 4. Return the sorted array from highest to lowest marks.

export function sortByMarksDescending(students) {
  return [...students].sort((a, b) => b.marks - a.marks);
}
