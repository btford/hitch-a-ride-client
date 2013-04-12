'use strict';

angular.module('hitchARideApp')
  .controller('ProfileCtrl', function ($scope, login) {
    $scope.user = login.getUser();

    $scope.logout = login.logout;
  });
