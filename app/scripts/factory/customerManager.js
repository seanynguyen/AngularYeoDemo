angular.module("angularYeoDemoApp").factory('customerManager', ['$http', '$q', "Customer", function($http, $q, Customer) {
	var customerManager = {
		_pool: {},
		_retrieveInstance: function(customerId, customerData) {
			var instance = this._pool[customerId];

			if (instance) {
				instance.setData(customerData);
			} else {
				instance = new Customer(customerId);
				this._pool[customerId] = instance;
			}
			return instance;
		},
		_search: function(customerId) {
			return this._pool[customerId];
		},
		_load: function(customerId, deferred) {
			var scope = this;

			$http.get('http://localhost:8080/testWS/webresources/com.youngidea.testws.entities.customer/' + 1) 
				.success(function(customerData) {
					var customer = scope._retrieveInstance(customerData.id, customerData);
					deferred.resolve(customer);
				})
				.error(function() {
					deferred.reject();
				}); 
		},
		getCustomer: function(customerId) {
			var deferred = $q.defer();
			var customer = this._search(customerId);
			if (customer) {
				deferred.resolve(customer);
			} else {
				this._load(customerId, deferred);
			}
			return deferred.promise;
		},
		loadAllCustomers: function() {
			var deferred = $q.defer();
			var scope = this;
			$http.get('http://localhost:8080/testWS/webresources/com.youngidea.testws.entities.customer/')
				.success(function(customersArray) {
					var customers = [];
					customersArray.forEach(function(customerData) {
						var customer = scope._retrieveInstance(customer.id, customerData);
						customers.push(customer);
					});
					deferred.resolve(customer);
				})
				.error(function() {
					defered.reject();
				});
			return deferred.promise		
		},
		setCustomer: function(customerData) {
			var scope = this;
			var customer = this._search(customerData.id);
			if (customer) {
				customer.setData(customerData)
			} else {
				customer = scope._retrieveInstance(customerData);
			}
			return customer;
		},
	};
	return customerManager;
}]);