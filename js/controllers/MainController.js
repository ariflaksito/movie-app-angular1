app.controller('MainController', ['$scope', 'MovieService', function($scope, MovieService){
	$scope.title = 'Playing Now';

	MovieService.index().success(function(data){
		$scope.movies = data.results;
		// console.log(data);
	});

}]);

app.service('MovieService', ['$http', function($http){
	this.index = function(){
		return $http.get('https://api.themoviedb.org/3/discover/movie?api_key=xyz');
	}
}]);