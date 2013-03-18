'use strict';

angular.module('hitchARideApp')
  .controller('MainCtrl', function ($scope) {

    $scope.alerts = 0;

    $scope.$on('trip:matched', function () {
      $scope.alerts += 1;
    });

    $scope.$on('clear:alerts', function () {
      $scope.alerts = 0;
    });

  });
