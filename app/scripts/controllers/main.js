'use strict';

angular.module('hitchARideApp')
  .controller('MainCtrl', function ($scope, socket) {

    $scope.notificationCount = 0;
    $scope.notifications = [];

    /*
    socket.emit('get:notifications', function (data) {
      $scope.notifications = data;
    });
    */

    $scope.$on('update:notifications', function (data) {
      $scope.notificationCount += 1;
      $scope.notifications = arguments[1];
    });

    $scope.$on('clear:notifications', function () {
      $scope.notifications = 0;
    });

    $scope.$on('login', function () {
      $scope.login = arguments[1];
    });

  });
