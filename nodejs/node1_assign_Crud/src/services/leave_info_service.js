const DatabaseInformation = require("./database_information");

class LeaveService {
  constructor() {
    this.databaseInformation = new DatabaseInformation();
  }

  //get leave information (select query)
  async getAllLeaveInformation() {
    let query = "select * from leaveinfo";
    let output = await this.databaseInformation.executeQuery(query);
    return output;
  }
  // add record into leaveinfo table
  async addLeaveInformation(leaveInfo) {
    let query = `insert into leaveinfo(Leave_No, Employee_Name, Leave_Reason, Leave_startDate, Leave_endDate)
    values ('${leaveInfo.Leave_No}','${leaveInfo.Employee_Name}','${leaveInfo.Leave_Reason}',
    '${leaveInfo.Leave_startDate}','${leaveInfo.Leave_endDate}')`;
    let output = await this.databaseInformation.executeQuery(query);
    return output;
  }
  //update leave_reason according to leave_no
  async updateLeaveInformation(updateLeave) {
    let query = `update leaveinfo set Leave_Reason ='${updateLeave.Leave_Reason}' 
    where Leave_No='${updateLeave.Leave_No}'`;
    let output = await this.databaseInformation.executeQuery(query);
    return output;
  }

  //delete leaverecord according to leave_no
  async deleteLeaveInformation(lNo) {
    let query = `delete from leaveinfo where Leave_No='${lNo.Leave_No}'`;
    let output = await this.databaseInformation.executeQuery(query);
    return output;
  }
}

module.exports = LeaveService;
