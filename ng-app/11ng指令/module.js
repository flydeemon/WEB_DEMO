/*
 * angular demo
 */

var myModule = angular.module('myModule', []);

myModule.controller('myCtlr', function($scope, $interval) {
	var tmp = 5;	//倒计时
	$scope.value = tmp + '秒';	
	$scope.isable = true;		//默认禁用按钮
	
	var timer = $interval(function(){
		$scope.value = --tmp + '秒';
		if(tmp <= 0){
			$interval.cancel(timer);	
			$scope.isable = false;
			$scope.value = '注册';
		}
	}, 1000);
});