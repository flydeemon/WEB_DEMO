/*
 * 模仿百度搜索
 */
var myModule = angular.module('myModule', []);

/*
 * $http 使用ajax服务
 * success(function(data, state, headers, config){});
 * 支持简写$http.get('data.php').success()
 */
myModule.controller('myCtrl', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

	var timer = null;
	$scope.datas = [];
	$scope.change = function(name){
		$timeout.cancel(timer);
		
		$timeout(function(){
			$http({
				method: 'JSONP',
				url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+name+'&cb=JSON_CALLBACK'
			}).success(function(data) {
				$scope.datas = data.s;
			}).error(function(data) {
				console.log(data);
			});
		}, 500);
	};

}]);