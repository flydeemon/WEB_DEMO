/*
 * factory自定义服务
 * 规范: 不要使用$,注入时放在最后。
 */
var myModule = angular.module('myModule', []);

myModule.factory('myService', function(){
	return {
		name: 'hello',
		show: function(){
			return this.name + 'angular!';
		}
	};
});

myModule.controller('myCtrl', ['$scope', 'myService', function($scope, myService) {

	console.log(myService.show());
	
}]);