'use strict';

/* Services */

var cameraServices = angular.module('cameraServices', ['ngResource']);

/*
 * This services is used to get the RESTful web service
 * Should be called within the controller
 */
cameraServices.factory('Camera', ['$resource',
  function($resource){
    return $resource('json/:cameraId.json', {}, {
      query: {method:'GET', params:{cameraId:'cctv_config'}, isArray:true},
      update: {method: 'PUT'}
    });
  }]);

cameraServices.service('popupService', ['$window', function($window){
	this.showPopup=function(message){
        return $window.confirm(message);
    }
}]);