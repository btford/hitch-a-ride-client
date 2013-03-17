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
      .when('/trips', {
        templateUrl: 'views/trips.html',
        controller: 'TripsCtrl'
      })
      .when('/trip/:tripName', {
        templateUrl: 'views/trip.html',
        controller: 'TripCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
