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
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('main', {
      url: '/main',
      templateUrl: 'templates/main.html'
    })

    .state('scheduleCategories', {
      url: '/scheduleCategories',
      templateUrl: 'templates/schedule-categories.html'
    })

    .state('scheduleSelection', {
      url: '/scheduleSelection/:category',
      templateUrl: 'templates/schedule-selection.html',
      controller: 'ScheduleSelection'
    });

    $urlRouterProvider.otherwise('/main');
});
