"use strict";
function LocationsService($http, $q) {
    const service = this;


    service.locationsList = [];
 
    service.addLocation = (location) => {
        console.log(location);
        service.locationsList.push(location);  // This part works
        
        function locationSuccess (res) { 
            // return res.data.data;
            return res.location;
          }
          
            $http.post('/locations-router', location)
            .then( (success) => {
                service.locations = {};
                // service.locationsList = data;
                // console.log(data);
            return locationSuccess(success);
            }); 
    }

    service.removeLocation = (location) => {
        return $q ( (resolve, reject) => {
            $http({
                url: '/locations-router/' + location.loc_id,
                method: 'DELETE',
                data: location
            })
            .then( (location) => {
                    console.log(location);
                resolve(getSuccess(location));
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

    // service.updateLocation = (location) => {
    //     return $http({
    //       url: "/locations-router/" + location.id,
    //       method: "PUT",
    //       data: location
    //     }).then((response) => {
    //       return response.data;
    //     });
    //   }



    
};
    

angular
.module('owlApp')
.service('LocationsService', LocationsService); // Passing $http service as dependency for our service