'use strict';

/**
 * @ngdoc function
 * @name routeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the routeApp
 */
angular.module('routeApp').
controller('homeCtrl' , function ($rootScope, $scope, $http) {
    this.title = "This is the homepage";
    this.accessToken = "aa2a64dcb3b3da94a38003863fabcbbb44b10e70-5abbf73c06fd7a0b03a07bfd1cbe71a9a1a7102e";

        $scope.getEntries = function () {
			$http({
				
			  method: 'GET',
			 	url: 'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records',
		   	  headers: 
		         	{ 
		        	  "Authorization": "Bearer aa2a64dcb3b3da94a38003863fabcbbb44b10e70-5abbf73c06fd7a0b03a07bfd1cbe71a9a1a7102e"
		        	}

			}).then(function successCallback(response) {
			   console.log(response);
			   $scope.entries = response.data;
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  })
			}

		$scope.getEntry = function(id) {
        $http({
		   method: 'GET',
		   url:"https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + id,
		   headers: 
		         { 
		           "Authorization": "Bearer aa2a64dcb3b3da94a38003863fabcbbb44b10e70-5abbf73c06fd7a0b03a07bfd1cbe71a9a1a7102e"
		         }

			}).then(function successCallback(response) {
			   console.log(response);
			   $scope.sampleFunction(response) ;

			   
			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			  })
			}


});






		   //method: 'POST',
			//	   url:"https://alpha-dataflownode.zerionsoftware.com/code_assignment/register",
				//   headers: 
				  //       { 
				    //       "content-type": "application/json" 
				   //      },
				  // data: { 
				   //        'firstName': "henry", 
				   //        "lastName": "barnacle", 
				     //      "username": "henry barnacle"
				       //  }
