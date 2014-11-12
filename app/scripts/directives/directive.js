'use strict';

/**
 * @ngdoc directive
 * @name angularYeoDemoApp.directive:directive
 * @description
 * # directive
 */
angular.module('angularYeoDemoApp')
  .directive('directive', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the directive directive');
      }
    };
  });
