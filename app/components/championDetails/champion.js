'use strict';

angular.module('myApp.champion', ['ngRoute'])
.controller('championCtrl', ['$scope', '$routeParams', 'LoLChampionDetailsService', function($scope, $routeParams, LoLChampionDetailsService) {
	$scope.loading = true;
	$scope.id = $routeParams.id;
	$scope.championDetails = [];
	LoLChampionDetailsService.getChampionDetails($scope.id).success(function(resp) {
		$scope.championDetails = resp;
	}).error(function(err) {
		if (err) console.log(err);
	}).finally(function() {
		$scope.loading = false;
	});
}]);