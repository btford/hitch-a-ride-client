'use strict';

/*global gapi:false*/

angular.module('hitchARideApp')
  .factory('login', function ($rootScope, $timeout, $location, $http) {
    var user,
      token,
      dest = '/';

    var fetchUser = function (r) {
      if (r.error) {
        return;
      }
      token = r.access_token || gapi.auth.getToken().access_token;
      gapi.client.request({
        path: '/oauth2/v1/userinfo?alt=json&access_token=' + token,
        callback: function (res) {
          $timeout(function () {
            user = res;

            if ($location.path() === '/login') {
              $location.path(dest);
            }

            $rootScope.$broadcast('login', res);
          }, 0);
        }
      });
    };

    $rootScope.$on('$routeChangeStart', function () {
      if (!user && $location.path() !== '/login') {
        dest = $location.path();

        // prevent infinite loop
        if (dest === '/login') {
          dest = '/';
        }
        $location.path('/login');
      }
    });

    //fetchUser();

    return {
      getUser: function () {
        return user;
      },
      fetchUser: fetchUser,
      logout: function () {
        $http.jsonp('https://accounts.google.com/o/oauth2/revoke?token=' + token).
          success(function () {
            $location.path('/login');
            dest = '/';
            $rootScope.$broadcast('login', null);
            user = null;
          });
      }
    };
  });
