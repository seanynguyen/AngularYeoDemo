'use strict';

/**
 * @ngdoc function
 * @name angularYeoDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularYeoDemoApp
 */
angular.module('angularYeoDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.name = "Sean"
  });
