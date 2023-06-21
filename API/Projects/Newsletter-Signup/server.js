import express from "express";
import request from "request";
import https from "https";
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
  var data = {
    FNAME: firstName,
    LNAME: lastName,
  };
  var jsonData = JSON.stringify(data);
  const url = "";
  const options = {
    method: "POST",
    auth: "",
  };
  const request = https.request(url, option, (response) => {
    if (response.statusCode === 200) {
      res.send("Success");
    } else {
      res.send("Pls try again");
    }
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
