'use strict';

angular.module('hitchARideApp')
  .controller('DriveCtrl', function ($scope, socket, $location, geolocation, $http) {

    var now = new Date();

    $scope.trip = {
      from : 'Chicago, IL',
      to: 'Los Angeles, CA',
      earliest: {
        date: (now.getMonth()+1) + '/' + (now.getDate()) + '/' + now.getUTCFullYear(),
        time: (now.getHours() + 1) + ':00'
      },
      latest: {
        date: (now.getMonth()+1) + '/' + (now.getDate()) + '/' + now.getUTCFullYear(),
        time: (now.getHours() + 2) + ':00'
      }
    };

    $scope.submit = function () {
      socket.emit('send:driver:trip', $scope.trip, function () {
        $location.path('/trips');
      });
    };

    $scope.geo = function () {
      geolocation.getCurrentPosition(function (data) {
        socket.emit('reverse:geocode', {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude
        },
        function (data) {
          $scope.trip.from = data;
        });
      });
    };

  });
