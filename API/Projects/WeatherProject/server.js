import { log } from "console";
import express from "express";
import https from "https";
const app = express();
app.get("/", (req, res) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Vietnam&appid=92d863ef5325bd2217ce4f50eb5c3612";
  https.get(url, (response) => {
    console.log(res.statusCode);
    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      res.write("<h1>The temperature in VN is " + temp + "</h1>");
      res.write("<h1>The descripton weather in VN is " + description + "</h1>");
      res.send();
    });
  });
  //   res.send("Hello");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
