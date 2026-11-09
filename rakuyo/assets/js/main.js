/* =========================================================
   Rakuyo - main.js (共通処理 & 名前保存)
========================================================= */

// 1. ページローダー
(function($){
    $(window).on('load', function() {
        $('.loader-inner').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    });
})(jQuery);

// 2. 記事の開閉処理
$(function() {
    $(".show_more").click(function() {
        var show_text = $(this).parent("article").find(".text");
        var small_height = 70;
        var original_height = show_text.css({ height: "auto" }).height();

        if (show_text.hasClass("open")) {
            show_text.height(original_height).animate({ height: small_height }, 300);
            show_text.removeClass("open");
            $(this).text("+　read more").removeClass("active");
        } else {
            show_text.height(small_height).animate({ height: original_height }, 300, function() {
                show_text.height("auto");
            });
            show_text.addClass("open");
            $(this).text("-　close").addClass("active");
            $("body").addClass("active-body");
        }
    });
});

// 3. ページトップへ戻るボタン
$(function() {
    var topBtn = $('#page-top');
    if (!topBtn.length) return;

    topBtn.hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});

// 4. スムーススクロール
$(function() {
    $('a[href^="#"]').click(function() {
        var href = $(this).attr("href");
        if (!href || href === "#") return false;

        var target = $(href === "#all" ? 'html' : href);
        if (target.length) {
            var position = target.offset().top;
            $('body,html').animate({
                scrollTop: position
            }, 800, 'swing');
        }
        return false;
    });
});

// 5. 背景パララックス
$(function() {
    if ($('#scene').length && $.fn.parallax) {
        $('#scene').parallax({
            calibrateX: true,
            calibrateY: true,
            scalarX: 12,
            scalarY: 12,
            frictionX: 0.1,
            frictionY: 0.1,
            originX: 0.5,
            originY: 0.5
        });
    }
});

// 6. 名前保存処理（フォームが存在するページでのみ安全に実行）
document.addEventListener('DOMContentLoaded', function() {
    const nameForm = document.getElementById('name-form');
    if (nameForm) {
        nameForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const inputYour = document.getElementById('input-your');
            const inputName = document.getElementById('input-name');

            const your = inputYour ? inputYour.value.trim() : '';
            const name = inputName ? inputName.value.trim() : '';

            if (your || name) {
                localStorage.setItem('userYour', your);
                localStorage.setItem('userName', name);
                alert('名前を保存しました: ' + your + ' ' + name);
            }
        });
    }
});