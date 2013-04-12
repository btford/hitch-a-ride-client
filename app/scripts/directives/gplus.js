'use strict';

/*global gapi:false*/

angular.module('hitchARideApp')
  .directive('gplus', function ($rootScope, login) {

    return {
      template: '<span></span>',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        gapi.signin.render(element[0], {
          callback: function (r) {
            if (!r.error) {
              login.fetchUser(r);
              element.remove();
            }
          },
          'clientid': '848717340266.apps.googleusercontent.com',
          'cookiepolicy': 'single_host_origin',
          'requestvisibleactions': 'http://schemas.google.com/AddActivity',
          'scope': 'https://www.googleapis.com/auth/userinfo.profile'
        });
      }
    };
  });
