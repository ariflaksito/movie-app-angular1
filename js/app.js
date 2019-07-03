var app = angular.module('FirstApp',['ngRoute']);

app.controller('HomeCtrl', function($scope, $location) {
  
  $scope.about = function(){
  	$location.path('about');
  }

  $scope.home = function(){
  	$location.path('/');
  }

  $scope.movie = function(id){
  	$location.path("/movie/"+id);
  }
});