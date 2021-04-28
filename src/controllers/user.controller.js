const { resolveSoa } = require("dns");
const User = require("../models/user.model");

exports.register = (req, res) => {
  const { email, username, password } = req.body;

  User.create({
    email,
    username,
    password,
  })
    .then((user) => {
      if (user) {
        res.send({
          userAdded: true,
          error: null,
        });
      } else {
        console.log(res);
      }
    })
    .catch((err) => {
      console.log(err);
      res.send({
        userAdded: false,
        error: JSON.stringify(err),
      });
    });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user.password == password) {
        res.send({
          authenticated: true,
          err: "",
        });
      } else {
        res.send({
          authenticated: false,
          err: "Wrong Email or Password",
        });
      }
    })
    .catch((err) => {
      res.send({
        authenticated: false,
        err: JSON.stringify(err),
      });
    });
};
