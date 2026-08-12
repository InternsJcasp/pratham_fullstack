// Search by Name

// Approach:
// 1. Go through all students using filter().
// 2. Convert both names to lowercase.
// 3. Check if the student's name contains the search text.
// 4. Return all matching students.

export function searchByName(students, searchText) {
  return students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

// Search by ID

// Approach:
// 1. Go through the students using find().
// 2. Compare the student's ID with the given ID.
// 3. Return the matching student.
// 4. If no student is found, return undefined.

export function searchById(students, id) {
  return students.find((student) => student.id === id);
}

// Search by Course

// Approach:
// 1. Go through all students using filter().
// 2. Convert both course names to lowercase.
// 3. Compare the student's course with the given course.
// 4. Return all students having the matching course.

export function searchByCourse(students, course) {
  return students.filter(
    (student) => student.course.toLowerCase() === course.toLowerCase()
  );
}
