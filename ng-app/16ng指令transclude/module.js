/*
 * angular demo
 */

var myModule = angular.module('myModule', []);

/*
 * transclude 允许嵌套使用其他指令
 * require 请求其他指令的controller
 * ^ 从父级查询
 * ? 忽略报错
 */
myModule.directive('hello', function () {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        controller: function(){
        	this.name = 'who';
        },
        template: '<div>hello angularjs<hi></hi></div>'
    };
});

myModule.directive('hi', function () {
    return {
        restrict: 'E',
        replace: true,
        require: '^hello',
        link: function(scope, element, attr, reController){
        	console.log(reController.name);
        },
        template: '<span>hi angular</span>'
    };
});