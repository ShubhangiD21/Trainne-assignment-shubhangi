const StudentActions = require("../src/actions/student_action");
class DBService {
  constructor() {
    this.StudentActions = new StudentActions();
  }
  //all services are connected with student_action.js
  //service for select operation
  async getAllStudents() {
    try {
      return await this.StudentActions.getAllStudents();
    } catch (exception) {
      console.log(exception);
    }
  }

  //service for addStudent

  async addStudent(data) {
    try {
      return await this.StudentActions.addStudent(data);
    } catch (exception) {
      console.log(exception);
    }
  }

  async deleteStudent(studId) {
    try {
      return await this.StudentActions.deleteStudent(studId);
    } catch (exception) {
      console.log(exception);
    }
  }

  //data  update service
  async updateStudent(updateData) {
    try {
      return await this.StudentActions.updateStudent(updateData);
    } catch (exception) {
      console.log(exception);
    }
  }
}

module.exports = DBService;
