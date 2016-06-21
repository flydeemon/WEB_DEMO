/*
 * $q:promise服务
 * defer()
 * resolve()
 * reject()
 * notify()
 * then()
 */
var myModule = angular.module('myModule', []);


myModule.controller('myCtrl', ['$scope', '$q', function($scope, $q) {

	var svr = $q.defer();
	
	function show(){
		setTimeout(function(){
			svr.resolve();
			//失败
			//svr.reject();
		},2000);
		return svr.promise;
	}
	
	show().then(function(){alert('true');}, function(){alert('false');});
}]);