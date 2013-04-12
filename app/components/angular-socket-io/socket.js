/*
 * angular-socket-io v0.0.1
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.socket-io', []).
  factory('socket', function ($rootScope, $timeout) {
    var socket = io.connect();
    return {
      on: function (eventName, callback) {
        socket.on(eventName, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          if (callback) {
            var args = arguments;
            $timeout(function () {
              callback.apply(socket, args);
            }, 0);
          }
        });
      },
      removeListener: function (eventName, callback) {
        socket.removeListener(eventName, callback);
      },
      broadcast: function (eventName) {
        socket.on(eventName, function (data) {
          $rootScope.$apply(function () {
            $rootScope.$broadcast(eventName, data);
          });
        });
      }
    };
  }).
  factory('scopableSocket', function (socket) {
    return function (scope) {
      return {
        on: function (eventName, callback) {
          socket.on(eventName, callback);
          scope.$on('$destroy', function () {
            socket.removeListener(eventName, callback);
          });
        },
        broadcast: function (eventName) {
          var forward = function (data) {
            scope.$broadcast(eventName, data);
          };
          socket.on(eventName, forward);
          scope.$on('$destroy', function () {
            socket.removeListener(eventName, forward);
          });
        },
        removeListener: socket.removeListener,
        emit: socket.emit
      };
    };
  });
