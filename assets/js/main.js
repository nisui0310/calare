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





// ダッシュの自動処理：連続するダッシュを <span class="dash"> で包む
document.addEventListener('DOMContentLoaded', function () {
    var re = /[─―—]{2,}/;
    var skip = { SCRIPT: 1, STYLE: 1, TEXTAREA: 1, CODE: 1, PRE: 1, NOSCRIPT: 1, RT: 1, RP: 1 };

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
            var p = n.parentNode;
            if (!p || skip[p.nodeName] || (p.classList && p.classList.contains('dash'))) {
                return NodeFilter.FILTER_REJECT;
            }
            return re.test(n.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
    });

    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(function (node) {
        var frag = document.createDocumentFragment();
        node.nodeValue.split(/([─―—]{2,})/).forEach(function (part, i) {
            if (i % 2) {
                var s = document.createElement('span');
                s.className = 'dash';
                s.textContent = part;
                frag.appendChild(s);
            } else if (part) {
                frag.appendChild(document.createTextNode(part));
            }
        });
        node.parentNode.replaceChild(frag, node);
    });
});