/*
 * 事件
 */

var m1 = angular.module('myModule',['ngAnimate']);

m1.controller('myCtrl', ['$scope', function($scope) {
	$scope.flag = true;
}]);