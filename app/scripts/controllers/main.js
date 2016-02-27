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
      var validN = validNCoordinate.split(' ').join('');
      var validE = validECoordinate.split(' ').join('');
      var res = ($scope.nCoordinate === validNCoordinate || $scope.nCoordinate === validN) &&
          ($scope.eCoordinate === validECoordinate || $scope.eCoordinate === validE);
      $scope.correctResult = res;

      $scope.result=true;
    };
  });
