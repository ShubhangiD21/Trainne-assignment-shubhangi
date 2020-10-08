const { SequelizeDB, students } = require("../models/sequelize_init");
const Sequelize = require("sequelize");

class StudentActions {
  constructor() {
    this.SequelizeDB = SequelizeDB;
    this.auditData = {
      createdOn: SequelizeDB.fn("Now"),
      lastModifiedOn: SequelizeDB.fn("Now"),
    };
    this.modifiedAuditData = {
      lastModifiedOn: SequelizeDB.fn("Now"),
    };
    this.studentAttributes = {
      attributes: [
        "stud_id",
        "firstName",
        "lastName",
        "createdAt",
        "updatedAt",
      ],
    };
  }
  //get all data from students table
  async getAllStudents(additionalopts = {}) {
    let actionResult = {};
    await this.SequelizeDB.transaction(async (t) => {
      let opts = Object.assign(additionalopts, {});
      actionResult = await students
        .findAll(opts)
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return actionResult;
  }
  // add newstudent into students table
  async addStudent(data) {
    let actionResult = {};
    await this.SequelizeDB.transaction(async (t) => {
      actionResult = await students
        .create(data)
        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return actionResult;
  }
  //delete
  async deleteStudent(studId) {
    let actionResult = {};
    await this.SequelizeDB.transaction(async (t) => {
      actionResult = await students
        .destroy({
          where: {
            stud_id: studId,
          },
        })

        .then((result) => {
          return result;
        })
        .catch((error) => {
          console.log(error);
        });
    });
    return actionResult;
  }
  //update
  async updateStudent(updateData) {
    let actionResult = {};
    await this.SequelizeDB.transaction(async (t) => {
      let updateFields = {
        ...updateData,
      };
      actionResult = await students
        .update(updateFields, {
          where: {
            stud_id: updateFields.stud_id,
          },
        })
        .then((result) => {
          return result;
        })
        .catch((err) => {
          console.log(err);
        });
    });
    return actionResult;
  }
}

module.exports = StudentActions;
