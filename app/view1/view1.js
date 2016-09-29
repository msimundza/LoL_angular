'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'LoLChampionDetailsService', function($scope, LoLChampionDetailsService) {
	$scope.championList = [];
	LoLChampionDetailsService.getChampions().success(function(resp) {
		$scope.version = resp.version;
		$scope.championList = resp.data;
	}).error(function(err) {
		if (err) console.log(err);

	});
}]);