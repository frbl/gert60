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

    $scope.result = false;


    var validNCoordinate = '52 59.584';
    var validECoordinate = '006 33.838';

    $scope.checkCoordinates = function() {
      var res = $scope.nCoordinate === validNCoordinate && $scope.eCoordinate === validECoordinate;
      $scope.correctResult = res;

      $scope.result=true;
    };
  });
