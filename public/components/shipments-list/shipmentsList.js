"use strict";
function ShipmentsListController(OrdersService) {
    let ctrl = this;

    ctrl.removeShipment = (shipment) => {
      console.log('here');
      console.log(shipment.data, shipment);

      OrdersService.removeShipment(shipment)
      .then( () => {
      
        // OrdersService.getShipmentsTable()
        // .then( (data) => {
        //   ctrl.shipmentsList = data;
        // });
  
      })
    }
    
    ctrl.shipmentsList = OrdersService.shipmentsList;
    // ctrl.removeshipment = OrdersService.removeShipment;
    ctrl.getShipmentsTable = OrdersService.getShipmentsTable;

    OrdersService.getShipmentsTable()
    .then( (data) => {
      ctrl.shipmentsList = data;
      console.log(data);
    });




    ctrl.updateShipment = (shipment, quantity) => {
   
     
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