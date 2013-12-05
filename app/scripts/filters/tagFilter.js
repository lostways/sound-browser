'use strict';
/*jshint camelcase: false */
angular.module('almbApp')
  .filter('tagFilter', function () {
    return function (input) {
      return input;
    };
  });
