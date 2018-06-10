'use strict';



 angular.module('routeApp').controller('AboutCtrl', function($scope, $http) {
      
        $scope.submitForm = function() {
        $http({
          method: 'POST',
          url     : 'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records',
   		  headers: 
         			{ 
          			 "Authorization": "Bearer aa2a64dcb3b3da94a38003863fabcbbb44b10e70-5abbf73c06fd7a0b03a07bfd1cbe71a9a1a7102e",
           			 "content-type": "application/json"
         			}, 
          data: {

                    "name": $scope.name, 
           			"description": $scope.description,
           			"imgs": [
           				{
           				"url": $scope.image
           				}
           			]
          
        		 }

			}).then(function successCallback(response) {
			   console.log(response);
			   
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  })
			}
});