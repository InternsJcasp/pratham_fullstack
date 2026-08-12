// For Student Statistics we are gonna use reduce
// Operations:
// Total Marks, Average Marks, Highest Marks,
// Lowest Marks, Number of Students, Course-Wise Statistics.

// Total Marks:

// Approach:
// 1. Go through all students using reduce().
// 2. Start total marks from 0.
// 3. Add each student's marks to total.
// 4. Return the total marks.

export const getTotalMarks = (students) => {
  return students.reduce((acc, curr) => {
    // acc = total marks
    // curr = current student

    acc += curr.marks;

    return acc;
  }, 0);
};

// Average Marks:

// Approach:
// 1. Use reduce() to calculate total marks.
// 2. Add marks of every student.
// 3. Divide total marks by number of students.
// 4. Keep the result up to 2 decimal places.

export const getAverageMarks = (students) => {
  let result = students.reduce((acc, curr) => {
    // acc = total marks
    // curr = current student

    acc += curr.marks;

    return acc;
  }, 0);

  return (result / students.length).toFixed(2);
};

// Highest Marks:

// Approach:
// 1. Go through all students using reduce().
// 2. Compare current marks with highest marks.
// 3. Keep the bigger value.
// 4. Return the highest marks.

export const getHighestMarks = (students) => {
  return students.reduce(
    (highest, student) => Math.max(highest, student.marks),
    -Infinity
  );
};

// Lowest Marks:

// Approach:
// 1. Go through all students using reduce().
// 2. Compare current marks with lowest marks.
// 3. Keep the smaller value.
// 4. Return the lowest marks.

export const getLowestMarks = (students) => {
  return students.reduce(
    (lowest, student) => Math.min(lowest, student.marks),
    Infinity
  );
};

// Total Number of Students:

// Approach:
// 1. Use length to count students.
// 2. No reduce() is needed.
// 3. Return the number of students.

export const getTotalNumberOfStudents = (students) => {
  return students.length;
};

// Course-Wise Statistics:

// Approach:
// 1. Go through every student using reduce().
// 2. Check the student's course.
// 3. If the course exists, update its statistics.
// 4. If the course does not exist, create it.
// 5. Store count, total marks and average marks.
// 6. Return all course-wise statistics.

export const getCoursewiseStats = (students) => {
  return students.reduce((studentData, student) => {
    // studentData = course-wise statistics
    // student = current student

    if (studentData[student.course]) {
      studentData[student.course].count++;

      studentData[student.course].totalMarks += student.marks;

      studentData[student.course].averageMarks =
        studentData[student.course].totalMarks /
        studentData[student.course].count;
    } else {
      studentData[student.course] = {
        count: 1,
        totalMarks: student.marks,
        averageMarks: student.marks,
      };
    }

    return studentData;
  }, {});
};
