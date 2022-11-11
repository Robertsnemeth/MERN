const express = require("express");
const app = express();
const cors = require("cors");
const socket = require("socket.io");
const PORT = 8000;

app.use(cors());

const server = app.listen(PORT, () => {
    console.log(`ITS OVER ${PORT}!`)
});

const io = socket(server,{
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
        allowedHeaders: ['*'],
        credentials: true,
    }
})

io.on("connection", socket => {
    console.log("Nice to meet you.(shake hand)", socket.id);
    socket.on("Welcome", data => {
        socket.emit("Welcome", data);
    });
});