"use strict";
function OrdersController($scope, OrdersService) {
    // let ctrl = this;

    $scope.addItem = () => {
        $scope.items.push({
            id: $scope.newItem.id,
            product: $scope.newItem.product,
            price: $scope.newItem.price,
            quantity: $scope.newItem.quantity,
            available: $scope.newItem.available
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
                <input class="input-item" type="text" placeholder="Product" ng-model="newItem.product"/>
                <input class="input-item" type="number" placeholder="Price" ng-model="newItem.price"/>
                <input class="input-item" type="number" placeholder="Quantity" ng-model="newItem.quantity"/>
                
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