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

	$scope.showDetails = function (event) {
			console.log(event);
			var clickedChampionY = event.clientY;
			var cont = $('.container');
			var lastChampionInRowX = cont.offset().left + cont.width()-120;
			var lastChampionInRow = document.elementFromPoint(lastChampionInRowX, clickedChampionY);
			console.log(clickedChampionY);
			console.log(lastChampionInRowX);
			console.log(lastChampionInRow);



	}
}]);
