import express from "express";
const app = express();
import bodyParser from "body-parser";
import path from "path";
const __dirname = path.resolve();
app.use(bodyParser.urlencoded({ externals: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});
app.post("/", (req, res) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
