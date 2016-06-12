'use strict';
var mapApp = angular.module('mapApp', ['ngRoute',  'controllers']);

var controllers = angular.module('controllers', []);

// mapApp.config(
//     ['$routeProvider', '$locationProvider', function ($routeProvide, $locationProvide) {
//         $routeProvider
//             .when("/", {
//                 controller: 'MainCtrl',
//                 templateUrl: "main.html"
//             })
//             .otherwise("/");
//     }]
// );