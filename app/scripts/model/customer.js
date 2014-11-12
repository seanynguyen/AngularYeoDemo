'use strict';

angular.module("angularYeoDemoApp").factory('Customer', ['$http', function($http) {
	function Customer(customerData) {
		if (customerData) {
			this.setData(customerData)
		}
	};
	
	Customer.prototype = {
		setData: function(customerData) {
			angular.extend(this, customerData);
		},
		load: function(id) {
			var scope = this;
			$http.get('http://localhost:8080/testWS/webresources/com.youngidea.testws.entities.customer/' + id).success(function(customerData){
				scope.setData(customerData)
			});
		}
	};

	return Customer;
}])