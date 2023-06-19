import express from "express";
import path from "path";
const app = express();
const port = 3000;
const __dirname = path.resolve();
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  res.send("Thanks you");
});
app.listen(port, () => {
  console.log("Listening on port" + port);
});