"use strict";
function ShipmentsService($http, $q) {
    const service = this;

 

// CRUD FOR SHIPMENTS:

      service.shipmentsList = [];

    //   service.orderSelected = [];

      service.addShipment = (orderSelected) => {
          console.log(orderSelected);
        //   service.shipmentsList.push(orderSelected);  // This part works
 
          function genericSuccess (res) { 
            console.log("right before http", res);
              return res.data.data;
            //   return res.orderSelected;
          }
              $http.post('/routes/routes/shipment-routes', orderSelected)
              .then( (success) => {
                  service.orderSelected =  {};
                //   service.shipmentsList = data;
                //   console.log(data);
              return genericSuccess(success);
              }); 
           
                // return $q ( (resolve, reject) => {
                //     $http({
                //         url: '/shipments-router/' + orderSelected.id,
                //         method: 'POST',
                //         data: orderSelected
                //     })
                //     .then( (orderSelected) => {
                //             console.log(orderSelected);
                //         resolve(getSuccess(orderSelected));
                //         }); 
                //     });
      }
  
      service.removeShipment = (shipment) => {
          return $q ( (resolve, reject) => {
              $http({
                  url: '/routes/routes/shipment-routes/' + shipment.id,
                  method: 'DELETE',
                  data: shipment
              })
              .then( (shipment) => {
                      console.log(shipment);
                  resolve(getSuccess(shipment));
                  }); 
              });
      
      }
  
      service.getShipmentsTable = () => {
          return $q ( (resolve, reject) => {
  
          function getSuccess (res) { 
              return res.data;
            }
  
          $http.get('/routes/routes/shipment-routes/')
              .then( (response) => {
                  console.log(response);
              resolve(getSuccess(response));
              }); 
          });
  
      }
  
      service.updateShipment = (shipment) => {
          return $http({
            url: "/routes/routes/shipment-routes/" + shipment.id,
            method: "PUT",
            data: shipment
          }).then((response) => {
            return response.data;
          });
        }
  





    
};
    

angular
.module('owlApp')
.service('ShipmentsService', ShipmentsService); // Passing $http service as dependency for our service