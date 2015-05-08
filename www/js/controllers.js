'use strict';
angular.module('starter.controllers', [])

.controller('ScheduleSelection', function($scope, $stateParams, ApiAccess) {
  ApiAccess.get($stateParams.category).then(function(items){
    $scope.categoryItems = items.data;
    $scope.categoryName = $stateParams.category;
  });
})

.controller('SchedulePresentation', function($scope, $stateParams, ApiAccess) {
  $scope.requestTimetable = function(appendix){
    ApiAccess.get('schedule/' + $stateParams.requestedSchedule + appendix).then(function(weekSchedule){setTimetable(weekSchedule);});
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
});
