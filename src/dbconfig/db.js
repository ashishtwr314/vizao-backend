const Sequelize = require("sequelize");

module.exports = new Sequelize(
  "dd7oskvf6vuls3",
  "zmrcxwsomkcmhe",
  "14900c88b9a37ea765cab9d97e19dcb559ce92ac38739e9f13988bef72e1514f",
  {
    logging: console.log,
    host: `ec2-54-224-194-214.compute-1.amazonaws.com`,
    dialect: `postgres`,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    define: {
      timestamps: false,
    },
  }
);

// postgres://zmrcxwsomkcmhe:14900c88b9a37ea765cab9d97e19dcb559ce92ac38739e9f13988bef72e1514f@ec2-54-224-194-214.compute-1.amazonaws.com:5432/dd7oskvf6vuls3
