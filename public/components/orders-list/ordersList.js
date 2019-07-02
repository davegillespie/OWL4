"use strict";
function OrdersListController(OrdersService) {
    let ctrl = this;

    ctrl.removeItem = (item) => {
      console.log('here');
      console.log(item.data, item);

      OrdersService.removeItem(item)
      .then( () => {
      
        OrdersService.getTable()
        .then( (data) => {
          ctrl.ordersList = data;
        });
  
      })
    }
    
    // ctrl.ordersList = OrdersService.ordersList;
    // ctrl.removeItem = OrdersService.removeItem;
    ctrl.getTable = OrdersService.getTable;

    OrdersService.getTable()
    .then( (data) => {
      ctrl.ordersList = data;
    });




    ctrl.updateItem = (item, quantity) => {
    
      // let itemUpdate = {
      //   quantity: item.quantity
      // } 
      item.quantity = quantity;
  
      OrdersService.updateItem(item)
      .then( (data) => {
        ctrl.ordersList = data;
        ctrl.getTable();
      })
      .catch( (err) => {
        console.log(err);
      })
  
    }

    
   


}
  
  angular
  .module('owlApp')
  .component('ordersList', {
    template: `
    <section id="orders-list">
      
  
    <table>
      <thead>
          <tr>          
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

              <th>Remove</th>
          </tr>
      </thead>
      <tbody>
          <tr ng-repeat="item in $ctrl.ordersList | orderBy: 'id'">
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
              
              <td> <button ng-click="$ctrl.removeItem(item)"> x </button> </td>
          </tr>
        </tbody>
    </table>

  </section>

    `, // or use templateUrl
    controller: OrdersListController,
    bindings: {
      addItem: '&',
     // removeItem: '&'
    }
  });