'use strict';

angular.module("angularYeoDemoApp")
	.controller('CustomerController', ['$scope', 'customerManager', function($scope, customerManager) {
		//$scope.Customer = new Customer();
		//$scope.Customer.load(1);	
		customerManager.getCustomer(1).then(function(customer) {
			$scope.Customer = customer;
		});
	}]);