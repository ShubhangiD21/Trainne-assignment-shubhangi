const { Sequelize } = require("sequelize");
//creating connection with mysqlDB
const sequelize = new Sequelize("liviano", "root", "pass", {
  host: "localhost",
  dialect: "mysql",
});
try {
  sequelize.authenticate(); //checking connection is done or not
  console.log("done connection");
} catch (error) {
  console.log("not done");
}

sequelize.close(); //closing connection
