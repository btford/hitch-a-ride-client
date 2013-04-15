'use strict';

angular.module('hitchARideApp')
  .controller('ProfileCtrl', function ($scope, login, socket) {
    $scope.user = login.getUser();

    socket.emit('send:profile', {}, function (data) {
      console.log(data);
      $scope.profile = data;

    });

    $scope.logout = login.logout;
  });
