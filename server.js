"use strict"
const express = require('express'); // imports the express module
const router = require("./routing.js"); // imports router from my routing.js file
const app = express();
app.use(express.json());  // tells the api to serve up data in json
app.use("/", router); // indicates what symbol to route with?
app.use(express.static("./public")); // serves static files from this directory
const port = 4000; // sets port #
app.listen(port, ()=> console.log(`listening on port: http://localhost:${port}`));