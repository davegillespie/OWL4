const express = require('express');


// Add router for carriersRouter
// This lets us to split our API routes
// into separate modules (files), so its easier to use
const carriersRouter = express.Router();


module.exports = carriersRouter;