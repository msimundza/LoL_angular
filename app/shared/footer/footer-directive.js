angular.module('myApp.footer-directive', [])
  .directive('lolFooter', function () {
  return {
      restrict: 'E',
      replace: true,
      templateUrl: 'shared/footer/footer.html',
      controller: ['$scope', '$filter', function() {

      }]
    }
  });
