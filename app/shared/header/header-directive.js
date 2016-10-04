angular.module('myApp.header-directive', [])
  .directive('lolHeader', function () {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: 'shared/header/header.html',
      controller: ['$scope', '$filter', function() {

      }]
    }
  });
