app.config(function($routeProvider){
	$routeProvider.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'MainController'
	})
	.when('/about', {
		templateUrl: 'pages/about.html',
		controller: 'AboutController'
	})
	.when('/movie/:id', {
		templateUrl: 'pages/movie.html',
		controller: 'MovieController'
	})
});