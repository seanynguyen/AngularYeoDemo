'use strict';

/**
 * @ngdoc filter
 * @name angularYeoDemoApp.filter:filter
 * @function
 * @description
 * # filter
 * Filter in the angularYeoDemoApp.
 */
angular.module('angularYeoDemoApp')
  .filter('filter', function () {
    return function (input) {
      return 'filter filter: ' + input;
    };
  });
