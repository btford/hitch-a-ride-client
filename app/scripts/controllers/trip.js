'use strict';

angular.module('hitchARideApp')
  .controller('TripCtrl', function ($scope, socket) {
    $scope.matched = false;
    socket.on('trip:matched', function () {
      $scope.matched = true;
    });
  });
