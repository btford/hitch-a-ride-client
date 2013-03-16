'use strict';

angular.module('hitchARideApp')
  .controller('WaitCtrl', function ($scope, socket) {
    $scope.matched = false;
    socket.on('trip:matched', function () {
      $scope.matched = true;
    });
  });
