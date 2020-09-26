let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let StudentService = require("../services/student_info_service");

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

app.get("/getAllStudentInformation", async function (req, res) {
  const studentService = new StudentService();
  const output = await studentService.getAllStudentInformation();
  res.send(output);
});

/*
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

const port = 9000;

app.listen(port, () => console.log(`listing port no. ${port}`));
