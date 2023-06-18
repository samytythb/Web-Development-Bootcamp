console.log("Hello");
const fs = require("fs");
// fs.writeFile("message.txt", "hello from nodejs", (err) => {
//   if (err) throw err;
//   console.log("the file has beaan created");
// });
fs.readFile("./message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
