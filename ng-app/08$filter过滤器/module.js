/*
 * angular demo
 */
var myModule = angular.module('myModule', []);

/*
 * $filter是一个服务,它会返回一个用户指定的过滤器函数
 * 再执行这个函数
 */
myModule.run(['$rootScope', '$filter', function($rootScope, $filter){
	
	$rootScope.name = $filter('uppercase')('hello');
	/*
	 * 同时使用多个过滤器
	 * $rootScope.name = $filter('lowercase')($filter('uppercase')('hello'));
	 */
	$rootScope.test = 'world';
}]);

//自定义一个filter
myModule.filter('fristUpper', function(){
	//执行 {{name | fristUpper : 1 }} 时传入参数 name , 1
	return function(str, args){ 
		return str.charAt(0).toUpperCase() + str.substring(args);
	};
});