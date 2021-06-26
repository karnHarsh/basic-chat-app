const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  //res.send("<h1>Hello World</h1>");
  res.sendFile(__dirname + "/index.html");
});

//.on is for listening to events
io.on("connection", (socket) => {
  console.log("a user added");
});

server.listen(3000, () => {
  console.log("Listening on *: 3000");
});
