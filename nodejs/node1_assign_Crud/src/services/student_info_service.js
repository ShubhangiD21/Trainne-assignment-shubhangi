const DatabaseInformation = require("./database_information");

class StudentService {
  constructor() {
    this.databaseInformation = new DatabaseInformation();
  }

  //get student information (select query)
  async getAllStudentInformation() {
    let query = "select * from student";
    let output = await this.databaseInformation.executeQuery(query);
    return output;
  }
  //insert into student table (insert query)
  async addStudentInformation(studentInformation) {
    let query = `insert into student(SRoll_no,SName,SMark) 
      values('${studentInformation.SRoll_no}','${studentInformation.SName}','${studentInformation.SMark}')`;
    let output = await this.databaseInformation.executeQuery(query);
    return output;
  }

  //update student table values according to SRoll_no(update query)

  async updateStudentInformation(studentInformation) {
    let query = `update student 
      set SName='${studentInformation.SName}',SMark='${studentInformation.SMark}'
       where SRoll_no = '${studentInformation.SRoll_no}'`;
    let updateData = await this.databaseInformation.executeQuery(query);
    return updateData;
  }

  //delete student tables value according student SRoll_no (delete query)
  async deleteStudentInformation(rollNoData) {
    let query = `delete from student where SRoll_no ='${rollNoData.SRoll_no}'`;
    let deleteRecord = await this.databaseInformation.executeQuery(query);
    return deleteRecord;
  }
}
module.exports = StudentService;
