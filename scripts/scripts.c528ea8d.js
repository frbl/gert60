"use strict";angular.module("gert60App",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("gert60App").controller("MainCtrl",["$scope",function(a){a.nCoordinate="",a.eCoordinate="",a.result="";var b="53.1234",c="006.1234";a.checkCoordinates=function(){var d=a.nCoordinate===b&&a.eCoordinate===c;d=d?"Valid!":"Invalid!",a.result=d}}]),angular.module("gert60App").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("gert60App").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="container"> <h1>Coördinaten</h1> <form role="form" ng-submit="checkCoordinates()"> <div class="row"> <div class="col-md-6"> <div class="form-group"> <div class="input-group"> <span class="input-group-addon" id="n-coordinate">N</span> <input type="text" class="form-control" ng-model="nCoordinate" placeholder="53.000" aria-describedby="n-coordinate"> </div> </div> <div class="form-group"> <div class="input-group"> <span class="input-group-addon" id="e-coordinate">E</span> <input type="text" class="form-control" ng-model="eCoordinate" placeholder="006.000" aria-describedby="e-coordinate"> </div> </div> <button type="submit" class="btn btn-lg btn-success"><span class="glyphicon glyphicon-ok"> </span> Controleer</button> </div> </div> </form> <span ng-model="result"></span> </div>')}]);