/* Template & Designed by Orihashi Ren */
/* http://kerry.php.xdomain.jp/ */

/* main.jsは必ず最後に読み込んでください */

// page loader
$(document).ready( function() {
  $('.page-loader').delay(300).fadeOut();
  $('.circle').delay(350).fadeOut('slow');
}); 

// nav fixed
var wpPos = jQuery( 'nav' ).offset().top; // navのトップ
var wpHeight = jQuery( 'nav' ).outerHeight(); // navの高さ
jQuery( window ).on( 'scroll', function() {
    if ( jQuery( this ).scrollTop() > wpPos ) {
        jQuery( 'nav' ).addClass( 'm_fixed' );
    } else {
        jQuery( 'nav' ).removeClass( 'm_fixed' );
    }
});

// pagetop button
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// smooth scroll
$(function(){
    $('.s-scroll').click(function() {
        var speed = 500;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({scrollTop:position}, speed, "swing");
        return false;
    });
});
