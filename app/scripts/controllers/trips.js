'use strict';

angular.module('hitchARideApp')
  .controller('TripsCtrl', function ($scope, socket) {

    $scope.trips = [];
    $scope.history = [];

    socket.emit('get:trips', null, function (data) {
      $scope.trips = data;
    });

    socket.emit('get:history', null, function (data) {
      $scope.history = data;
    });

    $scope.$on('trip:matched', function () {
      $scope.matched = true;
    });

    // clear alerts when this takes control
    $scope.$emit('clear:alerts');

  });
