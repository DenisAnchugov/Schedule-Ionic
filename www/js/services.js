'use strict';
angular.module('starter.services', [])

.factory('ApiAccess', function($http, $ionicPopup,  ApiEndpoint){
  var getItems = function(requestAppendix) {
    return $http.get(ApiEndpoint.url + requestAppendix)
      .success(function(data) {
        return data;
    }).error(function(){
      $ionicPopup.alert({
        title: 'Error',
        template: 'Server unreachable.'
      });
    });
  };
  return{
    get: getItems
    };
});
