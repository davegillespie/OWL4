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
              <th>ID</th>
              <th>Pickup Facility Name</th>
              <th>Remove</th>
          </tr>
      </thead>
      <tbody>
          <tr ng-repeat="item in $ctrl.ordersList | orderBy: 'id'">
              <td> {{item.id}} </td>
              <td> {{item.pickup_facility_name}} </td>
             
              </td>
              
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