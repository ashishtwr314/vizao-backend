const User = require("../models/user.model");
let users = [
  { email: "ash@ash.com", password: "ash", username: "ash" },
  { email: "ash@ash.com", password: "ash", username: "ash" },
];

exports.register = (req, res) => {
  const { email, username, password } = req.body;

  users.push({
    email,
    username,
    password,
  });

  res.send({
    userAdded: true,
    error: "",
  });

  // User.create({
  //   email,
  //   username,
  //   password,
  // })
  //   .then((user) => {
  //     if (user) {
  //       res.send({
  //         userAdded: true,
  //         error: null,
  //       });
  //     } else {
  //       console.log(res);
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.send({
  //       userAdded: false,
  //       error: JSON.stringify(err),
  //     });
  //   });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email == email);

  if (user.password == password) {
    res.send({
      authenticated: true,
      err: "Successfully Logged in",
    });
  } else {
    res.send({
      authenticated: false,
      err: "Wrong Email or Password",
    });
  }

  // User.findOne({
  //   where: {
  //     email: req.body.email,
  //   },
  // })
  //   .then((user) => {
  //     if (user.password == password) {
  //       res.send({
  //         authenticated: true,
  //         err: "",
  //       });
  //     } else {
  //       res.send({
  //         authenticated: false,
  //         err: "Wrong Email or Password",
  //       });
  //     }
  //   })
  //   .catch((err) => {
  //     res.send({
  //       authenticated: false,
  //       err: JSON.stringify(err),
  //     });
  //   });
};
