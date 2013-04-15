/*
 * angular-phonegap-ready v0.0.1
 * (c) 2013 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.phonegap.ready', []).
  factory('phonegapReady', function ($rootScope) {

    // cheap "polyfill"
    if (!window.cordova) {
      return function (fn) {
        return fn;
      };
    }

    return function (fn) {
      var queue = [];

      var impl = function () {
        queue.push(Array.prototype.slice.call(arguments));
      };

      document.addEventListener('deviceready', function () {
        queue.forEach(function (args) {
          fn.apply(this, args);
        });
        impl = fn;
      }, false);

      return function () {
        return impl.apply(this, arguments);
      };
    };
  });
