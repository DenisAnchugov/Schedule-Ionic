'use strict';
angular.module('starter.services', [])

.factory('ApiAccess', function($http, ApiEndpoint){
  var getItems = function(requestAppendix) {
    return $http.get(ApiEndpoint.url + requestAppendix)
      .then(function(data) {
        return data.data;
    });
  };
  return{
    get: getItems
    };
});
