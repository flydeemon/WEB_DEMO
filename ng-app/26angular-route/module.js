/*
 * 路由
 */

var m1 = angular.module('myModule',['ngRoute']);

m1.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/a1',{
		template: '<p>111111</p>'
	}).when('/a2',{
		template: '<p>222222</p>'
	}).when('/a3',{
		template: '<p>333333</p>'
	});
}]);

m1.controller('myCtrl', ['$scope', function($scope) {
	
}]);