'use strict';

/* Directives - are used to create custom html tags */

var cameraDirectives = angular.module('cameraDirectives', []);

cameraDirectives.directive('test', function(){
	return {
		restrict: 'AE',
		replace: 'true',
		template: '<h3>Hello World!!</h3>'
	};
});

cameraDirectives.directive('properties', function(){
	return {
		restrict: 'AE',
		replace: 'true',
		template: '<h3>Hello World!!</h3>'
	};
});