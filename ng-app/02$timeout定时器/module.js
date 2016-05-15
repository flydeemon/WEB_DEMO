/*
 * angular demo
 */
var myModule = angular.module('myModule', []);

//使用定时器
myModule.controller('timeCtrl', function($scope, $timeout) {
	$scope.name = '1秒';
	$timeout(function(){
		$scope.name = '2秒';
	},1000);
});
