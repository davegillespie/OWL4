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
            pickup_email: $scope.newItem.pickup_email,
            pickup_date: $scope.newItem.pickup_date,
            delivery_date: $scope.newItem.delivery_date,
            quantity: $scope.newItem.quantity,
            unit: $scope.newItem.unit,
            weight: $scope.newItem.weight,
            trailer: $scope.newItem.trailer,
            temperature: $scope.newItem.temperature,
            size: $scope.newItem.size,
            delivery_facility_name: $scope.newItem.delivery_facitlity_name,
            delivery_address: $scope.newItem.delivery_address,
            delivery_city: $scope.newItem.delivery_city,
            delivery_state: $scope.newItem.delivery_state,
            delivery_zip: $scope.newItem.delivery_zip,
            delivery_phone: $scope.newItem.delivery_phone,
            delivery_email: $scope.newItem.delivery_email
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
    

    // $scope.shipment = [];

    $scope.addShipment = (shipment) => {
        OrdersService.addShipment(shipment);
    }

    // $scope.addShipment = () => {
    //     $scope.shipment.push({
    //         id: $scope.shipment.id,
    //         pickup_facility_name: $scope.shipment.pickup_facility_name,
    //         pickup_address: $scope.shipment.pickup_address,
    //         pickup_city: $scope.shipment.pickup_city,
    //         pickup_state: $scope.shipment.pickup_state,
    //         pickup_zip: $scope.shipment.pickup_zip,
    //         pickup_phone: $scope.shipment.pickup_phone,
    //         pickup_email: $scope.shipment.pickup_email,
    //         pickup_date: $scope.shipment.pickup_date,
    //         delivery_date: $scope.shipment.delivery_date,
    //         quantity: $scope.shipment.quantity,
    //         unit: $scope.shipment.unit,
    //         weight: $scope.shipment.weight,
    //         trailer: $scope.shipment.trailer,
    //         temperature: $scope.shipment.temperature,
    //         size: $scope.shipment.size,
    //         delivery_facility_name: $scope.shipment.delivery_facitlity_name,
    //         delivery_address: $scope.shipment.delivery_address,
    //         delivery_city: $scope.shipment.delivery_city,
    //         delivery_state: $scope.shipment.delivery_state,
    //         delivery_zip: $scope.shipment.delivery_zip,
    //         delivery_phone: $scope.shipment.delivery_phone,
    //         delivery_email: $scope.shipment.delivery_email
    //       });
    //     console.log("working", $scope.shipment);
    //     OrdersService.addShipment($scope.shipment);
    // }


    $scope.shipment = [];





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
                <li><button class="shipmentbtn" ng-click="addShipment(shipment)">Create Shipment</button></li>       
            </ul>   
        </div>


        <form class="create-order" ng-submit="addItem()" ng-show="showTheForm" ng-submit="processForm()">
    
            <h4>NEW ORDER FORM:</h4>
            <p>Pickup Details</p>
                <input class="input-item" type="number" placeholder="ID" ng-model="newItem.id"/>
                <input class="input-item" type="text" placeholder="Pickup Facility Name" ng-model="newItem.pickup_facility_name"/>
                <input class="input-item" type="text" placeholder="Address" ng-model="newItem.pickup_address"/>
                <input class="input-item" type="text" placeholder="City" ng-model="newItem.pickup_city"/>
                <input class="input-item" type="text" placeholder="State" ng-model="newItem.pickup_state"/>
                <input class="input-item" type="text" placeholder="Zip" ng-model="newItem.pickup_zip"/>
                <input class="input-item" type="text" placeholder="Phone" ng-model="newItem.pickup_phone"/>
                <input class="input-item" type="text" placeholder="Email" ng-model="newItem.pickup_email"/>
                <input class="input-item" type="date" placeholder="Pickup Date" ng-model="newItem.pickup_date"/>
                <input class="input-item" type="date" placeholder="Delivery Date" ng-model="newItem.delivery_date"/>
            
            <p>Freight Details</p>
                <input class="input-item" type="text" placeholder="Quantity" ng-model="newItem.quantity"/>
                <input class="input-item" type="text" placeholder="Unity Type" ng-model="newItem.unit"/>
                <input class="input-item" type="number" placeholder="Weight" ng-model="newItem.weight"/>
                <input class="input-item" type="text" placeholder="Trailer" ng-model="newItem.trailer"/>
                <input class="input-item" type="text" placeholder="Temperature" ng-model="newItem.temperature"/>
                <input class="input-item" type="text" placeholder="Size" ng-model="newItem.size"/>
            
            <p>Delivery Details</p>
                <input class="input-item" type="text" placeholder="Delivery Facility Name" ng-model="newItem.delivery_facitlity_name"/>
                <input class="input-item" type="text" placeholder="Delivery Address" ng-model="newItem.delivery_address"/>
                <input class="input-item" type="text" placeholder="Delivery City" ng-model="newItem.delivery_city"/>
                <input class="input-item" type="text" placeholder="Delivery State" ng-model="newItem.delivery_state"/>
                <input class="input-item" type="text" placeholder="Delivery Zip" ng-model="newItem.delivery_zip"/>
                <input class="input-item" type="text" placeholder="Delivery Phone" ng-model="newItem.delivery_phone"/>
                <input class="input-item" type="text" placeholder="Delivery Email" ng-model="newItem.delivery_email"/>
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