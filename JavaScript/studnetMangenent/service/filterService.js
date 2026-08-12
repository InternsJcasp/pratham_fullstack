// Filter by Marks
export function filterByMarks(students, minimumMarks) {
  return students.filter((student) => student.marks >= minimumMarks);
}

// Filter by Age
export function filterByAge(students, minimumAge) {
  return students.filter((student) => student.age >= minimumAge);
}
