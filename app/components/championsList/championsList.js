'use strict';

angular.module('myApp.championsList', ['ngRoute'])
.controller('championsListCtrl', ['$scope', 'LoLChampionsListService', function($scope, LoLChampionsListService) {
	$scope.loading = true;
	$scope.championList = [];

	$scope.rolesObj = {
		Fighter: false,
		Assassin: false,
		Mage: false,
		Tank: false,
		Marksman: false,
		Support: false,
	};

	LoLChampionsListService.getChampions().success(function(resp) {
		$scope.version = resp.version;

		// each object element pushed to array so filter search would work without extra mumbojumbo / refactor, optimize this
		angular.forEach(resp.data, function(element) {
		  $scope.championList.push(element);
		});
	}).error(function(err) {
		if (err) console.log(err);
	}).finally(function() {
		$scope.loading = false;
	});
}])
.filter('rolesFilter', function() {
	return function(champions, rolesObj) {
		var filtered = [];

		function getChecked(obj) {
			var	checked = [];
			for(var key in obj) {
				if(obj[key]) checked.push(key);
			}
			return checked;
		}
		var checked = getChecked(rolesObj);

		angular.forEach(champions, function(champion){
			var count = 0,
				amount = checked.length,
				tag, check;
			for(var i = 0; i < champion.tags.length; i++) {
				tag = champion.tags[i];

				for (var j = 0; j < checked.length; j++) {
					check = checked[j];

					if (tag == check) {
						count++;
						break;
					}
				}
			}

			if (count === amount) {
				filtered.push(champion);
			}
		});

		return filtered;
	}
});
// calculations for dropdown under each champion icon
// TODO: if last row isnt full, wrong result when calculated
// console.log(event);
// var clickedChampionY = event.clientY;
// var cont = $('.container');
// var lastChampionInRowX = cont.offset().left + cont.width()-120;
// var lastChampionInRow = document.elementFromPoint(lastChampionInRowX, clickedChampionY);
// console.log(clickedChampionY);
// console.log(lastChampionInRowX);
// console.log(lastChampionInRow);
