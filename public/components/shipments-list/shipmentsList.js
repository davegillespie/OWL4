"use strict";
function ShipmentsListController(OrdersService) {
    let ctrl = this;

    ctrl.removeShipment = (shipment) => {
      console.log('here');
      console.log(shipment.data, shipment);

      OrdersService.removeShipment(shipment)
      .then( () => {
      
        OrdersService.getShipmentsTable()
        .then( (data) => {
          ctrl.shipmentsList = data;
        });
  
      })
    }
    
    ctrl.shipmentsList = OrdersService.shipmentsList;
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
      
  
    <table>
      <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Rate</h>        
              <th>Order ID</th>
              <th>Pickup Facility Name</th>
              <th>Pickup Address</th>
              <th>Pickup City</th>
              <th>Pickup State</th>
              <th>Pickup Zip</th>
              <th>Pickup Phone</th>
              <th>Pickup Email</th>

              <th>Pickup Date</th>
              <th>Delivery Date</th>

              <th>Quantity</th>
              <th>Unit</th> 
              <th>Weight</th>
              <th>Trailer</th>
              <th>Temperature</th> 
              <th>Size</th>

              <th>Delivery Facility Name</th>
              <th>Delivery Address</th> 
              <th>Delivery City</th>
              <th>Delivery State</th>
              <th>Delivery Zip</th> 
              <th>Delivery Phone</th>
              <th>Delivery Email</th>
              <th>Carrier</th>
              <th>Rate</th>

              <th>Remove</th>
          </tr>
      </thead>
      <tbody>
          <tr ng-repeat="shipment in $ctrl.shipmentsList | orderBy: 'id'">
          <td>
          <button ng-if="shipment.expanded" ng-click="shipment.expanded = false">-</button>
          <button ng-if="!shipment.expanded" ng-click="shipment.expanded = true">+</button>
          </td>
          <td><input type="checkbox" /></td>
          <td><button class="btnRate">$2000</button></td>
              <td> {{shipment.id}} </td>
              <td> {{shipment.pickup_facility_name}} </td>
              <td> {{shipment.pickup_address}} </td>
              <td> {{shipment.pickup_city}} </td>
              <td> {{shipment.pickup_state}} </td>
              <td> {{shipment.pickup_zip}} </td>
              <td> {{shipment.pickup_phone}} </td>
              <td> {{shipment.pickup_email}} </td>      
              <td> {{shipment.pickup_date}} </td>
              <td> {{shipment.delivery_date}} </td>
              <td> {{shipment.quantity}} </td>
              <td> {{shipment.unit}} </td>
              <td> {{shipment.weight}} </td>
              <td> {{shipment.trailer}} </td>
              <td> {{shipment.temperature}} </td>
              <td> {{shipment.size}} </td>
              <td> {{shipment.delivery_facility_name}} </td>
              <td> {{shipment.delivery_address}} </td>
              <td> {{shipment.delivery_city}} </td>
              <td> {{shipment.delivery_state}} </td>
              <td> {{shipment.delivery_zip}} </td>
              <td> {{shipment.delivery_phone}} </td>
              <td> {{shipment.delivery_email}} </td>
              
              <td> <button ng-click="$ctrl.removeShipment(shipment)"> x </button> </td>
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