
//api imports
const express = require("express");
const db = require('../ds/db.js');
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

// connect to database
db
  .connectTo()
  .then(() => console.log('...SUCCESS: Connected to database...'))
  .catch(err => console.log('...ERROR: No database connection...', err));

const Message = require("../ds/models/Message");

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

server.get("/messages", (req, res) => {
  console.log('test');
  Message.find()
    .then(data => res.json(data))
    .catch(err => console.error(err))
});

module.exports = server;