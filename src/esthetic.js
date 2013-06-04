angular.module('pascalprecht.esthetic-adapter', ['ng']);
/**
 * @ngdoc directive
 * @name pascalprecht.esthetic-adapter.directive:esthetic
 * @requires $timeout
 * @restrict A
 *
 * @description
 * Brings esthetic functionality to angular world. The directive is restricted as
 * attribute. It is also possible to pass options by using the esthetic-options
 * attribute.
 *
 * @param {string=} estethic Options to pass into esthetic plugin as string as object literal.
 *
 * @example
   <example module="ngView">
    <file name="index.html">
      <div ng-controller="EstheticCtrl">
        <select
          ng-model="selected"
          ng-options="value.id as value.label for (key, value) in options"
          esthetic="{btnClass: 'foo', itemClass: 'bar'}"
          >
        </select>
      </div>
    </file>
    <file name="script.js">
      angular.module('ngView', ['pascalprecht.esthetic-adapter'])

      .controller('EstheticCtrl', function ($scope) {
        $scope.selected = 2;
        $scope.options = [
          { id: 1, label: 'foo' },
          { id: 2, label: 'bar' }
        ];
      });
    </file>
   </example>
 */
angular.module('pascalprecht.esthetic-adapter').directive('esthetic', ['$timeout', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {

      var esthetic,
          options = scope.$eval(attrs['esthetic']);

      $timeout(function () {
        element.esthetic(options);
        esthetic = element.data('esthetic');
      });

      scope.$watch(attrs['ngModel'], function (value) {
        if (value) {
          $timeout(function () {
            esthetic.update();
          });
        }
      });
    }
  };
}]);
