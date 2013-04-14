'use strict';

angular.module('hitchARideApp')
  .controller('DriveCtrl', function ($scope, socket, $location, geolocation, $http) {

    $scope.trip = {
      from : 'Chicago, IL',
      to: 'Los Angeles, CA'
    };

    $scope.submit = function () {
      socket.emit('send:driver:trip', $scope.trip, function () {
        $location.path('trip/drive/from/' + $scope.trip.from + '/to/' + $scope.trip.to);
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
