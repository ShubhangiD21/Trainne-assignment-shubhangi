const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const DBService = require("./src/db_service");
//const studentModel = require("./src/models/students");
const cors = require("cors");
app.use(cors());
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res) => {
  res.send("home");
  res.end();
});

//route for select operation
app.get("/getAllStudents", async (req, res) => {
  let dbService = new DBService();
  let studentRes = await dbService.getAllStudents();
  res.send(studentRes);
});

//route for insert operation

app.post("/addStudent", async (req, res) => {
  let dbService = new DBService();
  const data = req.body;
  const addStud = await dbService.addStudent(data);
  res.send(addStud);
});

//route for delete operation

app.post("/deleteStudent", async (req, res) => {
  let dbService = new DBService();
  const studId = req.body.stud_id;
  const deleteStud = await dbService.deleteStudent(studId);
  res.send(deleteStud);
});

// route for update operation

app.post("/updateStudent", async (req, res) => {
  let dbService = new DBService();
  const updateData = req.body;
  const updateStud = await dbService.updateStudent(updateData);
  res.send(updateStud);
});

app.listen(9000, () => console.log("app listening on post 9000"));
