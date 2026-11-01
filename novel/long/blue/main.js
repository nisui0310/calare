/* ===================================================================
   blue/assets/js/main.js
   ・画面ローダー表示制御
   ・記事折りたたみ（Read More）
   ・ページトップへ戻るボタン
   ・スムーズスクロール
   =================================================================== */

// 1. ページローダーの非表示処理（非同期読み込み対応）
(function($) {
    function hideLoader() {
        $('.loader-inner').fadeOut();
        $('.page-loader').delay(350).fadeOut('slow');
    }

    // すでにページ読み込みが完了している場合は即座に非表示
    if (document.readyState === 'complete') {
        hideLoader();
    } else {
        $(window).on('load', hideLoader);
    }
})(jQuery);

// 2. 記事の折りたたみ・展開処理（.show_more）
$(function() {
    $(".show_more").click(function() {
        var show_text = $(this).parent("article").find(".text");
        var small_height = 70; // 折りたたみ時の表示高さ (px) — お好みで変更可能

        var original_height = show_text.css({ height: "auto" }).height();

        if (show_text.hasClass("open")) {
            /* 閉じる時のアニメーション */
            show_text.height(original_height).animate({ height: small_height }, 300);
            show_text.removeClass("open");
            $(this).text("+　read more").removeClass("active");
        } else {
            /* 開く時のアニメーション */
            show_text
                .height(small_height)
                .animate({ height: original_height }, 300, function() {
                    show_text.height("auto");
                });
            show_text.addClass("open");
            $(this).text("-　close").addClass("active");
            $("body").addClass("active-body");
        }
    });
});

// 3. ページトップへ戻るボタン (#page-top)
$(function() {
    var topBtn = $('#page-top');
    topBtn.hide();

    // 300px以上スクロールされたらボタンを表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });

    // クリック時にページ最上部へ滑らかに移動
    topBtn.click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

// 4. ページ内アンカーリンクのスムーズスクロール
$(function() {
    $('a[href^="#"]').click(function() {
        var speed = 800; // スクロール速度 (ミリ秒)
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;

        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});