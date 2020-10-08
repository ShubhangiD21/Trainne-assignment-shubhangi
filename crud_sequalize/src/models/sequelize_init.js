const Sequelize = require("sequelize");
const Config = require("../config/config");

// Initiate Sequelize
const SequelizeDB = new Sequelize("crud_sequalize", "postgres", "pass", Config);

// DB Models
const StudentModel = require("./students");

// ORM Models
const students = StudentModel(SequelizeDB, Sequelize);

module.exports = {
  SequelizeDB,
  students,
};
