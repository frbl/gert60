'use strict';

/**
 * @ngdoc function
 * @name gert60App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gert60App
 */
angular.module('gert60App')
  .controller('MainCtrl', function($scope) {
    $scope.nCoordinate = '';
    $scope.eCoordinate = '';

    $scope.result = '';


    var validNCoordinate = '53.1234';
    var validECoordinate = '006.1234';

    $scope.checkCoordinates = function() {
      var res = $scope.nCoordinate === validNCoordinate && $scope.eCoordinate === validECoordinate;
      if (res) {
        res = 'Valid!';
      } else {
        res = 'Invalid!';
      }
      $scope.result = res;
    };
  });
