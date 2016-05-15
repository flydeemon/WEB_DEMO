/*
 * angular demo
 */
var myModule = angular.module('myModule', []);

//$apply申请刷新view
myModule.controller('myCtrl', ['$scope', function($scope){
	$scope.name = 'hello';
	setTimeout(function(){
		$scope.$apply(function(){
			$scope.name = 'hi, apply!';
		});
	},1000);
}]);
