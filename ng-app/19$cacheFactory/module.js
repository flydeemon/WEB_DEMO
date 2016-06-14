/*
 * 缓存cache
 */
var myModule = angular.module('myModule', []);

/*
 * capacity属性,限制缓存大小
 */
myModule.controller('myCtrl', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
	var cache = $cacheFactory('myCache', {capacity:2});
	cache.put('name', 'jack');
	cache.put('age', 11);
	cache.put('address', '127.0.0.1');
	//输出cache信息
	//console.log(cache.info());
	//获取cache数据
	//console.log(cache.get('name'));
	//删除一条缓存
	//cache.remove('name');
	
}]);