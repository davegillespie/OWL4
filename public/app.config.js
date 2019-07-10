"use strict";
angular.module("owlApp")
  // Configuring the routing
  // The config method must have an array as the parameter. The array contains two elements, $routeProvider (as a string) and an arrow function with $routeProvider as a parameter
  .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
      // When the user visits the display route...
      .when("/about", {
        // Load the about component
        template: "<about></about>"
      })
      .when("/home", {
        // Load the home component
        template: "<home></home>"
      })
      .when("/about", {
        // Load the about component
        template: "<about></about>"
      })
      .when("/login", {
        // Load the login component
        template: "<login></login>"
      })


      .when("/orders", {
        // Load the orders component
        template: "<orders></orders>"
      })
      .when("/shipments-list", {
        // Load the shipments component
        template: "<shipments-list></shipments-list>"
      })
      .when("/dispatches", {
        // Load the dispatches component
        template: "<dispatches></dispatches>"
      })
      .when("/inbounds", {
        // Load the inbounds component
        template: "<inbounds></inbounds>"
      })
      .when("/outbounds", {
        // Load the outbounds component
        template: "<outbounds></outbounds>"
      })
      .when("/warehouses", {
        // Load the warehouses component
        template: "<warehouses></warehouses>"
      })
      .when("/analytics", {
        // Load the analytics component
        template: "<analytics></analytics>"
      })
      .when("/locations", {
        // Load the locations component
        template: "<locations></locations>"
      })
      .when("/carriers", {
        // Load the carriers component
        template: "<carriers></carriers>"
      })
      .when("/employees", {
        // Load the employees component
        template: "<employees></employees>"
      })
      .when("/equipment", {
        // Load the equipment component
        template: "<equipment></equipment>"
      })
      .when("/accountspay", {
        // Load the accountspay component
        template: "<accountspay></accountspay>"
      })
      .when("/accountsrec", {
        // Load the accountsrec component
        template: "<accountsrec></accountsrec>"
      })

    

      .otherwise( {
        // Otherwise, go home component
        redirectTo: "/home"
      })
}]);