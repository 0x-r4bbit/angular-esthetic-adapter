angular.module('pascalprecht.esthetic', ['ng']);
/**
 * @ngdoc directive
 * @name pascalprecht.esthetic.directive:esthetic
 * @restrict A
 *
 * @description
 * Brings esthetic functionality to angular world.
 *
 */
angular.module('pascalprecht.esthetic').directive('esthetic', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    scope: true,
    link: function (scope, element, attrs) {

      var esthetic;

      $timeout(function () {
        element.esthetic();
        esthetic = element.data('esthetic');
      }

      attrs.$observe('ngModel', function (value) {
        if (value) {
          $timeout(function () {
            esthetic.update();
          });
        }
      });
    }
  };
}]);
