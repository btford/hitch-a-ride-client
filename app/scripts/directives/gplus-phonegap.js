'use strict';

/*global gapi:false*/

angular.module('hitchARideApp')
  .directive('gplus', function ($rootScope, login, phonegapReady) {

    var clientId = '848717340266.apps.googleusercontent.com';
    var scope = 'https://www.googleapis.com/auth/userinfo.profile';

    return {
      template: '<span>Login</span>',
      replace: true,
      restrict: 'E',
      link: function postLink(s, element, attrs) {
        // make our own crazy hacky login thing
        var childAuth = phonegapReady(function () {
          window.plugins.childBrowser.showWebPage(
            'https://accounts.google.com/o/oauth2/auth?response_type=token&client_id=' +
            clientId +
            '&redirect_uri=http://localhost&scope=' +
            scope, {
              showLocationBar: false,
              showNavigationBar: false,
              showAddress: false
            });
          window.plugins.childBrowser.onLocationChange = function (data) {
            if (data.substr(0, 'http://localhost'.length) !== 'http://localhost') {
              return;
            }
            window.plugins.childBrowser.close();

            var tokenStart = data.indexOf('token=') + 6;
            var token = data.substr(tokenStart, data.indexOf('&', tokenStart) - tokenStart);

            login.fetchUser({
              access_token: token
            });
          };
        });
        childAuth();
        element.bind('click', childAuth);
      }
    };
  });
