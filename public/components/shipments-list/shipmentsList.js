"use strict";
function ShipmentsListController(OrdersService) {
    let ctrl = this;
    ctrl.service = OrdersService;
    ctrl.shipmentsList = ctrl.service.shipmentsList;
    ctrl.pickupInfo =  false; // displays minimal info initially
    ctrl.shipmentInfo = false; // displays minimal info initially
    ctrl.deliveryInfo = false; // displays minimal info initially


    ctrl.removeShipment = (shipment) => {
      console.log(`removeShipment in ShipmentsListController:\nshipment: ${shipment}`);
      OrdersService.removeShipment(shipment)
      .then( () => {
        OrdersService.getShipmentsTable()
        .then( (data) => {
          ctrl.shipmentsList = data;
        });
  
      })
    }
    
    // ctrl.removeshipment = OrdersService.removeShipment;
    ctrl.getShipmentsTable = OrdersService.getShipmentsTable;

    OrdersService.getShipmentsTable()
    .then( (data) => {
      ctrl.shipmentsList = data;
    });




    // ctrl.updateShipment = (shipment, quantity) => {
    ctrl.updateShipment = (shipment) => {

      // let shipmentUpdate = {
      //   quantity: shipment.quantity
      // } 
      shipment.quantity = quantity;
  
      OrdersService.updateShipment(shipment)
      .then( (data) => {
        ctrl.shipmentsList = data;
        ctrl.getShipmentsTable();
      })
      .catch( (err) => {
        console.log(err);
      })
  
    }

    
   


}
  
  angular
  .module('owlApp')
  .component('shipmentsList', {
    template: `
    <section id="shipments-list">
      
    <div id="orderToggleBox">
      <label class="orderCheckboxLabel">Pickup Information <input class="orderCheckbox" type="checkbox" ng-model="$ctrl.pickupInfo"></label>
      <label class="orderCheckboxLabel">Shipment Information <input class="orderCheckbox" type="checkbox" ng-model="$ctrl.shipmentInfo"></label>
      <label class="orderCheckboxLabel">Delivery Information <input class="orderCheckbox" type="checkbox" ng-model="$ctrl.deliveryInfo"></label>
    </div>

    <table>
      <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Rate</h>        
              <th>Order ID</th>
              <th ng-if="$ctrl.pickupInfo">Pickup Facility Name</th>
              <th ng-if="$ctrl.pickupInfo">Pickup Address</th>
              <th ng-if="$ctrl.pickupInfo">Pickup City</th>
              <th ng-if="$ctrl.pickupInfo">Pickup State</th>
              <th ng-if="$ctrl.pickupInfo">Pickup Zip</th>
              <th ng-if="$ctrl.pickupInfo">Pickup Phone</th>
              <th ng-if="$ctrl.pickupInfo">Pickup Email</th>

              <th ng-if="$ctrl.shipmentInfo">Pickup Date</th>
              <th ng-if="$ctrl.shipmentInfo">Delivery Date</th>

              <th ng-if="$ctrl.shipmentInfo">Quantity</th>
              <th ng-if="$ctrl.shipmentInfo">Unit</th> 
              <th ng-if="$ctrl.shipmentInfo">Weight</th>
              <th ng-if="$ctrl.shipmentInfo">Trailer</th>
              <th ng-if="$ctrl.shipmentInfo">Temperature</th> 
              <th ng-if="$ctrl.shipmentInfo">Size</th>

              <th ng-if="$ctrl.deliveryInfo">Delivery Facility Name</th>
              <th ng-if="$ctrl.deliveryInfo">Delivery Address</th> 
              <th ng-if="$ctrl.deliveryInfo">Delivery City</th>
              <th ng-if="$ctrl.deliveryInfo">Delivery State</th>
              <th ng-if="$ctrl.deliveryInfo">Delivery Zip</th> 
              <th ng-if="$ctrl.deliveryInfo">Delivery Phone</th>
              <th ng-if="$ctrl.deliveryInfo">Delivery Email</th>
              <th>Carrier</th>
              <th>Rate</th>

              <th>Remove</th>
          </tr>
      </thead>
      <tbody>
          <tr ng-repeat="shipment in $ctrl.shipmentsList">
          <td>
          <button ng-if="shipment.expanded" ng-click="shipment.expanded = false">-</button>
          <button ng-if="!shipment.expanded" ng-click="shipment.expanded = true">+</button>
          </td>
          <td><input type="checkbox" /></td>

          <td><button class="btnRate">$2000</button></td>
              <td> {{shipment.shipment_id}} </td>
              <td ng-if="$ctrl.pickupInfo"> Pickup Facility Name </td>
              <td ng-if="$ctrl.pickupInfo"> Pickup Address </td>
              <td ng-if="$ctrl.pickupInfo"> Pickup City </td>
              <td ng-if="$ctrl.pickupInfo"> Pickup State </td>
              <td ng-if="$ctrl.pickupInfo"> Pickup Zip </td>
              <td ng-if="$ctrl.pickupInfo"> Pickup Phone </td>
              <td ng-if="$ctrl.pickupInfo"> Pickup Email </td>
              <td ng-if="$ctrl.shipmentInfo"> Pickup Date </td>
              <td ng-if="$ctrl.shipmentInfo"> Delivery Date </td>
              <td ng-if="$ctrl.shipmentInfo"> Quantity </td>
              <td ng-if="$ctrl.shipmentInfo"> Unit </td>
              <td ng-if="$ctrl.shipmentInfo"> Weight </td>
              <td ng-if="$ctrl.shipmentInfo"> Trailer </td>
              <td ng-if="$ctrl.shipmentInfo"> Temperature </td>
              <td ng-if="$ctrl.shipmentInfo"> Size </td>
              <td ng-if="$ctrl.deliveryInfo"> Delivery Facility Name </td>
              <td ng-if="$ctrl.deliveryInfo"> Delivery Address </td>
              <td ng-if="$ctrl.deliveryInfo"> Delivery City </td>
              <td ng-if="$ctrl.deliveryInfo"> Delivery State </td>
              <td ng-if="$ctrl.deliveryInfo"> Delivery Zip </td>
              <td ng-if="$ctrl.deliveryInfo"> Delivery Phone </td>
              <td ng-if="$ctrl.deliveryInfo"> Delivery Email </td>
              <td> {{shipment.shipment_carrier}} </td>
              <td> {{shipment.shipment_rate}} </td>
              <td> <button ng-click="$ctrl.removeShipment(shipment)"><i class="material-icons">close</i></button> </td>
          </tr>

          <tr ng-if="shipment.expanded" ng-repeat-end="">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>      
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>


          </tbody>
      </table>

    </section>

    `, // or use templateUrl
    controller: ShipmentsListController,
    bindings: {
      addShipment: '&',
     // removeShipment: '&'
    }
  });