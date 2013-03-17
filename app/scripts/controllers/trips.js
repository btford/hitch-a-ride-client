'use strict';

angular.module('hitchARideApp')
  .controller('TripsCtrl', function ($scope, socket) {
    $scope.trips = [];

    socket.emit('get:trips', null, function (data) {
      $scope.trips = data;
    });

  });
