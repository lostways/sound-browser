'use strict';

angular.module('almbApp')
  .filter('capitalize', function () {
    return function (input) {
      return input[0].toUpperCase() + input.slice(1, input.length);
    };
  });
