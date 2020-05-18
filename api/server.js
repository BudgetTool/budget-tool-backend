
//api imports
const express = require("express");
// brings in express to create the application or server
const server = express();

//route imports
const baseUrl = process.env.BASE_URL || "http://localhost:4000/";
// Require routes

//Require middleware
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

//end imports

server.use(express.json());
server.use(helmet());
server.use(morgan("dev"));
server.use(
  cors({
    credentials: true,
    origin: [baseUrl],
    AccessControlAllowOrigin: [
      "http://localhost:4000/",
        //heruko host route needed here
    ],
    AccessControlAllowHeaders: "Authorization"
  })
);

// Server use routes 



server.get("/", (req, res) => {
  res.send("Hello World, from the Budget tool");
});

module.exports = server;