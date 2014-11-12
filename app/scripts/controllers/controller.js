'use strict';

/**
 * @ngdoc function
 * @name angularYeoDemoApp.controller:ControllerCtrl
 * @description
 * # ControllerCtrl
 * Controller of the angularYeoDemoApp
 */
angular.module('angularYeoDemoApp')
  .controller('ControllerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
