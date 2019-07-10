// this is the routes file

// Import express module
const express = require('express');

// const cartData = require('./cartData');

// Add router for shipmentsRouter
// This lets us to split our API routes
// into separate modules (files), so its easier to use
const shipmentsRouter = express.Router();


module.exports = shipmentsRouter;