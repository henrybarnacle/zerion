'use strict';

const accessToken = "aa2a64dcb3b3da94a38003863fabcbbb44b10e70-5abbf73c06fd7a0b03a07bfd1cbe71a9a1a7102e";


angular.module('routeApp').
controller('homeCtrl', function($rootScope, $scope, $http) {
    this.title = "This is the homepage";

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});
    // GET ALL ENTRIES FOR MAIN PAGE ///

    $scope.getEntries = function() {
        $http({

            method: 'GET',
            url: 'https://alpha-dataflownode.zerionsoftware.com/code_assignment/records',
            headers: {
                "Authorization": "Bearer " + accessToken,
            }

        }).then(function successCallback(response) {
            console.log(response);
            $scope.entries = response.data;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        })
    }

    /// GET SINGLE ENTRY ON CLICK AND SHOW IN FORM FOR EDITING / DELETE ///

    $scope.getEntry = function(id) {
        $http({
            method: 'GET',
            url: "https://alpha-dataflownode.zerionsoftware.com/code_assignment/records/" + id,
            headers: {
                "Authorization": "Bearer " + accessToken
            }

        }).then(function successCallback(response) {
            console.log(response);
            $scope.sampleFunction(response);


        }, function errorCallback(response) {

        })
    }

});




