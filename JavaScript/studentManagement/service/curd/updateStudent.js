// Update Student

// Approach:
// 1. Find the student using ID.
// 2. Check if the student exists.
// 3. Update the student data.
// 4. Return the updated students.

export function updateStudent(students, id, updateData) {
  const studentFindById = students.find((student) => student.id === id);

  if (!studentFindById) {
    return students;
  }

  Object.assign(studentFindById, updateData);

  return students;
}
