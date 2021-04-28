const Sequelize = require("sequelize");

module.exports = new Sequelize("vizao", "postgres", "open", {
  logging: console.log,
  host: `localhost`,
  dialect: `postgres`,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
});
