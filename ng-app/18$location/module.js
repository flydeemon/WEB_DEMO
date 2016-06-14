/*
 * 实现描点跳转的例子
 */
var myModule = angular.module('myModule', []);

myModule.controller('myCtrl', ['$scope', '$location','$anchorScroll', function($scope, $location, $anchorScroll) {
	//当前网址
	//console.log($location.absUrl());
	/*
		设置一个路径，与路由一起使用
		默认会使用历史管理，加上replace()会取消历史管理
	*/
	//console.log($location.path('aaa/bbb/ccc')).replace();

	$scope.change = function(id){
		$location.hash(id);
		$anchorScroll();
	};
	
}]);