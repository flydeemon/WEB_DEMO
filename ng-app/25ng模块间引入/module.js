/*
 * 模块间的通信
 */

var m1 = angular.module('m1',[]);



m1.provider('myService', function() {

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

//模块的引入
var m2 = angular.module('myModule', ['m1']);

m2.controller('myCtrl', ['$scope', 'myService', function($scope, myService) {

	console.log(myService.show());
	
}]);