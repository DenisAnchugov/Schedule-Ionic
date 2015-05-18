'use strict';
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services']).constant('ApiEndpoint', {
  url: 'http://localhost:8100/api/'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      window.StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $ionicConfigProvider.backButton.text('').previousTitleText(false);

  $stateProvider
    .state('scheduleCategories', {
      url: '/',
      templateUrl: 'templates/schedule-categories.html'
    })

    .state('scheduleSelection', {
      url: '/scheduleSelection/:category',
      templateUrl: 'templates/schedule-selection.html',
      controller: 'ScheduleSelection'
    })

    .state('schedulePresentation', {
      url: '/schedulePresentation/{requestedSchedule}',
      templateUrl: 'templates/schedule-presentation.html',
      controller: 'SchedulePresentation'
    })

    .state('weekSelection', {
      url: '/weekSelection',
      templateUrl: 'templates/week-selection.html',
      controller: 'WeekSelection'
    });

    $urlRouterProvider.otherwise('/');
});
