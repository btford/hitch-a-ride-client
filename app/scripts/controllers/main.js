'use strict';

angular.module('hitchARideApp')
  .controller('MainCtrl', function ($scope, socket) {

    $scope.notificationCount = 0;
    $scope.notifications = [];

    var lastNot = 0;

    /*
    socket.emit('get:notifications', function (data) {
      $scope.notifications = data;
    });
    */

    $scope.$on('update:notifications', function (data) {
      $scope.notificationCount += arguments[1].length - lastNot;
      lastNot = arguments[1].length;
      $scope.notifications = arguments[1];
    });

    $scope.$on('clear:notifications', function () {
      $scope.notificationCount = 0;
    });

    $scope.$on('login', function () {
      $scope.login = arguments[1];
    });

  });
