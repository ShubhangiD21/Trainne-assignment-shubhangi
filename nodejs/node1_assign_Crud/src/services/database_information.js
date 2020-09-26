const mysql = require("mysql");
class DatabaseInformation {
  constructor() {
    this.connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "pass",
      database: "liviano",
    });
    this.connection.connect(function (err) {
      if (err) {
        throw err;
      }
    });
  }
  executeQuery(query) {
    let self = this;
    const promises = new Promise(function (resolve, reject) {
      self.connection.query(query, function (err, rows) {
        if (rows == undefined) {
          reject(new Error("Data is not found"));
        } else {
          resolve(rows);
        }
      });
    });
    return promises;
  }
}
module.exports = DatabaseInformation;
//const databaseInfo = new DatabaseInformation();
//databaseInfo.executeQuery();
