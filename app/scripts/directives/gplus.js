'use strict';

angular.module('hitchARideApp')
  .directive('gplus', function () {

    return {
      template: '<span></span>',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        gapi.signin.render(element[0], {
          callback: function () {
            console.log(arguments);
          },
          'clientid': '848717340266.apps.googleusercontent.com',
          'cookiepolicy': 'single_host_origin',
          'requestvisibleactions': 'http://schemas.google.com/AddActivity'
        });
      }
    };
  });
