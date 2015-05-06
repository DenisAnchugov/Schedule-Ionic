'use strict';
angular.module('starter.controllers', [])

.controller('ScheduleSelection', function($scope, $stateParams, CategoryItems) {
  CategoryItems.get($stateParams.category).then(function(items){
    $scope.categoryItems = items;
    $scope.categoryName = $stateParams.category;
  });
});
