/*
 * angular demo
 */

var myModule = angular.module('myModule', []);

myModule.directive('myDrag', function () {
    return {
        restrict: 'A',

        link: function (scope, element, attr) {
            var disX = 0;
            var disY = 0;

            attr.myDrag = angular.equals(attr.myDrag, 'true');

            element.on('mousedown', function (ev) {
                if (attr.myDrag) {
                    var $line = $('<div>');
                    $line.css({
                        width   : $(this).outerWidth(),
                        height  : $(this).outerHeight(),
                        position: 'absolute',
                        left    : $(this).offset().left,
                        top     : $(this).offset().top,
                        border  : '1px gray dotted'
                    });
                    $('body').append($line);
                }

                var div = this;
                disX    = ev.pageX - $(this).offset().left;
                disY    = ev.pageY - $(this).offset().top;

                $(document).on('mousemove', function (ev) {
                    if(attr.myDrag){
                        $line.css('left',ev.pageX - disX);
                        $line.css('top',ev.pageY - disY);
                    }
                    else{
                        $(div).css('left',ev.pageX - disX);
                        $(div).css('top',ev.pageY - disY);
                    }
                });
                $(document).on('mouseup', function () {
                    $(document).off();
                    if(attr.myDrag){
                        $(div).css('left',$line.offset().left);
                        $(div).css('top',$line.offset().top);
                        $line.remove();
                    }
                });
                return false;
            });
        },

        //templateUrl: 'tmp2.html'
    };
});

myModule.controller('myCtrl', function ($scope) {

});