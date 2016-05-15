/*
 * angular demo
 */

var myModule = angular.module('myModule', []);

myModule.controller('myCtlr', function($scope) {
	$scope.name = '萌萌';
	$scope.data = [
		{
			job: '战士',
			level: 15
		},
		{
			job: '法师',
			level: 16
		},
		{
			job: '游侠',
			level: 17
		}
	]
});