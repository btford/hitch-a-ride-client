'use strict';

angular.module('hitchARideApp', ['btford.socket-io'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/new-trip.html'
      })
      .when('/ride', {
        templateUrl: 'views/ride.html',
        controller: 'RideCtrl'
      })
      .when('/drive', {
        templateUrl: 'views/drive.html',
        controller: 'DriveCtrl'
      })
      .when('/trips/:id', {
        templateUrl: 'views/trip.html',
        controller: 'TripCtrl'
      })
      .when('/trips', {
        templateUrl: 'views/trips.html',
        controller: 'TripsCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })
  .run(function (socket, login) {
    socket.broadcast('trip:matched');
  });
