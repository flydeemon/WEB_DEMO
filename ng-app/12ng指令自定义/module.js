/*
 * angular demo
 */

var myModule = angular.module('myModule', []);

/*myModule.controller('myCtlr', function($scope, $interval) {

});*/

/*
 * A: 属性 	attribute 	一般用于功能性操作
 * C: 类		class
 * E: 元素	element		一般用于模板替换
 * M: 注释	comment
 */
myModule.directive('hello', function(){
	return {
		restrict: 'ACEM',	//可以组合使用
		replace: true,		//可以用模板替换标签
		template: '<div>hello world!</div>'
	};
});