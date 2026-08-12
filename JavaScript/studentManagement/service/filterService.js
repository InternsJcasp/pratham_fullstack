// Filter by Marks

// Approach:
// 1. Go through all students using filter().
// 2. Check each student's marks.
// 3. Keep students whose marks are greater than or equal to minimum marks.
// 4. Return the filtered students.

export function filterByMarks(students, minimumMarks) {
  return students.filter((student) => student.marks >= minimumMarks);
}

// Filter by Age

// Approach:
// 1. Go through all students using filter().
// 2. Check each student's age.
// 3. Keep students whose age is greater than or equal to minimum age.
// 4. Return the filtered students.

export function filterByAge(students, minimumAge) {
  return students.filter((student) => student.age >= minimumAge);
}
