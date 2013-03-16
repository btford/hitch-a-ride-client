'use strict';

angular.module('hitchARideApp.MainCtrl', ['btford.socket-io'])
  .controller('MainCtrl', function ($scope, socket) {
    socket.on('send:name', function (data) {
      $scope.name = data.name;
    });
    socket.on('send:time', function (data) {
      $scope.time = data.time;
    });
  });
