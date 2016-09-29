'use strict';

// riot api key RGAPI-F561B8E9-F25F-4203-B308-BA54A0AF36A4
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.championsList',
  'myApp.championsList.services',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/championsList'});
}]);
