const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const db = require("./dbconfig/db");
const router = express.Router();

const port = 8080;

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));

var cors = require("cors");
const { Router } = require("express");

app.use(cors());
app.options("*", cors());

app.get("/", (req, res) => {
  res.send({ message: "Welcome to  application." });
});

require("./routes/user.routes")(app);

app.use("/.netlify/functions/api", router);

db.authenticate()
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error: " + err));

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
