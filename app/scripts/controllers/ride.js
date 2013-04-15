'use strict';

angular.module('hitchARideApp')
  .controller('RideCtrl', function ($scope, socket, $location, geolocation) {

    var now = new Date();

    $scope.trip = {
      from : 'Joplin, MO',
      to: 'Oklahoma City, OK',
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
      socket.emit('send:rider:trip', $scope.trip, function () {
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
