"use strict";
function OrdersService($http, $q) {
    const service = this;

 
// CRUD FOR ORDERS:

    service.ordersList = [];
 
    service.addItem = (item) => {
        console.log(item);
        service.ordersList.push(item);  // This part works
        
        function genericSuccess (res) { 
            // return res.data.data;
            return res.item;
          }
          
            $http.post('/orders-router', item)
            .then( (success) => {
                service.items = {};
                // service.ordersList = data;
                // console.log(data);
            return genericSuccess(success);
            }); 
    }

    service.removeItem = (item) => {
        return $q ( (resolve, reject) => {
            $http({
                url: '/orders-router/' + item.id,
                method: 'DELETE',
                data: item
            })
            .then( (item) => {
                    console.log(item);
                resolve(getSuccess(item));
                }); 
            });
    
    }

    service.getTable = () => {
        return $q ( (resolve, reject) => {

        function getSuccess (res) { 
            return res.data;
          }

        $http.get('/orders-router')
            .then( (response) => {
                console.log(response);
            resolve(getSuccess(response));
            }); 
        });

    }

    service.updateItem = (item) => {
        return $http({
          url: "/orders-router/" + item.id,
          method: "PUT",
          data: item
        }).then((response) => {
          return response.data;
        });
      }




// CRUD FOR SHIPMENTS:

      service.shipmentsList = [];

    //   service.shipment = [];

      service.addShipment = (shipment) => {
          console.log(shipment);
          service.shipmentsList.push(shipment);  // This part works
          
          function genericSuccess (res) { 
              // return res.data.data;
              return res.shipment;
            }
            
              $http.post('/shipments-router', shipment)
              .then( (success) => {
                  service.shipment =  {};
                //   service.shipmentsList = data;
                //   console.log(data);
              return genericSuccess(success);
              }); 
      }
  
      service.removeShipment = (shipment) => {
          return $q ( (resolve, reject) => {
              $http({
                  url: '/shipments-router/' + shipment.id,
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
  
          $http.get('/shipments-router')
              .then( (response) => {
                  console.log(response);
              resolve(getSuccess(response));
              }); 
          });
  
      }
  
      service.updateShipment = (shipment) => {
          return $http({
            url: "/shipments-router/" + shipment.id,
            method: "PUT",
            data: shipment
          }).then((response) => {
            return response.data;
          });
        }
  





    
};
    

angular
.module('owlApp')
.service('OrdersService', OrdersService); // Passing $http service as dependency for our service