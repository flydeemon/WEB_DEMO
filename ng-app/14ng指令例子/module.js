/*
 * angular demo
 */

var myModule = angular.module('myModule', []);

myModule.directive('mytab', function () {
    return {
        restrict: 'E', //可以组合使用
        replace : true, //可以用模板替换标签

        scope: {
            myId  : '@',
            myData: '=',
        },

        controller: ['$scope', function ($scope) {
            $scope.name = 'hello';
        }],

        /**
         *  配合JQuery在link下进行DOM操作
         *  link (scope, element, attr, [reController])
         */
        link: function (scope, element, attr) {
            element.delegate('input', 'click', function () {
                $(this).attr('class', 'active').siblings('input').attr('class', '');
                $(this).siblings('div').css('display', 'none');
                $(this).siblings('div').eq($(this).index()).css('display', 'block');
            });
        },

        templateUrl: 'tmp2.html'
    };
});

myModule.controller('myCtrl', function ($scope) {
    $scope.data1 = [{
        title  : '语文',
        content: '100'
    }, {
        title  : '英语',
        content: '80'
    }, {
        title  : '数学',
        content: '90'
    }];

    $scope.data2 = [{
        title  : '化学',
        content: '110'
    }, {
        title  : '物理',
        content: '100'
    }];

});