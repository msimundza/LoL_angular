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
  // since I'm using object inside a constant it can be modified, but just don't
  // .constant('roles', {
  //   FIGHTER: 'Fighter',
  //   ASSASSIN: 'Assassin',
  //   MAGE: 'Mage',
  //   TANK: 'Tank',
  //   MARKSMAN: 'Marksman',
  //   SUPPORT: 'Support',
  // })
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('/champions', { templateUrl: 'components/championsList/championsList.html', controller: 'championsListCtrl'})
    	.when('/champions/:id', { templateUrl: 'components/championDetails/champion.html', controller: 'championCtrl'})
    	.otherwise({redirectTo: '/champions'});
}]);