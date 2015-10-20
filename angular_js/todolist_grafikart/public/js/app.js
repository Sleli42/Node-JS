var app = angular.module('Todo', []);

function TodoCtrl($scope, filterFilter, $http) {
	$scope.todos = [];
	$scope.placeholder = "Chargement...";

	$http.get("todo.php").success(function(data) {
		$scope.todos = data;
		$scope.placeholder = "Nouvelle Tâche";
	})

	$scope.$watch('todos', function() {
		$scope.remaining = filterFilter($scope.todos,
			{completed:false}).length;
		$scope.allCheck = !$scope.remaining;
	}, true)

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
}
