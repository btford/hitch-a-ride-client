'use strict';

angular.module('hitchARideApp')
  .filter('dasherize', function () {
    return function (input) {
      return input.toString().replace(/\s/g, '-');
    };
  });
