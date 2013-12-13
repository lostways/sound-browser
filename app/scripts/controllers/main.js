'use strict';

angular.module('almbApp')
  .controller('MainCtrl', function ($scope, $almbConfig, $resource) {

    /***Sound Cloud Resource***/
    var scResource = $resource($almbConfig.scApiUrl + '/users/:userid/tracks.json', {
      'userid': $almbConfig.scUserId,
      'client_id': $almbConfig.scClientId
    });
        
    /** Tag List **/
    var tagListResource = $resource('data/tag-list.json',{});
 
    $scope.config = $almbConfig;
    $scope.tags = tagListResource.query();
    $scope.tracks = scResource.query();
    $scope.sortedTracks = $scope.tracks;
 
    //configure tags to default
    $scope.activeTags = [];
    $scope.updateTagList = function (tag) {
      if ( typeof $scope.activeTags[tag] === 'undefined' || !$scope.activeTags[tag] ) {
        $scope.activeTags[tag] = true;
      } else {
        $scope.activeTags[tag] = false;
      }
      //update track list
/*jshint camelcase: false */
      var sortedTracksOutput = [];
      $scope.sortedTracks = [];
      for (var i in $scope.tracks) {
        var tagsToSearch = $scope.tracks[i].tag_list + ' ' + $scope.tracks[i].genre;
        //loop through active tags
        var trackMatchedAllTags = true;
        for (var activeTag in $scope.activeTags) {
          if ($scope.activeTags[activeTag] === true) {
            var re = new RegExp(activeTag,'i');
            if (tagsToSearch.search(re) === -1) {
              trackMatchedAllTags = false;
            }
          }
        }
        //if track matches all active tags
        if (trackMatchedAllTags === true) {
          sortedTracksOutput.push($scope.tracks[i]);
        }
      }
      $scope.sortedTracks = sortedTracksOutput;
    };
  });


