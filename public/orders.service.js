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
    
};
    

angular
.module('owlApp')
.service('OrdersService', OrdersService); // Passing $http service as dependency for our service