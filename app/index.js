import apiService from "./api.service.js";
import { addGrade } from "./lib.js";
const gradesData = await apiService.getStudent();

const updatedStudent = addGrade({
  roster: gradesData,
  gradeType: "HW",
  score: 100,
  studentId: 1,
});

apiService.updateStudent(1, updatedStudent);
