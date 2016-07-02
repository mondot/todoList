'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');
    var todosDone    = localStorageService.get('todosDone');

    $scope.todos     = todosInStore || [];
    $scope.todosDone = todosDone || [];

    $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.$watch('todosDone', function () {
      localStorageService.set('todosDone', $scope.todosDone);
    }, true);

    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
		};

		$scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };

    $scope.todoDone = function (index) {
    	var todoDone = $scope.todos[index];

    	$scope.todos.splice(index, 1);
    	$scope.todosDone.push(todoDone);
    }
  });
