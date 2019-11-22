const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

const pg = require("pg");
const pool = new pg.Pool({
    user: "postgres",
    password: "Yeti2019",
    host: "localhost",
    port: 5432,
    database: "OWL",
    ssl: false
});





// CRUD FOR ORDERS:

app.post("/orders-router", (req, res) => {
    let data = req.body[0];
    let id = data.id;
    console.log(data);

    // pool.query(
    //     "INSERT INTO orders (id, product, price, quantity) values($1::int, $2::text, $3::int, $4::int)", 
    //     [data.id, data.product, data.price, data.quantity]
    // )
    pool.query(
        "INSERT INTO orders (id, pickup_facility_name, pickup_address, pickup_city, pickup_state, pickup_zip, pickup_phone, pickup_email, 	pickup_date, delivery_date, quantity, unit, weight, trailer,temperature, size, delivery_facility_name, delivery_address,delivery_city,delivery_state,delivery_zip,delivery_phone,delivery_email) values($1::int, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text, $9::date, $10::date, $11::int, $12::text, $13::int, $14::text, $15::text, $16::text, $17::text, $18::text, $19::text, $20::text, $21::text, $22::text, $23::text)", 
        [data.id, data.pickup_facility_name, data.pickup_address, data.pickup_city, data.pickup_state, data.pickup_zip, data.pickup_phone, data.pickup_email, data.pickup_date, data.delivery_date, data.quantity,data.unit, data.weight, data.trailer, data.temperature,data.size,data.delivery_facility_name, data.delivery_address, data.delivery_city, data.delivery_state, data.delivery_zip, data.delivery_phone, data.delivery_email]
    )
    .then( () => {
        res.status(201); // Created
        res.send('Successfully added item!');
    })
  });



app.put("/orders-router/:id", (req, res) => {
    let id = req.params.id;

    // req.params, req.body, req.query
   // let name = data.name;

    let data = req.body;
        pool.query(
            "UPDATE orders SET quantity=$2::int WHERE id=$1::int", 
            [req.params.id, data.pickup_facility_name, data.pickup_address, data.pickup_city, data.pickup_state, data.pickup_zip, data.pickup_phone, data.pickup_email]
        )
        .then( () => {
            res.status(201); // Created
            res.send('Successfully updated an item!');
        })
        .catch( (err) => {
            console.log('error');
        })

});



app.get("/orders-router", (req, res) => {
    pool.query("SELECT * FROM orders ORDER BY id;")
    .then( (result) => {
        res.send(result.rows);
    })
  });


 // accept DELETE request at URI: /ordersRouter
 app.delete('/orders-router/:id', (req, res) => {
    console.log(req.body); // <-- this is the data that has been extracted from the request
    res.send('Deleting ordersRouter..');

    pool.query(
        "DELETE FROM orders WHERE id = $1::int", [req.params.id])
    .then( () => {
        res.status(202); // Deleted
        res.send('Successfully deleted item!');
    })
});











// CRUD FOR SHIPMENTS: 


app.post("/shipments-router", (req, res) => {
    let data = req.body[0];
    let id = data.id;
    console.log(data);

        // pool.query("SELECT * FROM orders FULL JOIN shipments ON orders.delivery_email = shipments.id WHERE shipments.id IS NULL",
        // [data.req.params.id]
        // )
        // .then( (result) => {
        //     res.send(result.rows);
        // })

        pool.query("INSERT INTO shipments (id, pickup_facility_name, pickup_address, pickup_city, pickup_state, pickup_zip, pickup_phone, pickup_email, pickup_date, delivery_date, quantity, unit, weight, trailer,temperature, size, delivery_facility_name, delivery_address,delivery_city,delivery_state,delivery_zip,delivery_phone,delivery_email) values($1::int, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text, $9::date, $10::date, $11::int, $12::text, $13::int, $14::text, $15::text, $16::text, $17::text, $18::text, $19::text, $20::text, $21::text, $22::text, $23::text)", 
        [data.id, data.pickup_facility_name, data.pickup_address, data.pickup_city, data.pickup_state, data.pickup_zip, data.pickup_phone, data.pickup_email, data.pickup_date, data.delivery_date, data.quantity,data.unit, data.weight, data.trailer, data.temperature,data.size,data.delivery_facility_name, data.delivery_address, data.delivery_city, data.delivery_state, data.delivery_zip, data.delivery_phone, data.delivery_email]
        )
        .then( (result) => {
            res.send(result.rows);
        })

});

app.get("/shipments-router", (req, res) => {
    pool.query("SELECT * FROM shipments")
    .then( (result) => {
        res.send(result.rows);
    })
  });


 // accept DELETE request at URI: /shipmentsRouter
 app.delete('/shipments-router/:id', (req, res) => {
    console.log(req.body); // <-- this is the shipmentData that has been extracted from the request
    res.send('Deleting shipmentsRouter..');

    pool.query(
        "DELETE FROM shipments WHERE id = $1::int", [req.params.id])
    .then( () => {
        res.status(202); // Deleted
        res.send('Successfully deleted shipment!');
    })
});











// CRUD FOR LOCATIONS: 

app.post("/locations-router", (req, res) => {
    let locationData = req.body[0];
    let loc_id = locationData.loc_id;
    console.log(locationData);

    // pool.query(
    //     "INSERT INTO orders (id, product, price, quantity) values($1::int, $2::text, $3::int, $4::int)", 
    //     [locationData.locationId, locationData.product, locationData.price, locationData.quantity]
    // )
    pool.query(
        "INSERT INTO locations (loc_id, vendor_name, vendor_loc_code, facility_name, contact_name, phone_number, email, street_address, city, state, zip) values($1::int, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text, $9::text, $10::text, $11::text)", 
        [locationData.loc_id, locationData.vendor_name, locationData.vendor_loc_code, locationData.facility_name, locationData.contact_name, locationData.phone_number, locationData.email, locationData.street_address, locationData.city, locationData.state, locationData.zip]
    )
    .then( () => {
        res.status(201); // Created
        res.send('Successfully added location!');
    })
  });



// app.put("/locations-router/:loc_id", (req, res) => {
//     let locationId = req.params.locationId;

//     // req.params, req.body, req.query
//    // let name = locationData.name;

//     let locationData = req.body;
//         pool.query(
//             "UPDATE locations SET quantity=$2::int WHERE loc_id=$1::int", 
//             [req.params.locationId, locationData.pickup_facility_name, locationData.pickup_address, locationData.pickup_city, locationData.pickup_state, locationData.pickup_zip, locationData.pickup_phone, locationData.pickup_email]
//         )
//         .then( () => {
//             res.status(201); // Created
//             res.send('Successfully updated an location!');
//         })
//         .catch( (err) => {
//             console.log('error');
//         })

// });



app.get("/locations-router", (req, res) => {
    pool.query("SELECT * FROM locations ORDER BY vendor_name;")
    .then( (result) => {
        res.send(result.rows);
    })
  });


 // accept DELETE request at URI: /locationsRouter
 app.delete('/locations-router/:loc_id', (req, res) => {
    console.log(req.body); // <-- this is the locationData that has been extracted from the request
    res.send('Deleting locationsRouter..');

    pool.query(
        "DELETE FROM locations WHERE loc_id = $1::int", [req.params.loc_id])
    .then( () => {
        res.status(202); // Deleted
        res.send('Successfully deleted location!');
    })
});













// CRUD FOR CARRIERS: 

app.post("/carriers-router", (req, res) => {
    let carrierData = req.body[0];
    let carrier_id = carrierData.carrier_id;
    console.log(carrierData);

    // pool.query(
    //     "INSERT INTO orders (id, product, price, quantity) values($1::int, $2::text, $3::int, $4::int)", 
    //     [carrierData.id, carrierData.product, carrierData.price, carrierData.quantity]
    // )
    pool.query(
        "INSERT INTO carriers (carrier_id, carrier_code, carrier_name, contact_name, office_number, cell_number, email_1, email_2) values($1::int, $2::text, $3::text, $4::text, $5::text, $6::text, $7::text, $8::text)", 
        [carrierData.carrier_id, carrierData.carrier_code, carrierData.carrier_name, carrierData.contact_name, carrierData.office_number, carrierData.cell_number, carrierData.email_1, carrierData.email_2]
    )
    .then( () => {
        res.status(201); // Created
        res.send('Successfully added carrier!');
    })
  });



// app.put("/carriers-router/:id", (req, res) => {
//     let id = req.params.id;

//     // req.params, req.body, req.query
//    // let name = carrierData.name;

//     let carrierData = req.body;
//         pool.query(
//             "UPDATE carriers SET quantity=$2::int WHERE id=$1::int", 
//             [req.params.id, carrierData.pickup_facility_name, carrierData.pickup_address, carrierData.pickup_city, carrierData.pickup_state, carrierData.pickup_zip, carrierData.pickup_phone, carrierData.pickup_email]
//         )
//         .then( () => {
//             res.status(201); // Created
//             res.send('Successfully updated an carrier!');
//         })
//         .catch( (err) => {
//             console.log('error');
//         })

// });



app.get("/carriers-router", (req, res) => {
    pool.query("SELECT * FROM carriers ORDER BY carrier_name;")
    .then( (result) => {
        res.send(result.rows);
    })
  });


 // accept DELETE request at URI: /carriersRouter
 app.delete('/carriers-router/:carrier_id', (req, res) => {
    console.log(req.body); // <-- this is the carrierData that has been extracted from the request
    res.send('Deleting carriersRouter..');

    pool.query(
        "DELETE FROM carriers WHERE carrier_id = $1::int", [req.params.carrier_id])
    .then( () => {
        res.status(202); // Deleted
        res.send('Successfully deleted carrier!');
    })
});







app.listen(4000, () => {
    console.log("JSON Server is running on 4000"); // localhost:4000/orders
});