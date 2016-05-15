/*
 * angular demo
 */
var myModule = angular.module('myModule', []);

//注入$scope方式1：
myModule.controller('rootCtrl', function($scope, $rootScope) {
	//首先调用$scope.name,没找到再调用$rootScope.name
	$scope.name = '从入门到放弃';
	$rootScope.name = '从入门到改行';
	console.log(name);
});

/*
 * 注入$scope方式2：
 * 优点：1.可以自定义形参；2.支持主流的js压缩工具
 */
myModule.controller('scopeCtrl', ['$scope', function(a) {
	a.name = '从入门到绝望';
	console.log(a.name);
}]);