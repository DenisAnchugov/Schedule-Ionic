'use strict';
angular.module('starter.controllers', [])

.controller('ScheduleSelection', function($scope, $stateParams, $ionicLoading, ApiAccess) {
  $ionicLoading.show();
  ApiAccess.get($stateParams.category).then(function(items){
    $scope.categoryItems = items.data;
    $scope.categoryName = $stateParams.category;
    $ionicLoading.hide();
  });
})

.controller('SchedulePresentation', function($scope, $stateParams, $ionicLoading, ApiAccess) {
  $scope.requestTimetable = function(appendix){
    $ionicLoading.show();
    ApiAccess.get('schedule/' + $stateParams.requestedSchedule + appendix)
    .then(function(weekSchedule){
      setTimetable(weekSchedule);
      $ionicLoading.hide();
    });
  };

  var setTimetable = function(weekSchedule){
    $scope.weekNumber = parseInt(weekSchedule.data.week);
    $scope.weekSchedule = weekSchedule.data;
  };

  $scope.getTimetableByWeekNumber = function(weekNumber){
    $scope.requestTimetable('?w=' + weekNumber);
  };

  $scope.requestTimetable('');

  $scope.toCommaSeparatedString = function(items) {
    var formattedRoomsString = [];
    angular.forEach(items, function(value, key){
    formattedRoomsString.push(value.name);
    });
    return formattedRoomsString.join(', ');
  };
})

.controller('WeekSelection', function($scope, $stateParams){
  
});
