'use strict';

/*global gapi:false*/

angular.module('hitchARideApp')
  .directive('gplus', function ($rootScope, login) {

    var clientId = '848717340266.apps.googleusercontent.com';
    var scope = 'https://www.googleapis.com/auth/userinfo.profile';

    return {
      template: '<span></span>',
      replace: true,
      restrict: 'E',
      link: function postLink(s, element, attrs) {

        // use Google API
        gapi.signin.render(element[0], {
          callback: function (r) {
            if (!r.error) {
              login.fetchUser(r);
              element.remove();
            }
          },
          'clientid': clientId,
          'cookiepolicy': 'single_host_origin',
          'requestvisibleactions': 'http://schemas.google.com/AddActivity',
          'scope': scope
        });
      }
    };
  });
