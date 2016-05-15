/*
 * angular demo
 */
var myModule = angular.module('myModule', []);

/*
 * run()可以初始化全局变量，view没有控制器的情况下也能输出变量
 * $scope是局部作用域，以下run()中注入$scope是没有效果的
 * 所以要注入$rootScope全局作用域
 */
myModule.run(['$rootScope', '$filter', function($rootScope, $filter){
	$rootScope.name = '全局变量';
}]);
