"use strict";
function OrdersListController(OrdersService, $scope) {
    let ctrl = this;

    ctrl.removeItem = (item) => {
      console.log('here');
      console.log(item.data, item);

      OrdersService.removeItem(item)
      .then( () => {
      
        // OrdersService.getTable()
        // .then( (data) => {
        //   ctrl.ordersList = data;
        // });
  
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

    



  //   ctrl.addShipment = () => {
  //     ctrl.orderSelected.push();
  //     console.log("working", ctrl.orderSelected);
  //     OrdersService.addShipment(ctrl.orderSelected);
  // }

// ctrl.addRow = (orderSelected) => {
//   console.log("orderSelected", orderSelected);
  
// } 

// ctrl.addShipment = (orderSelected) => {
//   console.log("addShipment", orderSelected);
// // OrdersService.addShipment(orderSelected);
// }


var orderSelected = [];
        // $scope.ordersList = [{
        //   id: 'test',
        //   pickup_facility_name: 'fdsfd'
        // }];
        $scope.getIndex = function (item, isTrue) {
            if (isTrue) {
              console.log("item", item);
                orderSelected.push(item);
                console.log("orderSelected.push", orderSelected);
            }
            else {
                var index = orderSelected.indexOf(item);
                orderSelected.splice(index, 1);
                console.log("item", index);
            }
        };
        $scope.addShipment = function (isMaster) {
            if (!isMaster) {
                $scope.ordersList = [];
                orderSelected.push();
                console.log("orderSelected", orderSelected);
                OrdersService.addShipment(orderSelected);
                console.log('orderSelected', orderSelected);
            }
            // else {

            //     for (var i = 0; i > orderSelected.length; i++) {
            //         var rec = $scope.ordersList.filter(function (item) { return item == orderSelected[i] });
            //         var idx = $scope.ordersList.indexOf(rec[0]);
            //         $scope.ordersList.splice(idx, 1);
            //         console.log("item", item);
            //         console.log("rec", rec);
            //         console.log("item", idx)
                // }
                // console.log("here");
            // };
            // orderSelected = [];
            // console.log("here", orderSelected);
        };

}
  
  angular
  .module('owlApp')
  .component('ordersList', {
    template: `
    <section id="orders-list">
      
  
    <table>
      <thead>
          <tr>
              <th><input type="checkbox" ng-model="master"/><input type="button" class="btn ng-model="master" btn-danger btn-xs" ng-click="addShipment(master)" /></th>
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
              <td> <input type="checkbox" ng-checked="master" ng-model="isTrue" ng-change="getIndex(item, isTrue)" </td>
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