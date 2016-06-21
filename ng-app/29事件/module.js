/*
 * 事件
 */

var m1 = angular.module('myModule',[]);

/*
 * targetScopt 传播的范围
 * currentScopt 当前的范围
 * name 名字
 * stopPropagation 停止传播
 */
m1.controller('myCtrl', ['$scope', function($scope) {
	$scope.count = 0;
	$scope.$on('myCount', function(event){
		$scope.count++;
		console.log(event.targetScope == event.currentScope);
		console.log(event.name);
		event.stopPropagation();
	});
}]);