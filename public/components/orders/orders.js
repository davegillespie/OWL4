"use strict";
function OrdersController($scope, OrdersService) {
    // let ctrl = this;

    $scope.addItem = () => {
        $scope.items.push({
            id: $scope.newItem.id,
            pickup_facility_name: $scope.newItem.pickup_facility_name,
            pickup_address: $scope.newItem.pickup_address,
            pickup_city: $scope.newItem.pickup_city,
            pickup_state: $scope.newItem.pickup_state,
            pickup_zip: $scope.newItem.pickup_zip,
            pickup_phone: $scope.newItem.pickup_phone,
            pickup_email: $scope.newItem.pickup_email
        });
        OrdersService.addItem($scope.items);

    }


    $scope.removeItem = (item) => {
        var i = $scope.items.indexOf(item);
        $scope.items.splice(i, 1);
        OrdersService.removeItem($scope.items);
        console.log(items);
    }

    $scope.items = [];
    
}   


  
  angular
  .module('owlApp')
  .component('orders', {
    template: `
        <section class="">
         
        <div class="insideheader"> 
            <h3>Orders</h3>  
            <ul class="insideheader-nav">       
                <li><button ng-click="showTheForm = !showTheForm" class="btnCreate">Create Order</button></li> 
                <li><button class="shipmentbtn" ng-click="">Create Shipment</button></li>       
            </ul>   
        </div>


        <form class="create-order" ng-submit="addItem()" ng-show="showTheForm" ng-submit="processForm()">
    
            <h4>NEW ORDER FORM:</h4>
                <input class="input-item" type="number" placeholder="ID" ng-model="newItem.id"/>
                <input class="input-item" type="text" placeholder="Pickup Facility Name" ng-model="newItem.pickup_facility_name"/>
                <input class="input-item" type="text" placeholder="Address" ng-model="newItem.pickup_address"/>
                <input class="input-item" type="text" placeholder="City" ng-model="newItem.pickup_city"/>
                <input class="input-item" type="text" placeholder="State" ng-model="newItem.pickup_state"/>
                <input class="input-item" type="number" placeholder="Zip" ng-model="newItem.pickup_zip"/>
                <input class="input-item" type="text" placeholder="Phone" ng-model="newItem.pickup_phone"/>
                <input class="input-item" type="text" placeholder="Email" ng-model="newItem.pickup_email"/>
                <br>
                <br>

                <input type="submit" value="SUBMIT"/>
                <input type="button" ng-click="showTheForm = false" value="CANCEL" />
                
        </form>

        <orders-list></orders-list>     

        </section>
        `, // or use templateUrl
    controller: OrdersController
    // bindings: {
    //     addItem: '&',
    //    // removeItem: '&'
    //   }
  });