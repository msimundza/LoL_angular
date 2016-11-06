'use strict';

angular
  .module('myApp', [ 'ui.bootstrap',
    'ngRoute',
    'myApp.championsList',
    'myApp.championsList.services',
    'myApp.champion',
    'myApp.champion.services',
    'myApp.version',
    'myApp.footer-directive',
    'myApp.header-directive'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('/champions', { templateUrl: 'components/championsList/championsList.html', controller: 'championsListCtrl'})
    	.when('/champions/:id', { templateUrl: 'components/championDetails/champion.html', controller: 'championCtrl'})
    	.otherwise({redirectTo: '/champions'});
}]);