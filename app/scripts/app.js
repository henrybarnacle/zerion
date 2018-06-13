'use strict';

/**
 * @ngdoc overview
 * @name routeApp
 * @description
 * # routeApp
 *
 * Main module of the application.
 */
angular
  .module('routeApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'homeCtrl',
        controllerAs: 'home'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'create'
      })
      .when('/create/:id/', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl',
        controllerAs: 'create'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
