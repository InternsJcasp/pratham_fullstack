export function sortByName(students) {
  return [...students].sort((a, b) => a.name.localeCompare(b.name));
}

export function sortByMarksAscending(students) {
  return [...students].sort((a, b) => a.marks - b.marks);
}

export function sortByMarksDescending(students) {
  return [...students].sort((a, b) => b.marks - a.marks);
}
