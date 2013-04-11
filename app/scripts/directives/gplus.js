'use strict';

angular.module('hitchARideApp')
  .directive('gplus', function ($rootScope) {

    return {
      template: '<span></span>',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        gapi.signin.render(element[0], {
          callback: function (r) {
            gapi.client.request({
              path: '/oauth2/v1/userinfo?alt=json&access_token=' + r.access_token,
              callback: function (res) {
                $rootScope.$apply(function () {
                  $rootScope.$broadcast('login', res);
                });
              }
            });
          },
          'clientid': '848717340266.apps.googleusercontent.com',
          'cookiepolicy': 'single_host_origin',
          'requestvisibleactions': 'http://schemas.google.com/AddActivity',
          'scope': 'https://www.googleapis.com/auth/userinfo.profile'
        });
      }
    };
  });
