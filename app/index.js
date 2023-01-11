import apiService from "./api.service.js";
import { getAllStudentNames } from "./lib.js";
const gradesData = await apiService.getStudent();

console.log(gradesData);
