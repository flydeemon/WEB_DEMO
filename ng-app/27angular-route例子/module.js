/*
 * 路由
 */

var m1 = angular.module('myModule',['ngRoute']);

m1.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/a1',{
		template: '<p>{{name}}</p>',
		controller : 'Ctrl1'		//使用Ctrl1控制器来处理
	}).when('/a2',{
		template: '<p>{{name}}</p>',
		controller : 'Ctrl2'
	}).when('/a3',{
		template: '<p>{{name}}</p>',
		controller : 'Ctrl3'
	}).otherwise({
		redirectTo : '/a1'
	});
}]);


m1.controller('Ctrl1', ['$scope', '$location', function($scope, $location) {
	$scope.name = 'angular';
	$scope.$location = $location;
	//console.log($location.path());
}]);
m1.controller('Ctrl2', ['$scope', function($scope) {
	$scope.name = 'java';
}]);
m1.controller('Ctrl3', ['$scope', function($scope) {
	$scope.name = 'php';
}]);