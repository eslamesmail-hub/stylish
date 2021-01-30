/*global $, alert, console*/

$(document).ready(function () {

    'use strict';

    var scrollButton = $("#scroll-up");

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 400) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    scrollButton.click(function () {
        $("html,body").animate({ scrollTop : 0});

    });

    // tabs-switch
    $('.tab-switch li').click(function () {$(this).addClass('selected').siblings().removeClass('selected');

    // hide all tabs
    $('.tabs-section .tabs-content > div').hide();

    // show div connected with this link
    $($(this).data('class')).show(); });

    // page scroll link animate
    $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
  });

});
