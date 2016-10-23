
var m1 = angular.module('myModule',[]);

m1.controller('myCtrl', ['$scope', function($scope) {
	$scope.books = [
		{name: 'AngularJs'},
		{name: 'Java'},
		{name: 'PHP'}
	];
}]);

m1.directive('bookList', function(){
	return {
		restrict: 'EA',
		replace: true,
		
		template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>'
		
	};
});