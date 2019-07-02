"use strict";
function CarriersService($http, $q) {
    const service = this;

        /**
     * Call https://www.reddit.com/r/aww/.json
     * and set ctrl.feed to be the results
     */

    service.carriersList = [];
 
    service.addCarrier = (carriers) => {
        console.log(carriers);
        service.carriersList.push(carriers);  // This part works
        
        function carriersSuccess (res) { 
            // return res.data.data;
            return res.carriers;
          }
          
            $http.post('/carriers-router', carriers)
            .then( (success) => {
                service.carrierss = {};
                // service.carriersList = data;
                // console.log(data);
            return carriersSuccess(success);
            }); 
    }

    service.removeCarrier = (carriers) => {
        return $q ( (resolve, reject) => {
            $http({
                url: '/carriers-router/' + carriers.carrier_id,
                method: 'DELETE',
                data: carriers
            })
            .then( (carriers) => {
                    console.log(carriers);
                resolve(getCarrierSuccess(carriers));
                }); 
            });
    
    }

    service.getCarriersTable = () => {
        return $q ( (resolve, reject) => {

        function getCarrierSuccess (res) { 
            return res.data;
          }

        $http.get('/carriers-router')
            .then( (response) => {
                console.log(response);
            resolve(getCarrierSuccess(response));
            }); 
        });

    }

    service.updateCarriers = (carriers) => {
        return $http({
          url: "/carriers-router/" + carriers.carrier_id,
          method: "PUT",
          data: carriers
        }).then((response) => {
          return response.data;
        });
      }



    
};
    

angular
.module('owlApp')
.service('CarriersService', CarriersService); // Passing $http service as dependency for our service