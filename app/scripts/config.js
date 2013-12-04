/**
* Config factory for this app.
* 
* You must fill in your Client ID and User Id
*
**/
'use strict';

angular.module('almbApp')
   .factory('$almbConfig', function () {
      var configObj = {};
      configObj.scClientId = 'CLIENT ID';
      configObj.scApiUrl = 'http://api.soundcloud.com';
      configObj.scUserId = 'USER ID';
      return configObj;
    });
