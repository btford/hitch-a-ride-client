'use strict';

angular.module('hitchARideApp')
  .controller('DriveCtrl', function ($scope, socket, $location, geolocation, $http) {

    $scope.trip = {
      from : 'Chicago, IL',
      to: 'Los Angeles, CA'
    };

    $scope.submit = function () {
      socket.emit('send:driver:trip', $scope.trip, function () {
        $location.path('trip/drive/from/' + $scope.trip.from + '/to/' + $scope.trip.to);
      });
    };

    $scope.geo = function () {
      geolocation.getCurrentPosition(function (data) {
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' +
          data.coords.latitude +
          ',' +
          data.coords.longitude +
          '&sensor=true';

        $http.jsonp(url).success(function (data) {
          console.log(data);
        });
      });
    };

  });
