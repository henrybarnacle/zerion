'use strict';



angular.module('routeApp').controller('CreateCtrl', function($window, $rootScope, $scope, $http, $routeParams) {

						/// EDIT ENTRY ///
    $scope.submitForm = function() {
        if ($routeParams.id) {
            $http({
                method: 'PUT',
                url: 'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/' + $routeParams.id,
                headers: {
                    "Authorization": "Bearer " + accessToken,
                    "content-type": "application/json"
                },
                data: {

                    "name": $scope.name,
                    "description": $scope.description,
                    "imgs": [{
                        "url": $scope.image
                    }]

                }
            }).then(function successCallback(response) {
                console.log(response);
                $window.location.href = '/#/';
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            })
				/// CREATE NEW ENTRY ///
        } else {
            $http({
                method: 'POST',
                url: 'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records',
                headers: {
                    "Authorization": "Bearer " + accessToken,
                    "content-type": "application/json"
                },
                data: {

                    "name": $scope.name,
                    "description": $scope.description,
                    "imgs": [{
                        "url": $scope.image
                    }]

                }
            }).then(function successCallback(response) {
                console.log(response);
                $window.location.href = '/#/';
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            })

        }
    }

    $rootScope.sampleFunction = function(response) {
        console.log(response);
        $scope.name = response.data.name;
        $scope.description = response.data.description;
        $scope.image = response.data.imgs[0].url;
    }
    	/// DELETE ENTRY ///
    $scope.deleteEntry = function() {
        $http({

            method: 'DELETE',
            url: 'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/' + $routeParams.id,
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        }).then(function successCallback(response) {
            console.log(response);
            $window.location.href = '/#/';
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        })
    }
});