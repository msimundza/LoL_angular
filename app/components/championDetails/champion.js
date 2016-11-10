'use strict';

angular.module('myApp.champion', ['ngRoute'])
.controller('championCtrl', ['$scope', '$sce', '$routeParams', 'LoLChampionDetailsService', function($scope, $sce, $routeParams, LoLChampionDetailsService) {
	$scope.loading = true;
	$scope.collapsed = true;
	$scope.id = $routeParams.id;
	$scope.imageNum = 0;
	$scope.bla = '';

	$scope.setImageAndSkinName = function (num, skinName) {
		$scope.imageNum = num;
		// Show champ name instead of 'default' string
		if (skinName != 'default') {
			return $scope.championDetails.skinName = skinName;
		}
		$scope.championDetails.skinName = $scope.championDetails.defaultSkinName;
	};

	$scope.toggleLore = function (collapsed) {
		$scope.collapsed = !collapsed;
	}

	LoLChampionDetailsService.getChampionDetails($scope.id).success(function(resp) {
		$scope.championDetails = resp;
		$scope.championDetails.lore = $sce.trustAsHtml(resp.lore);
		$scope.championDetails.blurb = $sce.trustAsHtml(resp.blurb);
		$scope.championDetails.skinName = resp.name;
		$scope.championDetails.defaultSkinName = resp.name;
		console.log(resp);
	}).error(function(err) {
		if (err) console.log(err);
	}).finally(function() {
		$scope.loading = false;
	});
}]);
