// this is the routes file

// Import express module
const express = require('express');

// const cartData = require('./cartData');

// Add router for ordersRouter
// This lets us to split our API routes
// into separate modules (files), so its easier to use
const ordersRouter = express.Router();


// // accept GET request at URI: /ordersRouter
// ordersRouter.get('/cart-items', (req, res) => {
//     console.log('test');
//     console.log(req.body);
// res.send(cartData);
// });
//     // accept POST request at URI: /ordersRouter
//     ordersRouter.post('/cart-items', (req, res) => {
//         console.log(req.body); // <-- this is the data that has been extracted from the request
//     res.send(cartData);
//     });
//         // accept PUT request at URI: /ordersRouter
//         ordersRouter.put('/cart-items/:id', (req, res) => {
//             console.log(req.params.id);
//             console.log(req.body); // <-- this is the data that has been extracted from the request
//         res.send('Updating ordersRouter..');
//         });
//             // accept DELETE request at URI: /ordersRouter
//             ordersRouter.delete('/cart-items/:id', (req, res) => {
//                 console.log(req.body); // <-- this is the data that has been extracted from the request
//             res.send('Deleting ordersRouter..');
//             });





module.exports = ordersRouter;