const bodyParser = require("body-parser");
const express = require("express");
const app = express();
// const db = require("./dbconfig/db");
const router = express.Router();

const port = 8080;

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

var cors = require("cors");
const { Router } = require("express");

app.use(cors());
app.options("*", cors());

require("./routes/user.routes")(app);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to  application." });
});

// db.authenticate()
//   .then(() => console.log("Database connected"))
//   .catch((err) => console.log("Error: " + err));

app.listen(process.env.PORT || port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
