'use strict';
/*jshint camelcase: false */
angular.module('almbApp')
  .controller('TrackCtrl', function ($scope, $almbConfig, $routeParams, $resource, $sce) {
    var trackResource = $resource($almbConfig.scApiUrl + '/tracks/:trackid.json', {
      'client_id': $almbConfig.scClientId,
      'trackid': $routeParams.id
    });
    $scope.track = trackResource.get(function(data) {
      var embedResource = $resource($almbConfig.scApiUrl + '/oembed', {
        'url': data.permalink_url,
        'format': 'json',
        'iframe': true
      });
      $scope.embed = embedResource.get(function () {
        $scope.embedHtml = $sce.trustAsHtml($scope.embed.html);
      });
    });
  });
