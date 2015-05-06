'use strict';
angular.module('starter.services', [])

.factory('CategoryItems', function($http, ApiEndpoint){
  var getItems = function(category) {
    return $http.get(ApiEndpoint.url + category)
      .then(function(data) {
        return data.data;
    });
  };
  return{
    get: getItems
    };
});
