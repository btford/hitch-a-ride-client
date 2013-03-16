'use strict';

angular.module('hitchARideApp')
  .controller('RideCtrl', function ($scope, socket, $location) {

    $scope.from = 'Joplin, MO';
    $scope.to = 'Oklahoma City, OK';

    $scope.submit = function () {
      socket.emit('send:rider:trip', {
        to: $scope.to,
        from: $scope.from
      }, function () {
        $location.path('wait');
      });
    };
  });
