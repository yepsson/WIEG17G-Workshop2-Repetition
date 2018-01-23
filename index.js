const chalk = require("chalk");
const express = require("express");
const address = require("address");

const server = express();
const serverIp = address.ip();
const serverPort = 1337;

server.get("/start", (req, res) => {
    
    let visitorIp = req.ip;

    console.log(chalk.bgRed(chalk.yellow("visitor from: " + visitorIp)));

    res.status(200);
    res.sendFile(__dirname + "/index.html");
});

server.listen(serverPort, "0.0.0.0", () => {
    console.log("Started the server:")
    console.log(chalk.bgRed(chalk.yellow("server ip: " + serverIp + " port: " + serverPort)));
});

// http://10.43.76.23:1337/

// const fs = require("fs");
// const http = require("http");
// const server = http.createServer((req, res) => {
//     let fileContents = fs.readFileSync('./index.html');
//     res.sendDate(fileContents);
//     res.end();
// })
// server.listen()