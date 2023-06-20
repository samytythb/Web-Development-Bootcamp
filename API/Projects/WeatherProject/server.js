import { log } from "console";
import express from "express";
import https from "https";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const __dirname = path.resolve();
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  const cityName = req.body.cityName;
  const query = cityName + ",Vietnam";
  const apiKey = "92d863ef5325bd2217ce4f50eb5c3612";
  const unit = "metric";

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  console.log(url);
  https.get(url, (response) => {
    console.log(res.statusCode);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      console.log("<img src='" + imgURL + "'>");

      res.write("<h1>The temperature in VN is " + temp + " celious</h1>");
      res.write(
        "<h1>The description weather in VN is " + description + "</h1>"
      );
      res.write("<img src='" + imgURL + "'>");
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
