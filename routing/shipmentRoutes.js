// const express = require('express');
// const router = express.Router();


// // CRUD FOR SHIPMENTS: 

// router.get("/", (req, res) => {
//     pool.query("SELECT * FROM shipments")
//     .then( (result) => {
//         res.send(result.rows);
//     })
//   });



// router.post("/", (req, res) => {
//     let data = req.body[0];
//     let id = data.id;
//     console.log(data);

//         // pool.query("SELECT * FROM orders FULL JOIN shipments ON orders.delivery_email = shipments.id WHERE shipments.id IS NULL",
//         // [data.req.params.id]
//         // )
//         // .then( (result) => {
//         //     res.send(result.rows);
//         // })

//         pool.query("INSERT INTO shipments (id, pickup_facility_name, pickup_address, pickup_city, pickup_state, pickup_zip, pickup_phone, pickup_email, pickup_date, delivery_date, quantity, unit, weight, trailer,temperature, size, delivery_facitlity_name, delivery_address,delivery_city,delivery_state,delivery_zip,delivery_phone,delivery_email) values($1::int, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text, $9::date, $10::date, $11::int, $12::text, $13::int, $14::text, $15::text, $16::text, $17::text, $18::text, $19::text, $20::text, $21::text, $22::text, $23::text)", 
//         [data.id, data.pickup_facility_name, data.pickup_address, data.pickup_city, data.pickup_state, data.pickup_zip, data.pickup_phone, data.pickup_email, data.pickup_date, data.delivery_date, data.quantity,data.unit, data.weight, data.trailer, data.temperature,data.size,data.delivery_facility_name, data.delivery_address, data.delivery_city, data.delivery_state, data.delivery_zip, data.delivery_phone, data.delivery_email]
//         )
//         .then( (result) => {
//             res.send(result.rows);
//         })

// });


//  // accept DELETE request at URI: /shipmentsRouter
//  router.delete('//:id', (req, res) => {
//     console.log(req.body); // <-- this is the shipmentData that has been extracted from the request
//     res.send('Deleting shipmentsRouter..');

//     pool.query(
//         "DELETE FROM shipments WHERE id = $1::int", [req.params.id])
//     .then( () => {
//         res.status(202); // Deleted
//         res.send('Successfully deleted shipment!');
//     })
// });


// module.exports = router;