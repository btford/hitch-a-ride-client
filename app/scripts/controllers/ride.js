'use strict';

angular.module('hitchARideApp')
  .controller('RideCtrl', function ($scope, socket, $location) {

    $scope.trip = {
      from: 'Joplin, MO',
      to: 'Oklahoma City, OK'
    };

    $scope.submit = function () {
      socket.emit('send:rider:trip', $scope.trip, function () {
        $location.path('trips');
      });
    };
  });
