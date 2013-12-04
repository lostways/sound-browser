'use strict';

angular.module('almbApp')
  .controller('MainCtrl', function ($scope, $almbConfig, $resource) {
    $scope.config = $almbConfig;

    /***Sound Cloud Resource***/
    var scResource = $resource($almbConfig.scApiUrl + '/users/:userid/tracks.json', {
      userid: $almbConfig.scUserId,
      client_id: $almbConfig.scClientId
    });
    
    $scope.tracks = scResource.query();
      
  });
