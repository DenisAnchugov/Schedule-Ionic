'use strict';
angular.module('starter.controllers', [])

.controller('ScheduleSelection', function($scope, $stateParams, ApiAccess) {
  ApiAccess.get($stateParams.category).then(function(items){
    $scope.categoryItems = items;
    $scope.categoryName = $stateParams.category;
  });
})

.controller('SchedulePresentation', function($scope, $stateParams, ApiAccess) {
  ApiAccess.get('schedule/' + $stateParams.requestedSchedule).then(function(weekSchedule){
    $scope.weekSchedule = weekSchedule;
  });
});
