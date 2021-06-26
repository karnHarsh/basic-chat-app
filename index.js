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
// here we are listening to 'connection' event
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("message: ", msg);
  });
});

server.listen(3000, () => {
  console.log("Listening on *: 3000");
});
