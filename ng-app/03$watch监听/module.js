/*
 * angular demo
 */
var myModule = angular.module('myModule', []);

//
myModule.controller('iphone', function($scope) {
	$scope.iphone = {
		price: 50,
		number: 1,
		fre: 10
	};
	$scope.sum = function() {
		return $scope.iphone.price * $scope.iphone.number;
	};
	
	/*
	 * 当商品费用>=100的时候，商品运费为0
	 * 使用$watch(监听对象,处理函数([newVal,oldVal]),[是否深入监听整个对象])
	 */
	$scope.$watch($scope.sum, function(newVal, oldVal) {
		$scope.iphone.fre = newVal >= 100 ? 0 : oldVal;
	});
});