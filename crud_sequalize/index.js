// route is connected with services  and services is connected with actions ...action consists of database related operations
// and action is directly connected to database

const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const DBService = require("./src/db_service");

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

/*route for insert operation
req of body will consists of all data to be inserted
{

   "stud_id":7,
   "firstname":"Manu",
   "lastname":"More",
   "createdat":"01-02-2020",
   "updatedat":"02-03-2020"
}

*/

app.post("/addStudent", async (req, res) => {
  let dbService = new DBService();
  const data = req.body;
  const addStud = await dbService.addStudent(data);
  res.send(addStud);
});

/*route for delete operation
req of body will contain stud_id
{
  "stud_id":2
}

*/

app.post("/deleteStudent", async (req, res) => {
  let dbService = new DBService();
  const studId = req.body.stud_id;
  const deleteStud = await dbService.deleteStudent(studId);
  res.send(deleteStud);
});

/* route for update operation
body of req will contain the stud_id and data to be updated
{
        "stud_id":2,
        "firstname":"abc",
        "createdat":"13-nov-2019"
 }
*/
app.post("/updateStudent", async (req, res) => {
  let dbService = new DBService();
  const updateData = req.body;
  const updateStud = await dbService.updateStudent(updateData);
  res.send(updateStud);
});

app.listen(9000, () => console.log("app listening on post 9000"));
