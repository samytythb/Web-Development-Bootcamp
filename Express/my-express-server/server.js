import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>");
});
app.listen(port, () => {
  console.log(`Listening port ${port}`);
});
