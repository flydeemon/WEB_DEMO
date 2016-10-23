/**
 * Created by Windows on 2016-10-20.
 */
$(function() {
    $('#myCarousel').carousel({
        //自动4秒播放
        interval: 4000,
    });
    $('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
    $(window).resize(function() {
        var height = $('.carousel-inner img').eq(0).height() ||
            $('.carousel-inner img').eq(1).height() ||
            $('.carousel-inner img').eq(2).height();
        $('.carousel-control').css('line-height', height + 'px');
    });
});