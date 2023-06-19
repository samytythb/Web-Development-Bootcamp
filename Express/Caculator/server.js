import express from "express";
import path from "path";
import bodyParser from "body-parser";
const app = express();

const port = 3000;
const __dirname = path.resolve();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  let result = Number(req.body.num1) + Number(req.body.num2);
  res.send(`<h1>Result : ${result}</h1>`);
});
app.listen(port, () => {
  console.log("Listening on port" + port);
});
