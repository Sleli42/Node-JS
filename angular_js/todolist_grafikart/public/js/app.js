var app = angular.module('Todo', []);

app.directive('ngBlur', function() {
	return function(scope, elem, attrs) {
		elem.bind('blur', function() {
			scope.$apply(attrs.ngBlur);
		})
	}
})

app.controller('TodoCtrl', function TodoCtrl($scope, filterFilter, $http, $location) {
	$scope.todos = [];
	$scope.placeholder = "Chargement...";
	$scope.statusFilter = {};

	$http.get('php/todo.php').success(function(data) {
		$scope.todos = data;
		$scope.placeholder = "Nouvelle Tâche";
	})
						   .error(function(data) {
		console.log('Error, failed load');
	})

	$scope.$watch('todos', function() {
		$scope.remaining = filterFilter($scope.todos,
			{completed:false}).length;
		$scope.allCheck = !$scope.remaining;
	}, true)

	if ($location.path() == '') {$location.path('/')}
	$scope.location = $location;
	$scope.$watch('location.path()', function(path) {
		$scope.statusFilter =
			(path == '/Active') ? {completed : false} :
			(path == '/Done') ? {completed : true} :
			null;
	})

	$scope.removeTodo = function(index) {
		$scope.todos.splice(index, 1);
	}

	$scope.addTodo = function() {
		$scope.todos.push({
			name : $scope.newTodo,
			completed : false
		});
		$scope.newTodo = '';
	}

	$scope.editTodo = function(todo) {
		todo.editing = false;
	}

	$scope.checkAllTodo = function(allCheck) {
		$scope.todos.forEach(function(todo) {
			todo.completed = allCheck;
		})
	}
})
