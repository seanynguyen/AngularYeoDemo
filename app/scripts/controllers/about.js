'use strict';

/**
 * @ngdoc function
 * @name angularYeoDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularYeoDemoApp
 */
angular.module('angularYeoDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
