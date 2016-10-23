/*
 * 事件
 */

var m1 = angular.module('myModule',['ngRoute', 'ngResource']);

m1.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('aaa/:num', {
		//template: ''
	}).otherwise({
		redirectTo: 'aaa';
	});
}]);

m1.controller('myCtrl', ['$scope', '$location', '$resource', function($scope, $location, $resource) {
	
	$scope.$location = $location;
	
}]);