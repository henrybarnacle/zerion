'use strict';


 angular.module('routeApp').controller('EditCtrl', function($rootScope, $scope, $http) {

 	
 	$rootScope.sampleFunction = function( response ){
 		console.log(response);
 			   $scope.name = response.data.name;
			   $scope.description = response.data.description;
			   $scope.image = response.data.imgs.image;
 	}

 });