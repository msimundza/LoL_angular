'use strict';

angular.module('myApp.championsList', ['ngRoute'])
.controller('championsListCtrl', ['$scope', 'LoLChampionsListService', function($scope, LoLChampionsListService) {
	$scope.championList = [];
	LoLChampionsListService.getChampions().success(function(resp) {
		$scope.version = resp.version;
		// we can hardcode this because it won't change EVER
  		$scope.roles = ['Fighter', 'Assassin', 'Mage', 'Tank', 'Marksman', 'Support'];

  		$scope.rolesObj = {
  			fighter: false,
  			assassin: false,
  			mage: false,
  			tank: false,
  			marksman: false,
  			support: false,
  		}

  		// $scope.roles = [
  		//  { name: 'Fighter', fighter: false },
  		//  { name: 'Assassin', assassin: false },
  		//  { name: 'Mage', mage: false },
  		//  { name: 'Tank', tank: false },
  		//  { name: 'Marksman', marksman: false},
  		//  { name: 'Support', support: false }
  		// ];

		// each object element pushed to array so filter search would work without extra mumbojumbo / refactor, optimize this
		angular.forEach(resp.data, function(element) {
		  $scope.championList.push(element);
		});
	}).error(function(err) {
		if (err) console.log(err);

	});
}])
.filter('rolesFilter', function() {
	return function() {}
});
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