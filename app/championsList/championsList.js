'use strict';

angular.module('myApp.championsList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/championsList', {
    templateUrl: 'championsList/championsList.html',
    controller: 'championsListCtrl'
  });
}])

.controller('championsListCtrl', ['$scope', 'LoLChampionDetailsService', function($scope, LoLChampionDetailsService) {
	$scope.championList = [];
	LoLChampionDetailsService.getChampions().success(function(resp) {
		$scope.version = resp.version;

		// each object element pushed to array so filter search would work without extra mumbojumbo / refactor, optimize this
		angular.forEach(resp.data, function(element) {
		  $scope.championList.push(element);
		});
	}).error(function(err) {
		if (err) console.log(err);

	});

	$scope.showDetails = function (event) {
		
	}
}]);
// calculations for dropdown under each champion icon
// TODO: if last row isnt full, wrong resulat when calculated
// console.log(event);
// var clickedChampionY = event.clientY;
// var cont = $('.container');
// var lastChampionInRowX = cont.offset().left + cont.width()-120;
// var lastChampionInRow = document.elementFromPoint(lastChampionInRowX, clickedChampionY);
// console.log(clickedChampionY);
// console.log(lastChampionInRowX);
// console.log(lastChampionInRow);