var express = require("express");
var app = express();

var server = require("http").Server(app);
var io = require("socket.io")(server);

app.get("/", (req, res) =>{
    res.status(200).send("This is the root")
});

server.listen(8080, () =>{
    console.log("Server is running in https://localhost:8080");
});

io.on("connection", (socket)=>{
    console.log("Someone has connected with sockets!");

    socket.emit("mesegges", {
        id: 1,
        text: "Hello",
        author: "Jesus Rios"
    });
})