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

export const addGrade = ({ roster, gradeType, score, studentID }) => {
  const foundStudent = getStudentById(roster, studentID);
  const foundStudentCurrentGrades = foundStudent.grades;

  const newGrade = {
    type: gradeType,
    score,
  };
  const newStudentGrades = [...foundStudentCurrentGrades, newGrade];

  return {
    ...foundStudent,
    grades: newStudentGrades,
  };
};

export const updateGrade = ({ roster, gradeID, updatedScore, studentID }) => {
  const foundStudent = getStudentById(roster, studentID);
  const updatedGrades = foundStudent.grades.map((grade) => {
    if (grade.id === gradeID) {
      return {
        ...grade,
        score: updatedScore,
      };
    }

    return grade;
  });

  foundStudent.grades = [...updatedGrades];

  const updatedRoster = roster.map((student) => {
    if (student.id === studentID) {
      return foundStudent;
    }

    return student;
  });

  return updatedRoster;
};

export const deleteGrade = ({ roster, gradeID, studentID }) => {
  const foundStudent = getStudentById(roster, studentID);
  const gradesWithoutDeletedGrade = foundStudent.grades.filter(
    (grade) => grade.id !== gradeID
  );

  foundStudent.grades = [...gradesWithoutDeletedGrade];

  const updatedRoster = roster.map((student) => {
    if (student.id === studentID) {
      return foundStudent;
    }

    return student;
  });

  return updatedRoster;
};
