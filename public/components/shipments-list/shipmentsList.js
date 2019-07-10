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
    ctrl.ordersList = OrdersService.ordersList;
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
          <tr ng-repeat="shipment in $ctrl.shipmentsList">
          <td>
          <button ng-if="shipment.expanded" ng-click="shipment.expanded = false">-</button>
          <button ng-if="!shipment.expanded" ng-click="shipment.expanded = true">+</button>
          </td>
          <td><input type="checkbox" /></td>
          <td><button class="btnRate">$2000</button></td>
              <td> {{shipment.shipment_id}} </td>
              <td> {{shipment.shipment_carrier}} </td>
              <td> {{shipment.shipment_rate}} </td>
              
              <td> <button ng-click="$ctrl.removeShipment(shipment)"> x </button> </td>
          
              <tr ng-repeat="item in $ctrl.ordersList">
                <td> {{item.id}} </td>
                <td> {{item.pickup_facility_name}} </td>
                <td> {{item.pickup_address}} </td>
                <td> {{item.pickup_city}} </td>
                <td> {{item.pickup_state}} </td>
                <td> {{item.pickup_zip}} </td>
                <td> {{item.pickup_phone}} </td>
                <td> {{item.pickup_email}} </td>      
                <td> {{item.pickup_date}} </td>
                <td> {{item.delivery_date}} </td>
                <td> {{item.quantity}} </td>
                <td> {{item.unit}} </td>
                <td> {{item.weight}} </td>
                <td> {{item.trailer}} </td>
                <td> {{item.temperature}} </td>
                <td> {{item.size}} </td>
                <td> {{item.delivery_facility_name}} </td>
                <td> {{item.delivery_address}} </td>
                <td> {{item.delivery_city}} </td>
                <td> {{item.delivery_state}} </td>
                <td> {{item.delivery_zip}} </td>
                <td> {{item.delivery_phone}} </td>
                <td> {{item.delivery_email}} </td>
              </tr>
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