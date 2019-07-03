app.controller('MovieController',['$scope', '$routeParams', 'MovieDetailService', 
	function($scope, $routeParams, MovieDetailService){

	MovieDetailService.index($routeParams.id).success(function(data){
		$scope.movie = data;
		console.log(data);
	});
	
}]);

app.service('MovieDetailService', ['$http', function($http){
	this.index = function(id){
		return $http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=xyz");
	}
}]);