"use strict";
function LocationsListController(LocationsService) {
    let ctrl = this;

    ctrl.removeLocation = (location) => {
      console.log('location here');
      console.log(location.data, location);

      LocationsService.removeLocation(location)
      .then( () => {
      
        LocationsService.getLocationTable()
        .then( (data) => {
          ctrl.locationsList = data;
        });
  
      })
    }
    
    // ctrl.locationsList = LocationsService.locationsList;
    // ctrl.removeLocation = LocationsService.removeLocation;
    ctrl.getLocationTable = LocationsService.getLocationTable;

    LocationsService.getLocationTable()
    .then( (data) => {
      ctrl.locationsList = data;
    });



    // ctrl.updateLocation = (location) => {
    // // ctrl.updateLocation = (location, quantity) => {
    
    //   // let locationUpdate = {
    //   //   quantity: location.quantity
    //   // } 
    //   // location.quantity = quantity;
  
    //   LocationsService.updatelocation(location)
    //   .then( (data) => {
    //     ctrl.locationsList = data;
    //     ctrl.getLocationTable();
    //   })
    //   .catch( (err) => {
    //     console.log(err);
    //   })
  
    // }

    
   


}
  
  angular
  .module('owlApp')
  .component('locationsList', {
    template: `
    <section id="locations-list">
    
        <table>
            <tr>
                <th>Location ID</th>
                <th>Vendor Name</th>
                <th>Vendor Location Code</th>
                <th>Facility Name</th>
                <th>Contact Name</th>
                <th>Phone#</th>
                <th>Email</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Remove</th>
            </tr>

            <tr ng-repeat="location in $ctrl.locationsList | orderBy: 'vendor_name'">
                <td> {{location.loc_id}} </td>
                <td> {{location.vendor_name}} </td>
                <td> {{location.vendor_loc_code}} </td>
                <td> {{location.facility_name}} </td>
                <td> {{location.contact_name}} </td>
                <td> {{location.phone_number}} </td>
                <td> {{location.email}} </td>
                <td> {{location.street_address}} </td>
                <td> {{location.city}} </td>
                <td> {{location.state}} </td>
                <td> {{location.zip}} </td>
                
                <td> <button ng-click="$ctrl.removeLocation(location)"> x </button> </td>
            </tr>
            
        
        </table>
    </section>

    `, // or use templateUrl
    controller: LocationsListController,
    bindings: {
      addLocation: '&',
     // removeLocation: '&'
    }
  });