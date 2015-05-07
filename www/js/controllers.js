'use strict';
angular.module('starter.controllers', [])

.controller('ScheduleSelection', function($scope, $stateParams, ApiAccess) {
  ApiAccess.get($stateParams.category).then(function(items){
    $scope.categoryItems = items.data;
    $scope.categoryName = $stateParams.category;
  });
})

.controller('SchedulePresentation', function($scope, $stateParams, ApiAccess) {
  ApiAccess.get('schedule/' + $stateParams.requestedSchedule).then(function(weekSchedule){
    $scope.weekSchedule = weekSchedule.data;
    $scope.commas = function commas(items) {
      var formattedRoomsString = [];
      angular.forEach(items, function(value, key){
      formattedRoomsString.push(value.name);
      });
      return formattedRoomsString.join(', ');
    };
  });
});
