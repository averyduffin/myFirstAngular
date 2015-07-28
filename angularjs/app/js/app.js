'use strict';

/* App Module
 * Containst the routes and lists the dependancies for the app
 *  */

var cameraApp = angular.module('cameraApp', [
  'ngRoute',
  'cameraControllers',
  'cameraFilters',
  'cameraServices',
  'cameraDirectives'
]);

cameraApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/', {
		templateUrl: 'partials/camera-list.html',
		controller: 'CameraListCtrl'
	  }).
	  when('/new', {
		  templateUrl: 'partials/camera-add.html',
		  controller: 'CameraCreateCtrl'
	  }).
	  when('/edit/:name', {
		  templateUrl: 'partials/camera-edit.html',
		  controller: 'CameraEditCtrl'
	  }).
	  when('/help', {
		  templateUrl: 'partials/camera-detail.html',
		  controller: 'CameraHelpCtrl'
	  }).
	  otherwise({
		  redirectTo: '/'
	  });

  }]);
