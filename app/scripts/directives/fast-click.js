'use strict';

angular.module('hitchARideApp')
  .directive('ngClick', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        new FastButton(element[0], function() {
          scope.$apply(attrs.ngClick);
        });
      }
    };
  })
  .directive('a', function ($location) {
    return {
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        new FastButton(element[0], function() {
          scope.$apply(function () {
            $location.path(attrs.href);
          });
        });
      }
    };
  });
