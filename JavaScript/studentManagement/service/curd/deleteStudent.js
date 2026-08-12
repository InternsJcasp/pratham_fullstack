// Delete
// Approach
// 1. Find the student , If student is exist
// 2. then delete the student

export function deleteStudent(students, id) {
  const index = students.findIndex((std) => std.id === id);
  if (index === -1) {
    return students;
  }
  students.splice(index, 1);
  return students;
}
// approach 2:
// export function deleteStudent(students, id) {
//   const filteredStudent = students.filter((std) => std.id !== id);
//   return filterStudent;
// }
