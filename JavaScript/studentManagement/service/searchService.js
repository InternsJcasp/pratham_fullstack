// Search by Name
export function searchByName(students, searchText) {
  return students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

// Search by ID
export function searchById(students, id) {
  return students.find((student) => student.id === id);
}

// Search by Course
export function searchByCourse(students, course) {
  return students.filter(
    (student) => student.course.toLowerCase() === course.toLowerCase()
  );
}
