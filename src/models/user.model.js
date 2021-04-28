const Sequelize = require("sequelize");
const db = require("../dbconfig/db");

const User = db.define(
  "users",
  {
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    password: {
      type: Sequelize.STRING,
    },
  },

  {
    freezeTableName: true,
  }
);

module.exports = User;
