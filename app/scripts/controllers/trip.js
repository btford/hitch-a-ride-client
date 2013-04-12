'use strict';

angular.module('hitchARideApp')
  .controller('TripCtrl', function ($scope, socket, $routeParams, $location) {

    var getTripInfo = function () {
      socket.emit('get:trip:info', $routeParams, function (trip) {
        if (!trip) {
          $location.url('/');
          return;
        }

        $scope.trip = trip;

        if (trip.route) {
          $scope.waypoints = [{
            location: trip.route.legs[0].end_address
          }, {
            location: trip.route.legs[1].end_address
          }];
        }
      });
    };

    $scope.mapUrl = function () {
      if ($scope.trip && $scope.trip.route) {
        return 'https://maps.google.com/maps?saddr=' +
          $scope.trip.from +
          '&daddr=' +
            $scope.trip.route.legs.map(function (leg) {
              return leg.end_address;
            }).join(' to:');
      } else {
        return;
      }
    };

    getTripInfo();

    $scope.$on('trip:matched', function () {
      getTripInfo();
    });

  });
