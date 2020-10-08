const Config = {
  host: "localhost",
  dialect: "postgres",
  define: {
    timestamps: false,
  },
};
module.exports = Config;

//sequelize-auto-models -h localhost -d crud_sequalize -u postgres -x pass -p 5432 --dialect postgres -c ./src/config/config.js -o ./src/models/-t student -C
