/**
 * Created by Windows on 2016-10-25.
 */
$(function () {
    'use strict'
    var sidebar = $('#sidebar'),
        mask    = $('.mask'),
        backButton = $('.back-to-top'),
        sidebar_trigger = $('#sidebar_trigger');

    sidebar_trigger.on('click', function(){
        mask.fadeIn();
        sidebar.animate({'right': 0});
    });
    mask.on('click', function(){
        mask.fadeOut();
        sidebar.animate({'right': -(sidebar.width())});
    });

    backButton.on('click', function(){
       $('html, body').animate({scrollTop: 0}, 800);
    });

    $(window).on('scroll', function(){
       if($(window).scrollTop() > $(window).height())
           backButton.fadeIn();
        else
            backButton.fadeOut();
    });
    $(window).trigger('scroll');
});