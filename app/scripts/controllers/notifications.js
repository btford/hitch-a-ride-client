'use strict';

angular.module('hitchARideApp')
  .controller('NotificationsCtrl', function ($scope, socket) {
    socket.emit('get:notifications');
    $scope.$emit('clear:notifications');
  });
