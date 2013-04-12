'use strict';

angular.module('hitchARideApp')
  .directive('navBarTop', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        'title': '@'
      },
      template:
        '<div class="navbar navbar-fixed-top">' +
          '<div class="navbar-inner">' +
            '<div class="container">' +
              '<a class="brand" href>{{title}}</a>' +
              '<ul class="nav" ng-transclude></ul>' +
            '</div>' +
          '</div>' +
        '</div>',
      replace: true
    };
  })
  .directive('navLocation', function ($location) {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        'href': '@'
      },
      link: function (scope, elt, attrs) {
        var target = '/' + attrs.href;
        if (target === '/./') {
          target = '/';
        }
        scope.active = function () {
          return target === $location.path();
        };
      },
      template:
        '<li ng-class="{active: active()}">' +
          '<a href="{{href}}" ng-transclude></a>' +
        '</li>',
      replace: true
    };
  })
  .directive('routeActive', function ($location) {
    return {
      restrict: 'A',
      scope: true,
      link: function (scope, elt, attrs) {
        var target;
        if (attrs.href) {
          target = attrs.href;
        } else {
          target = elt.find('a').attr('href');
        }
        if (target.substr(0, 1) === '.') {
          target = target.substr(1);
        }
        if (target.substr(0, 1) !== '/') {
          target = '/' + target;
        }

        scope.$on('$routeChangeSuccess', function () {
          if (target === $location.path()) {
            elt.addClass('active');
          } else {
            elt.removeClass('active');
          }
        });
      }
    };
  });
