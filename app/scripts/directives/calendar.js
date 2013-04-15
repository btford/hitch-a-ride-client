'use strict';

angular.module('hitchARideApp').
directive('calendar', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      element.datepicker({
        onSelect: function () {
          scope.$apply(function () {
            var date = element.datepicker('getDate');

            element.datepicker('setDate', element.val());
            scope.ngModel = date;

            element.blur();
          });
        }
      });
    }
  };
});
