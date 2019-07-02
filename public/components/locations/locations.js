function LocationsController($scope, LocationsService) {
    // var ctrl = this;

    $scope.addLocation = () => {
        $scope.locations.push({
            loc_id: $scope.newLocation.loc_id,
            vendor_name: $scope.newLocation.vendor_name,
            vendor_loc_code: $scope.newLocation.vendor_loc_code, 
            facility_name: $scope.newLocation.facility_name,
            contact_name: $scope.newLocation.contact_name,
            phone_number: $scope.newLocation.phone_number,
            email: $scope.newLocation.email,
            street_address: $scope.newLocation.street_address, 
            city: $scope.newLocation.city,
            state: $scope.newLocation.state,
            zip: $scope.newLocation.zip
        });
        LocationsService.addLocation($scope.locations);

    }


    $scope.removeLocation = (location) => {
        var i = $scope.locations.indexOf(location);
        $scope.locations.splice(i, 1);
        LocationsService.removeLocation($scope.locations);
        console.log(locations);
    }

    $scope.locations = [];
    
}   



  
angular
.module('owlApp')
.component('locations', {
  template: `
    <section id="locations">
       
    <div class="insideheader"> 
        <h3>Locations</h3>  
              
        <button ng-click="showTheForm = !showTheForm" class="btnCreate">Create Location</button> 
                    
    </div>


    <form class="create-order" ng-submit="addLocation()" ng-show="showTheForm" ng-submit="processForm()">

        <h4>NEW ORDER FORM:</h4>
        <p>Pickup Details</p>
            <input class="input-item" type="number" placeholder="Location ID" ng-model="newLocation.id"/>
            <input class="input-item" type="text" placeholder="Vendor" ng-model="newLocation.vendor_name"/>
            <input class="input-item" type="text" placeholder="Vendor Location Code" ng-model="newLocation.vendor_loc_code"/>
            <input class="input-item" type="text" placeholder="Facility Name" ng-model="newLocation.facility_name"/>
            <input class="input-item" type="text" placeholder="Contact Name" ng-model="newLocation.contact_name"/>
            <input class="input-item" type="text" placeholder="Phone" ng-model="newLocation.phone_number"/>
            <input class="input-item" type="text" placeholder="Email" ng-model="newLocation.email"/>
            <input class="input-item" type="text" placeholder="Street Address" ng-model="newLocation.street_address"/>
            <input class="input-item" type="text" placeholder="City" ng-model="newLocation.city"/>
            <input class="input-item" type="text" placeholder="State" ng-model="newLocation.state"/>
            <input class="input-item" type="text" placeholder="Zip" ng-model="newLocation.zip"/>

            <input type="submit" value="SUBMIT"/>
            <input type="button" ng-click="showTheForm = false" value="CANCEL" />
            
    </form>

        <locations-list></locations-list>  

    </section>`, // or use templateUrl
  controller: LocationsController

});