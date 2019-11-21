// const express = require('express');
// const router = express.Router();


// // CRUD FOR CARRIERS: 

// router.get("/", (req, res) => {
//     pool.query("SELECT * FROM carriers ORDER BY carrier_name;")
//     .then( (result) => {
//         res.send(result.rows);
//     })
//   });


// router.post("/", (req, res) => {
//     let carrierData = req.body[0];
//     let carrier_id = carrierData.carrier_id;
//     console.log(carrierData);

//     // pool.query(
//     //     "INSERT INTO orders (id, product, price, quantity) values($1::int, $2::text, $3::int, $4::int)", 
//     //     [carrierData.id, carrierData.product, carrierData.price, carrierData.quantity]
//     // )
//     pool.query(
//         "INSERT INTO carriers (carrier_id, carrier_code, carrier_name, contact_name, office_number, cell_number, email_1, email_2) values($1::int, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text)", 
//         [carrierData.carrier_id, carrierData.carrier_code, carrierData.carrier_name, carrierData.contact_name, carrierData.office_number, carrierData.cell_number, carrierData.email_1, carrierData.email_2]
//     )
//     .then( () => {
//         res.status(201); // Created
//         res.send('Successfully added carrier!');
//     })
//   });



// // router.put("//:id", (req, res) => {
// //     let id = req.params.id;

// //     // req.params, req.body, req.query
// //    // let name = carrierData.name;

// //     let carrierData = req.body;
// //         pool.query(
// //             "UPDATE carriers SET quantity=$2::int WHERE id=$1::int", 
// //             [req.params.id, carrierData.pickup_facility_name, carrierData.pickup_address, carrierData.pickup_city, carrierData.pickup_state, carrierData.pickup_zip, carrierData.pickup_phone, carrierData.pickup_email]
// //         )
// //         .then( () => {
// //             res.status(201); // Created
// //             res.send('Successfully updated an carrier!');
// //         })
// //         .catch( (err) => {
// //             console.log('error');
// //         })

// // });



//  // accept DELETE request at URI: /carriersRouter
//  router.delete('//:carrier_id', (req, res) => {
//     console.log(req.body); // <-- this is the carrierData that has been extracted from the request
//     res.send('Deleting carriersRouter..');

//     pool.query(
//         "DELETE FROM carriers WHERE carrier_id = $1::int", [req.params.carrier_id])
//     .then( () => {
//         res.status(202); // Deleted
//         res.send('Successfully deleted carrier!');
//     })
// });


// module.exports = router;