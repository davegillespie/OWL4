// const express = require('express');
// const router = express.Router();


// // CRUD FOR LOCATIONS: 

// router.get("/", (req, res) => {
//     pool.query("SELECT * FROM locations ORDER BY vendor_name;")
//     .then( (result) => {
//         res.send(result.rows);
//     })
//   });


// router.post("/", (req, res) => {
//     let locationData = req.body[0];
//     let loc_id = locationData.loc_id;
//     console.log(locationData);

//     // pool.query(
//     //     "INSERT INTO orders (id, product, price, quantity) values($1::int, $2::text, $3::int, $4::int)", 
//     //     [locationData.locationId, locationData.product, locationData.price, locationData.quantity]
//     // )
//     pool.query(
//         "INSERT INTO locations (loc_id, vendor_name, vendor_loc_code, facility_name, contact_name, phone_number, email, street_address, city, state, zip) values($1::int, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text, $9::text, $10::text, $11::text)", 
//         [locationData.loc_id, locationData.vendor_name, locationData.vendor_loc_code, locationData.facility_name, locationData.contact_name, locationData.phone_number, locationData.email, locationData.street_address, locationData.city, locationData.state, locationData.zip]
//     )
//     .then( () => {
//         res.status(201); // Created
//         res.send('Successfully added location!');
//     })
//   });



// // router.put("//:loc_id", (req, res) => {
// //     let locationId = req.params.locationId;

// //     // req.params, req.body, req.query
// //    // let name = locationData.name;

// //     let locationData = req.body;
// //         pool.query(
// //             "UPDATE locations SET quantity=$2::int WHERE loc_id=$1::int", 
// //             [req.params.locationId, locationData.pickup_facility_name, locationData.pickup_address, locationData.pickup_city, locationData.pickup_state, locationData.pickup_zip, locationData.pickup_phone, locationData.pickup_email]
// //         )
// //         .then( () => {
// //             res.status(201); // Created
// //             res.send('Successfully updated an location!');
// //         })
// //         .catch( (err) => {
// //             console.log('error');
// //         })

// // });




//  // accept DELETE request at URI: /locationsRouter
//  router.delete('//:loc_id', (req, res) => {
//     console.log(req.body); // <-- this is the locationData that has been extracted from the request
//     res.send('Deleting locationsRouter..');

//     pool.query(
//         "DELETE FROM locations WHERE loc_id = $1::int", [req.params.loc_id])
//     .then( () => {
//         res.status(202); // Deleted
//         res.send('Successfully deleted location!');
//     })
// });





// module.exports = router;