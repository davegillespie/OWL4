"use strict";
function CarriersController($scope, CarriersService) {
    // let ctrl = this;

    $scope.addCarrier = () => {
        $scope.carriers.push({
            carrier_id: $scope.newCarrier.carrier_id,
            carrier_code: $scope.newCarrier.carrier_code, 
            carrier_name: $scope.newCarrier.carrier_name,
            contact_name: $scope.newCarrier.contact_name,
            office_number: $scope.newCarrier.office_number,
            cell_number: $scope.newCarrier.cell_number,
            email_1: $scope.newCarrier.email_1,
            email_2: $scope.newCarrier.email_2
        });
        CarriersService.addCarrier($scope.carriers);

    }


    $scope.removeCarrier = (carrier) => {
        var i = $scope.carriers.indexOf(carrier);
        $scope.carriers.splice(i, 1);
        CarriersService.removeCarrier($scope.carriers);
        console.log(carriers);
    }

    $scope.carriers = [];
    
}   


  
  angular
  .module('owlApp')
  .component('carriers', {
    template: `
        <section class="carriers">
         
        <div class="insideheader"> 
            <h3>Carriers</h3>         
                <button ng-click="showTheForm = !showTheForm" class="btnCreate">Add Carrier</button>
        
        </div>


        <form class="create-order" ng-submit="addCarrier()" ng-show="showTheForm" ng-submit="processForm()">
    
            <h4>NEW CARRIER FORM:</h4>
            <p>Carrier Details</p>
                <input class="input-item" type="number" placeholder="Carrier ID" ng-model="newCarrier.carrier_id"/>
                <input class="input-item" type="text" placeholder="Carrier Code" ng-model="newCarrier.carrier_code"/>
                <input class="input-item" type="text" placeholder="Carrier Name" ng-model="newCarrier.carrier_name"/>
                <input class="input-item" type="text" placeholder="Contact Name" ng-model="newCarrier.contact_name"/>
                <input class="input-item" type="text" placeholder="Office Number" ng-model="newCarrier.office_number"/>
                <input class="input-item" type="text" placeholder="Cell Number" ng-model="newCarrier.cell_number"/>
                <input class="input-item" type="text" placeholder="Email 1" ng-model="newCarrier.email_1"/>
                <input class="input-item" type="text" placeholder="Email 2" ng-model="newCarrier.email_2"/>
            
                <br>
                <br>

                <input type="submit" value="SUBMIT"/>
                <input type="button" ng-click="showTheForm = false" value="CANCEL" />
                
        </form>

        <carriers-list></carriers-list>     

        </section>
        `, // or use templateUrl
    controller: CarriersController
    // bindings: {
    //     addCarrier: '&',
    //    // removeCarrier: '&'
    //   }
  });