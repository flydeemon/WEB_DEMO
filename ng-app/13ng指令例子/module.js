/*
 * angular demo
 */

var myModule = angular.module('myModule', []);



/*
 * A: 属性 	attribute 	一般用于功能性操作
 * C: 类		class
 * E: 元素	element		一般用于模板替换
 * M: 注释	comment
 */
/*
 * 绑定策略
 * @:自动增加ID
 * 以下都绑定到父级作用域
 * =：绑定数据
 * &：绑定函数
 */
myModule.directive('mytab', function() {
	return {
		restrict: 'E', //可以组合使用
		replace: true, //可以用模板替换标签
		
		/*scope: true, 	//独立作用域，不会被其他的标签所影响*/
		
		/*scope: {}, //隔离作用域，不会受到自身指令之外内的控制影响*/
		
		scope: {
			/*
			 * myId:'@' == myId:'@myId' 当名字相同时可以省略
			 * @myId == 标签中的 my-id 属性
			 */
			myId: '@',
			myName: '=',
			myFn: '&'
		},
		
		controller: ['$scope', function($scope) {
			$scope.name = 'please';
		}],
		
		templateUrl: 'tmp1.html'
	};
});

myModule.controller('myCtrl', function($scope) {
	$scope.name = 'hello';
	$scope.show = function(obj){
		alert(obj);
	};
});