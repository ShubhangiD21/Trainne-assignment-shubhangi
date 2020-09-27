let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let StudentService = require("../services/student_info_service");
let EmployeeService = require("../services/employee_info_service");
let LeaveService = require("../services/leave_info_service");

/*
@author : Shubhangi
 */

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.send("helo world");
});

/**************Student routing************/

app.get("/getAllStudentInformation", async function (req, res) {
  const studentService = new StudentService();
  const output = await studentService.getAllStudentInformation();
  res.send(output);
});

/*(insert query)
post body req will contain this data for insertion
{
    "SRoll_no":5,
    "SName":"Anjali",
    "SMark":78
}
*/
//post method for inserting data into table
app.post("/addStudentInformation", async function (req, res) {
  const studentService = new StudentService();
  const studentData = req.body;
  const addStudent = await studentService.addStudentInformation(studentData);
  res.send(addStudent);
  //console.log(req.body);
});

/*
  post body req will contain this data for updation
  {
      "SRoll_no":5,
      "SName":"Akash",
      "SMark":78
  }
  */
//update student table data using SRoll_no
app.post("/updateStudentInformation", async function (req, res) {
  const studentService = new StudentService();
  const studentData = req.body;
  const updateStudent = await studentService.updateStudentInformation(
    studentData
  );
  res.send(updateStudent);
});

/*
  delete student record from student table according to SRoll_no
  {
      body of post will contain sroll_no
      "SRoll_no:2"
  }
  */
app.post("/deleteStudentInformation", async function (req, res) {
  const studentService = new StudentService();
  const rollNoData = req.body;
  const deleteData = await studentService.deleteStudentInformation(rollNoData);
  res.send(deleteData);
});

/**** ********** Employeee routing************ */
//select query
app.get("/getAllEmpoyeeInformation", async function (req, res) {
  const employeeService = new EmployeeService();
  const output = await employeeService.getAllEmployeeInformation();
  res.send(output);
});

//insert query
app.post("/addEmployeeInformation", async function (req, res) {
  const employeeService = new EmployeeService();
  const empData = req.body;
  const addEmp = await employeeService.addEmployeeInformation(empData);
  res.send(addEmp);
});

//update query
app.post("/updateEmployeeInformation", async function (req, res) {
  const employeeService = new EmployeeService();
  const empData = req.body;
  const updateEmp = await employeeService.updateEmployeeInformation(empData);
  res.send(updateEmp);
});

//delete query
app.post("/deleteEmployeeInformation", async function (req, res) {
  const employeeService = new EmployeeService();
  const eNo = req.body;
  const deleteData = await employeeService.deleteEmployeeInformation(eNo);
  res.send(deleteData);
});

/********Leaveinfo Routings************* */
//leave select query routing
app.get("/getAllLeaveInformation", async function (req, res) {
  const leaveService = new LeaveService();
  const output = await leaveService.getAllLeaveInformation();
  res.send(output);
});
//leave insert query routing
app.post("/addLeaveInformation", async function (req, res) {
  const leaveService = new LeaveService();
  const leaveData = req.body;
  const addLeave = await leaveService.addLeaveInformation(leaveData);
  res.send(addLeave);
});

// leave update query routing
/*{
  "Leave_No": 6,
 "Leave_Reason": "family_function"
}*/
app.post("/updateLeaveInformation", async function (req, res) {
  const leaveService = new LeaveService();
  const leaveData = req.body;
  const updateLeave = await leaveService.updateLeaveInformation(leaveData);
  res.send(updateLeave);
});

//leave delete query routing
/*
 {
        "Leave_No": 6,
 }
*/
app.post("/deleteLeaveInformation", async function (req, res) {
  const leaveService = new LeaveService();
  const leaveNo = req.body;
  const deleteLeave = await leaveService.deleteLeaveInformation(leaveNo);
  res.send(deleteLeave);
});

const port = 9000;

app.listen(port, () => console.log(`listing port no. ${port}`));
