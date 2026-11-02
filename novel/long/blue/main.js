/* Template & Designed by Orihashi Ren */
/* http://kerry.php.xdomain.jp/ */

/* main.jsは必ず最後に読み込んでください */

// page loader
(function(){
    $(window).on('load', function() {
        $('.loader-inner').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });
})(jQuery);

// article
$(function() {
    $(".show_more").click(function() {
        var show_text = $(this)
        .parent("article")
        .find(".text");
        var small_height = 70; //This is initial height.
        var original_height = show_text.css({ height: "auto" }).height();

        if (show_text.hasClass("open")) {
            /*CLOSE*/
            show_text.height(original_height).animate({ height: small_height }, 300);
            show_text.removeClass("open");
            $(this)
                .text("+　read more")
                .removeClass("active");
        } else {
            /*OPEN*/
            show_text
                .height(small_height)
                .animate({ height: original_height }, 300, function() {
                show_text.height("auto");
            });
            show_text.addClass("open");
            $(this)
                .text("-　close")
                .addClass("active");
            $("body").addClass("active-body");
        }
    });
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
$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 800;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});
