'use strict';

/* Filters- this is a place to create custom filters*/

angular.module('cameraFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
