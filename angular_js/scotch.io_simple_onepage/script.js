// create the module and name it scotchApp
	// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

scotchApp.config(function($routeProvider, $locationProvider}) {
	$routeProvider
		// route for the homepage
		.when('/', {
			templateUrl : '/pages/home.html',
			controller : mainController
		})
		// route for the about page
		.when('/about', {
			templateUrl : '/pages/about.html',
			controller : aboutController
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : '/pages/contact.html',
			controller : contactController
		});
		.otherwise({
			redirectTo : '/'
		});
	$locationProvider.html5Mode(true);
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
	// create a message to display in our view
	$scope.message = "Hi all, i'm a boss !";
});

scotchApp.controller('aboutController', function($scope) {
	$scope.message = 'About Page !';
});

scotchApp.controller('contactController', function($scope) {
	$scope.message = 'Contact Page !';
});
