/*
 * provider自定义服务
 * 规范: 不要使用$,注入时放在最后。
 * 与factory的区别：provider更为强大，provider定义的服务可以用config初始化参数，factory则不行。
 */
var myModule = angular.module('myModule', []);

myModule.provider('myService', function() {

	return {
		$get: function() {
			return {
				name: 'hello',
				show: function() {
					return this.name + 'angular!';
				}
			};
		}
	};
	
});

myModule.config(['myServiceProvider', function(myServiceProvider){
	myServiceProvider.name = 'java';
	console.log(myServiceProvider.name);
}])

myModule.controller('myCtrl', ['$scope', 'myService', function($scope, myService) {

	console.log(myService.show());
	
}]);