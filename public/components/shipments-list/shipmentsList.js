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

              <th>Remove</th>
          </tr>
      </thead>
      <tbody>
          <tr ng-repeat="shipment in $ctrl.shipmentsList">
              <td>
                <button class="btn btn-secondary" ng-if="shipment.expanded" ng-click="shipment.expanded = false">-</button>
                <button class="btn btn-secondary" ng-if="!shipment.expanded" ng-click="shipment.expanded = true">+</button>
              </td>
              <td> <input type="checkbox" /> </td>
              <td> <button class="btnRate">$2000</button> </td>
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
              <td> {{shipment.carrier}} </td>
              
              <td> 
                <button class="btn btn-primary btn-xs"> Edit </button>
                <button class="btn btn-danger btn-xs" ng-click="$ctrl.removeShipment(shipment)"> Delete </button> 
              </td>
          </tr>

              <tr ng-if="shipment.expanded" ng-repeat-end="">
              <td> {{shipment.id[1]}} </td>
              <td> {{shipment.pickup_facility_name[1]}} </td>
              <td> {{shipment.pickup_address[1]}} </td>
              <td> {{shipment.pickup_city[1]}} </td>
              <td> {{shipment.pickup_state[1]}} </td>
              <td> {{shipment.pickup_zip[1]}} </td>
              <td> {{shipment.pickup_phone[1]}} </td>
              <td> {{shipment.pickup_email[1]}} </td>
              <td> {{shipment.pickup_date[1]}} </td>
              <td> {{shipment.delivery_date[1]}} </td>
              <td> {{shipment.quantity[1]}} </td>
              <td> {{shipment.unit[1]}} </td>
              <td> {{shipment.weight[1]}} </td>
              <td> {{shipment.trailer[1]}} </td>
              <td> {{shipment.temperature[1]}} </td>
              <td> {{shipment.size[1]}} </td>
              <td> {{shipment.delivery_facility_name[1]}} </td>
              <td> {{shipment.delivery_address[1]}} </td>
              <td> {{shipment.delivery_city[1]}} </td>
              <td> {{shipment.delivery_state[1]}} </td>
              <td> {{shipment.delivery_zip[1]}} </td>
              <td> {{shipment.delivery_phone[1]}} </td>
              <td> {{shipment.delivery_email[1]}} </td>
              <td> {{shipment.carrier[1]}} </td>
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