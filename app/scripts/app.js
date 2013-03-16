'use strict';

angular.module('hitchARideApp', ['hitchARideApp.MainCtrl'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/ride', {
        templateUrl: 'views/ride.html',
        controller: 'RideCtrl'
      })
      .when('/drive', {
        templateUrl: 'views/drive.html',
        controller: 'DriveCtrl'
      })
      .when('/wait', {
        templateUrl: 'views/wait.html',
        controller: 'WaitCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
