/**
 * Created by Windows on 2016-10-19.
 */
$(function(){
    $('.box .btn').hover(function(){
        var a = $(this).attr('data');
        $('.tip em').text(a);
        var pos = $(this).position().left + 10; // 链接按钮的left
        console.log(pos);
        //需要缩进的宽度
        var dis = ($('.tip').outerWidth() - $(this).outerWidth()) / 2;
        var center = pos - dis;
        $('.tip').css({left: center + 'px'}).animate({opacity: 1, top:180 + 'px'},300);
    },function () {
        $('.tip').animate({opacity: 0, top:100 + 'px'},300);
    });
});