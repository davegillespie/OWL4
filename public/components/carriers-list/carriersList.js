"use strict";
function CarriersListController(CarriersService) {
    let ctrl = this;

    ctrl.removeCarrier = (carrier) => {
      console.log('here');
      console.log(carrier.data, carrier);

      CarriersService.removeCarrier(carrier)
      .then( () => {
      
        CarriersService.getCarriersTable()
        .then( (data) => {
          ctrl.carriersList = data;
        });
  
      })
    }
    
    // ctrl.carriersList = CarriersService.carriersList;
    // ctrl.removeCarrier = CarriersService.removeCarrier;
    ctrl.getCarriersTable = CarriersService.getCarriersTable;

    CarriersService.getCarriersTable()
    .then( (data) => {
      ctrl.carriersList = data;
    });




    // ctrl.updateCarrier = (carrier, quantity) => {
    
    //   // let carrierUpdate = {
    //   //   quantity: carrier.quantity
    //   // } 
    //   carrier.quantity = quantity;
  
    //   CarriersService.updatecarrier(carrier)
    //   .then( (data) => {
    //     ctrl.carriersList = data;
    //     ctrl.getCarriersTable();
    //   })
    //   .catch( (err) => {
    //     console.log(err);
    //   })
  
    // }

    
   


}
  
  angular
  .module('owlApp')
  .component('carriersList', {
    template: `
    <section id="carriers-list">
      
  
    <table>
      <thead>
          <tr>          
              <th>Carrier ID</th>
              <th>Carrier Code</th>
              <th>Carrier Name</th>
              <th>Contact Name</th>
              <th>Office Number</th>
              <th>Cell Number</th>
              <th>Email 1</th>
              <th>Email 2</th>

              <th>Remove</th>
          </tr>
      </thead>
      <tbody>
          <tr ng-repeat="carrier in $ctrl.carriersList | orderBy: 'carrier_name'">
              <td> {{carrier.carrier_id}} </td>
              <td> {{carrier.carrier_code}} </td>
              <td> {{carrier.carrier_name}} </td>
              <td> {{carrier.contact_name}} </td>
              <td> {{carrier.office_number}} </td>
              <td> {{carrier.cell_number}} </td>
              <td> {{carrier.email_1}} </td>
              <td> {{carrier.email_2}} </td>      
      
              <td> <button ng-click="$ctrl.removeCarrier(carrier)"> x </button> </td>
          </tr>
        </tbody>
    </table>

  </section>

    `, // or use templateUrl
    controller: CarriersListController,
    bindings: {
      addCarrier: '&',
     // removeCarrier: '&'
    }
  });