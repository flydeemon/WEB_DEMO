/*
 * 路由
 */

var m1 = angular.module('myModule',['ngRoute']);

m1.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/a1/:num',{
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

/*
 * $on路由事件
 * $routeChangeStart 当路由切换时
 * $routeChangeSuccess 当路由成功时
 * $routeChangeError 当路由错误时
 */
m1.run(['$rootScope', function($rootScope){
	$rootScope.$on('$routeChangeStart', function(event, current, pre){
		console.log(event);
		console.log(current);
		console.log(pre);
	});
}]);

m1.controller('Ctrl1', ['$scope', '$location', '$routeParams', function($scope, $location, $routeParams) {
	$scope.name = 'angular';
	$scope.$location = $location;
}]);
m1.controller('Ctrl2', ['$scope', function($scope) {
	$scope.name = 'java';
	
}]);
m1.controller('Ctrl3', ['$scope', function($scope) {
	$scope.name = 'php';
	
}]);