/* R-18 パスワード認証（共通）
   作品ページの <head> でこのファイルを読み込むだけ。
   <script src="../../../assets/js/password.js"></script>
   別のパスワードを使う作品は data-group="syura" を足す（既定は main）。 */
(function () {
    // ★ パスワードはここだけ変更（グループを増やす場合は行を足す）
    var PASSWORDS = {
        main: "calare",
        // syura: "別のパスワード",
    };
    var LOGIN = "password.html", HOME = "main.html";

    var s = document.currentScript;
    var root = new URL("../../", s.src);               // assets/js/ の2つ上＝サイトルート
    var isLogin = document.documentElement.hasAttribute("data-r18-gate");
    var q = new URLSearchParams(location.search);
    var group = isLogin ? q.get("group") || "main" : s.getAttribute("data-group") || "main";
    var key = "ginevra_r18_" + group, pass = PASSWORDS[group];

    // 保存値＝パスワード自体。パスワードを変えると以前の認証は自動で無効になる
    function ok() { try { return pass !== undefined && localStorage.getItem(key) === pass; } catch (e) { return false; } }

    if (!isLogin) {                                     // ---- 作品ページ側
        var gate = function () {
            if (ok()) return;
            document.documentElement.style.visibility = "hidden";
            location.replace(new URL(LOGIN, root) + "?group=" + group + "&next=" + encodeURIComponent(location.href));
        };
        gate();
        addEventListener("pageshow", function (e) { if (e.persisted) gate(); });
    } else {                                            // ---- password.html 側
        var next = new URL(HOME, root).href;
        try {                                           // 同一サイトの別ページのみ許可
            var u = new URL(q.get("next"), location.href);
            if (u.protocol === location.protocol && u.host === location.host && u.pathname !== location.pathname) next = u.href;
        } catch (e) {}
        if (ok()) { location.replace(next); return; }
        addEventListener("DOMContentLoaded", function () {
            var i = document.getElementById("r18-password"), m = document.getElementById("r18-error");
            document.getElementById("r18-form").onsubmit = function (e) {
                e.preventDefault();
                if (i.value !== pass) { m.textContent = "パスワードが違います。"; i.value = ""; i.focus(); return; }
                try { localStorage.setItem(key, pass); } catch (x) { m.textContent = "localStorageが使えません。"; return; }
                location.replace(next);
            };
            i.oninput = function () { m.textContent = ""; };
            i.focus();
        });
    }
})();