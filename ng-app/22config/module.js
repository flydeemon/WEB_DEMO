/*
 * config 配置对象
 * provider
 * $interpolate
 * >startSymbol()
 * >endSymbol()
 * $log
 * >debugEnabled()
 * $anchorScroll
 * >disableAutoScrolling()
 */
var myModule = angular.module('myModule', []);

myModule.config(['$interpolateProvider', function($interpolateProvider){
	
	$interpolateProvider.startSymbol('@@');
	$interpolateProvider.endSymbol('@@');
	
}]);

myModule.controller('myCtrl', ['$scope', function($scope) {

	$scope.name = 'hello';
	
}]);