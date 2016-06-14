/*
 * interpolate插值计算
 */
var myModule = angular.module('myModule', []);


myModule.controller('myCtrl', ['$scope', '$interpolate', function($scope, $interpolate) {

	$scope.$watch('body', function(newValue){
		if(newValue){
			var temp = $interpolate(newValue);
			$scope.showText = temp({name:$scope.name});
		}
	});

}]);