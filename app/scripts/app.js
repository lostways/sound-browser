'use strict';

angular.module('almbApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/track/:id', {
        templateUrl: 'views/track.html',
        controller: 'TrackCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
