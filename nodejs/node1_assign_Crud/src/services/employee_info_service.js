const DatabaseInformation = require("./database_information");

class EmployeeService {
  constructor() {
    this.databaseInformation = new DatabaseInformation();
  }
  //get Employee information (select query)
  async getAllEmployeeInformation() {
    let query = "select * from employee";
    let output = await this.databaseInformation.executeQuery(query);
    return output;
  }

  //insert new record into employee table (insert query)
  async addEmployeeInformation(employeeInformation) {
    let query = `insert into employee(ENO ,EName,ESalary)
values ('${employeeInformation.ENO}','${employeeInformation.EName}','${employeeInformation.ESalary}')`;
    let output = await this.databaseInformation.executeQuery(query);
    return output;
  }

  //update employee info according to eno
  async updateEmployeeInformation(employeeInformation) {
    let query = `update employee 
      set EName='${employeeInformation.EName}',ESalary='${employeeInformation.ESalary}'
       where ENO = '${employeeInformation.ENO}'`;
    let updateData = await this.databaseInformation.executeQuery(query);
    return updateData;
  }

  //delete employee tables value according eno (delete query)
  async deleteEmployeeInformation(eNo) {
    let query = `delete from employee where ENO ='${eNo.ENO}'`;
    let deleteRecord = await this.databaseInformation.executeQuery(query);
    return deleteRecord;
  }
}
module.exports = EmployeeService;
