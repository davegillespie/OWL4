const express = require('express');
const router = express.Router();

const orderRouting = require('./order-routes');
// const shipmentRouting = require('./routing/shipmentRoutes');
// const locationRouting = require('./routing/locationRoutes');
// const carrierRouting = require('./routing/carrierRoutes');


router.use('./order-routes', orderRouting);
// router.use('./shipmentRoutes', shipmentRouting);
// router.use('./locationRoutes', locationRouting);
// router.use('./carrierRoutes', carrierRouting);

// const pg = require("pg");
// const pool = new pg.Pool({
//     user: "postgres",
//     password: "Yeti2019",
//     host: "localhost",
//     port: 5432,
//     database: "OWL",
//     ssl: false
// });

module.exports = router;