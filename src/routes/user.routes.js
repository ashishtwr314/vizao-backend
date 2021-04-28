const userCntroller = require("../controllers/user.controller");
module.exports = function (app) {
  app.post("/register", userCntroller.register);
  app.post("/login", userCntroller.login);
};
