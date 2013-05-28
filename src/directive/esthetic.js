angular.module('pascalprecht.esthetic')
/**
 * @ngdoc directive
 * @name pascalprecht.esthetic.directive:esthetic
 * @restrict A
 *
 * @description
 * Brings esthetic functionality to angular world.
 *
 */
.directive('esthetic', function () {

  return {
    restrict: 'A',
    require: '?ngModel',
    link: function (scope, element, attrs, ngModel) {

    }
  };
});
