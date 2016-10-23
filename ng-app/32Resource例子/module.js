/*
 * 事件
 */

var m1 = angular.module('myModule',['ngResource']);

m1.controller('myCtrl', ['$scope', '$resource', function($scope, $resource) {
	
	var data = $resource('data.json');
	$scope.data = data.get();
}]);