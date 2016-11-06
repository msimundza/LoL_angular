angular.module('myApp.header-directive', [])
  .directive('lolHeader', function () {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: 'shared/header/header.html',
      controller: ['$scope', '$filter', '$location', function($scope, $filter, $location) {
      	$scope.isPath = function(path) {
		    return path === $location.path();
		};

		$scope.$on('$locationChangeSuccess', function() {
		   $scope.nameFilter.name = '';
		});
      }]
    }
  });
