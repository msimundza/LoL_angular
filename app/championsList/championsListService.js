angular.module('myApp.championsList.services', []).
	factory('LoLChampionDetailsService', ['$http', function($http) {
		var LoLChampionDetails = {};

		LoLChampionDetails.getChampions = function() {
			return $http({
				method: 'GET',
				url: 'https://global.api.pvp.net/api/lol/static-data/eune/v1.2/champion?champData=image&api_key=RGAPI-F561B8E9-F25F-4203-B308-BA54A0AF36A4'
			});
		}

		return LoLChampionDetails;
	}]);