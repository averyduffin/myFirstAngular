
'use strict';

/* Controllers */

var cameraControllers = angular.module('cameraControllers', []);

/*
 * Controller that contains the scope and variables to be displayed
 * on the Camera List page
 */
cameraControllers.controller('CameraListCtrl', ['$scope', '$window', 'popupService', 'Camera',
  function($scope, $window, popupService,  Camera) {    
	 $scope.cameras = Camera.query();
	 $scope.collapse = function(ev){
		 //This function handles all the collapsing and extending of each camera
		 console.log(ev)
		 var element = ev.srcElement.nextElementSibling.nextElementSibling.nextElementSibling;
		 $(element).toggle();
		 if(ev.srcElement.firstChild.className == "glyphicon glyphicon-chevron-down"){
			 $(ev.srcElement.firstChild).replaceWith("<span class=\"glyphicon glyphicon-chevron-up\"></span>")
		 }
		 else{
			 $(ev.srcElement.firstChild).replaceWith("<span class=\"glyphicon glyphicon-chevron-down\"></span>")
		 }
	 };
	 
	 $scope.deleteCamera = function(camera) { // Delete a Camera. Issues a DELETE to /api/camera/:id
		    if (popupService.showPopup('Really delete this?')) {
		    	Camera.$delete(function() {
		        $window.location.href = ''; //redirect to home
		      });
		    }
		  };
  }]);

cameraControllers.controller('CameraCreateCtrl', ['$scope', '$location', 'Camera', 
   function($scope, $location, Camera){
		$scope.camera = new Camera();
		$scope.camera.properties = [{'name':'', "value": ""}]
		
		$scope.addNewProperty = function() {
			  var newItemNo = $scope.camera.properties+1;
			  $scope.camera.properties.push({'name':'', "value": ""});
			};
		
		$scope.addCamera = function(){
			console.log($scope.camera);
			$location.path("/");
		};
		
		$scope.removeProperty = function(property) {
			  var index = 0;
			  for(index in $scope.camera.properties){
				  if($scope.camera.properties[index].name == property.name && $scope.camera.properties[index].value == property.value ){
					  break;
				  }
			  }
			  if(index > -1){
				  $scope.camera.properties.splice(index, 1)
			  }
		  }
}]);

cameraControllers.controller('CameraEditCtrl',['$scope', '$location', '$routeParams', 'Camera', 
     function($scope, $location, $routeParams, Camera){
		
		  $scope.updateCamera = function() { //Update the edited Camera. Issues a PUT to /api/camera/:id
			console.log($scope.camera.name);
			console.log($scope.camera.model);
			console.log($scope.camera.toolName);
			console.log($scope.camera.url);
			$location.path("/");// on success go back to home
		    $scope.camera.$update(function() {
		    	
		    });
		  };
		  
		  $scope.loadCamera = function() { //Issues a GET request to /api/camera/:id to get a camera to update
			  console.log("This has to be updated still " + $routeParams.name)
			  $scope.camera = Camera.get({ name: $routeParams.name });
			  
			  $scope.camera = new Camera();
			  $scope.camera.name = "TEST"
			  $scope.camera.model = "model#"
			  $scope.camera.toolName = "fake tool"
			  $scope.camera.url = "fake url"
				  
			  $scope.camera.properties = [
			                              {
			                                  "name": "imagerotation",
			                                  "value": "180"
			                                },
			                                {
			                                  "name": "camera",
			                                  "value": "1"
			                                },
			                                {
			                                  "name": "resolution",
			                                  "value": "1280x720"
			                                },
			                                {
			                                  "name": "fps",
			                                  "value": "20"
			                                },
			                                {
			                                  "name": "compression",
			                                  "value": "50"
			                                }
			                              ]
		  };
		  $scope.loadCamera(); // Load a camera which can be edited on UI
		  
		  $scope.addNewProperty = function() {
			  var newItemNo = $scope.camera.properties+1;
			  $scope.camera.properties.push({'name':'', "value": ""});
			};
			
		  $scope.removeProperty = function(property) {
			  var index = 0;
			  for(index in $scope.camera.properties){
				  if($scope.camera.properties[index].name == property.name && $scope.camera.properties[index].value == property.value ){
					  break;
				  }
			  }
			  if(index > -1){
				  $scope.camera.properties.splice(index, 1)
			  }
		  }
                                              	
  }]);

/*
 * Controller to display the properties of the Camera
 */
cameraControllers.controller('CameraHelpCtrl', ['$scope',
   function($scope) {
     $scope.cameraId = "";
   }]);

