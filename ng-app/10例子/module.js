/*
 * angular demo
 */
var myApp = angular.module('myApp', []);

myApp.controller('myCtrl', ['$scope', '$filter', function($scope, $filter) {
	//原始数据
	var dataList = [{
		color: 'red',
		num: 20
	}, {
		color: 'blue',
		num: 45
	}, {
		color: 'black',
		num: 200
	}, {
		color: 'pick',
		num: 100
	}];

	//copy 数据
	$scope.datas = dataList;

	/*
	 * 通过传入参数进行排序,可以正反向排序
	 * 通过 !arguments.callee['fnSort' + arg] 获取到布尔值
	 */
	$scope.fnSort = function(arg) {
		arguments.callee['fnSort' + arg] = !arguments.callee['fnSort' + arg];
		$scope.datas = $filter('orderBy')($scope.datas, arg, arguments.callee['fnSort' + arg]);
	};
	
	//
	$scope.fnSearch = function(arg){
		$scope.datas = $filter('filter')(dataList, $scope.search);
	};
}]);