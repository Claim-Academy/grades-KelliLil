import apiService from "./api.service.js";
import { updateGrade } from "./lib.js";
const gradesData = await apiService.getStudent();

const updatedStudent = updateGrade({
  roster: gradesData,
  gradeId: 1,
  updatedScore: 80,
  studentId: 1,
});

apiService.updateStudent(1, updatedStudent);
