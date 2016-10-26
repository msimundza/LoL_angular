'use strict';

angular.module('myApp.champion', ['ngRoute'])
.controller('championCtrl', ['$scope', '$sce', '$routeParams', 'LoLChampionDetailsService', function($scope, $sce, $routeParams, LoLChampionDetailsService) {
	$scope.loading = true;
	$scope.id = $routeParams.id;
	$scope.championDetails = [];
	LoLChampionDetailsService.getChampionDetails($scope.id).success(function(resp) {
		$scope.championDetails = resp;
		resp.lore = $sce.trustAsHtml(resp.lore);
	}).error(function(err) {
		if (err) console.log(err);
	}).finally(function() {
		$scope.loading = false;
	});
}]);
