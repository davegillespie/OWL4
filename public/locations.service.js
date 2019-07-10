"use strict";
function LocationsService($http, $q) {
    const service = this;


    service.locationsList = [];
 
    service.addLocation = (locations) => {
        console.log(locations);
        service.locationsList.push(locations);  // This part works
        
        function locationSuccess (res) { 
            // return res.data.data;
            return res.locations;
          }
          
            $http.post('/locations-router', locations)
            .then( (success) => {
                service.locations = {};
                // service.locationsList = data;
                // console.log(data);
            return locationSuccess(success);
            }); 
    }

    service.removeLocation = (locations) => {
        return $q ( (resolve, reject) => {
            $http({
                url: '/locations-router/' + locations.loc_id,
                method: 'DELETE',
                data: locations
            })
            .then( (locations) => {
                    console.log(locations);
                resolve(getSuccess(locations));
                }); 
            });
    
    }

    service.getLocationTable = () => {
        return $q ( (resolve, reject) => {

        function getSuccess (res) { 
            return res.data;
          }

        $http.get('/locations-router')
            .then( (response) => {
                console.log(response);
            resolve(getSuccess(response));
            }); 
        });

    }

    service.updateLocation = (locations) => {
        return $http({
          url: "/locations-router/" + locations.loc_id,
          method: "PUT",
          data: locations
        }).then((response) => {
          return response.data;
        });
      }



    
};
    

angular
.module('owlApp')
.service('LocationsService', LocationsService); // Passing $http service as dependency for our service