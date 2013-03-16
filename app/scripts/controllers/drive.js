'use strict';

angular.module('hitchARideApp')
  .controller('DriveCtrl', function ($scope, socket, $location) {

    $scope.from = 'Chicago, IL';
    $scope.to = 'Los Angeles, CA';

    $scope.submit = function () {
      socket.emit('send:driver:trip', {
        to: $scope.to,
        from: $scope.from
      }, function () {
        $location.path('wait');
      });
    };
  });
