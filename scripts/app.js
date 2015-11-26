angular.module("todoListApp", [])

	.controller('mainCtrl', function($scope, dataService) {
		$scope.addTodo = function() {
			var todo = {name: "This is a new todo."};
			$scope.todos.push(todo);
		};

		$scope.helloWorld = dataService.helloConsole;

		dataService.getTodos(function(response) {
			console.log(response.data);
			return response.data;
		});

		$scope.deleteTodo = function(todo) {
			dataService.deleteTodo(todo);
		};

		$scope.saveTodo = function(todo) {
			dataService.saveTodo(todo);
		}
	})

	})
	.service('dataService', function($http) {
		this.helloWorld = function() {
			console.log("This is data service's method!");
		};

		this.getTodos = function() {
			$http.get('mock/todos.json')
			.then(callback)
		};

		this.deleteTodo = function(todo, $index) {
			console.log("The" + todo.name + " todo has been deleted!")
			$scope.todos.splice($index, 1);
		};

		this.saveTodos = function(todo) {
			console.log("The" + todo.name + " todo has been saved!");
			// other logic
		};

	});