const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

server.listen(3000, () => {
  console.log("Listening on *: 3000");
});