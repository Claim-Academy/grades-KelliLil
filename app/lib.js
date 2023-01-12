export const getAllStudentNames = (roster) =>
  roster.map((person) => person.name);

export const getStudentById = (roster, id2Find) =>
  roster.find((person) => person.id === id2Find);

export const getStudentGradeID = ({ roster, gradeID, studentID }) => {
  const foundStudent = getStudentById(roster, studentID);
  const foundGrade = foundStudent.grades.find((grade) => grade.id === gradeID);
  return { ...foundGrade, name: foundStudent.name };
};

export const getStudentGradesByType = (roster, gradeType, studentID) => {
  const studentFind = getStudentById(roster, studentID);
  const foundStudentGrade = studentFind.grades.filter(
    (grade) => grade.type === gradeType
  );

  return { grades: foundStudentGrade, name: studentFind.name };
};
