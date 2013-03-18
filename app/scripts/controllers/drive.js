'use strict';

angular.module('hitchARideApp')
  .controller('DriveCtrl', function ($scope, socket, $location) {

    $scope.trip = {
      from : 'Chicago, IL',
      to: 'Los Angeles, CA'
    };

    $scope.submit = function () {
      socket.emit('send:driver:trip', $scope.trip, function () {
        $location.path('trip/drive/from/' + $scope.trip.from + '/to/' + $scope.trip.to);
      });
    };
  });
