'use strict';

/**
 * @ngdoc function
 * @name eBankApp.controller:AddrolesCtrl
 * @description
 * # AddrolesCtrl
 * Controller of the eBankApp
 */
angular.module('eBankApp')
    .controller('MainCtrl', function($scope, $http, NgTableParams) {

    	$scope.test = "test2141234erye4yreyerytry";

    	$scope.listanekoja = ["da", "ne"];




    	$scope.list = [
    		{ "name":"test1",
    		"partija":"5000",
    		"saldo":"12354646"

    		},
    		{ "name":"test2",
    		"partija":"50445400",
    		"saldo":"12353253254646"

    		}

    	]


    this.tableParams = new NgTableParams({
      // initial sort order
      sorting: { name: "asc" } ,
      count: 10,

    }, {
      dataset: $scope.list,
      counts: []
    });

    });