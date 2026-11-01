# サイトのソースコード

対象フォルダ: `/Users/rin/Documents/GitHub/Ginevra/novel/long/mahoroba`

ファイル数: 5

## 01.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">

    <title>海原に墜つ - まほろばのくに - 落日 | Kagami</title>

    <!-- Web Fonts（CSSの --font-serif / --font-sans に書かれている2書体） -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Shippori+Mincho:wght@400;600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="novel.css">
    <script defer src="novel.js"></script>
</head>
<body>

    <!-- グローバルナビゲーション -->
    <nav>
        <ul>
            <li><a href="/index.html#info">information</a></li>
            <li><a href="/main.html#main">main</a></li>
            <li><a href="/note.html#note">notebook</a></li>
        </ul>
    </nav>

    <div class="wrap">

        <noscript>
            <p>名前変換と閲覧設定の切り替えにJavaScriptを使用しています。</p>
        </noscript>

        <!-- 各話の見出し（章名・話数・タイトルだけ書き換える） -->
        <header class="ep-head">
            <p class="ep-chap">
                <a href="mahoroba.html">まほろばのくに</a>
                <span>第一章　春雷と潮騒</span>
            </p>
            <span class="ep-no">001</span>
            <h1 class="ep-title">海原に墜つ</h1>
        </header>

        <!-- 閲覧設定（全話共通・そのままコピー） -->
        <div class="n-settings">
            <details class="n-details">
                <summary class="n-summary" aria-label="表示設定を開く">Aa</summary>
                <div class="n-collection">

                    <fieldset>
                        <legend class="n-collection-item">向き</legend>
                        <div class="n-collection-radio">
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="direction" value="tate-dan">縦書き(段)</label>
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="direction" value="tate">縦書き</label>
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="direction" value="yoko">横書き</label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend class="n-collection-item">フォント</legend>
                        <div class="n-collection-radio">
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="font-family" value="mincho">明朝</label>
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="font-family" value="marugothic">丸ゴシック</label>
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="font-family" value="gothic">ゴシック</label>
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend class="n-collection-item">背景色</legend>
                        <div class="n-collection-radio">
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="bg-color" value="grad">グラデ</label>
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="bg-color" value="white">白</label>
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="bg-color" value="gray">灰</label>
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="bg-color" value="yellow">黄</label>
                            <label class="n-label-radio"><input class="n-radio" type="radio" name="bg-color" value="black">黒</label>
                        </div>
                    </fieldset>

                    <div>
                        <label class="n-collection-item" for="font-size">サイズ</label>
                        <div class="n-auxiliary"><span>小さい</span><span>大きい</span></div>
                        <input class="n-range" type="range" id="font-size" name="font-size" min="1" max="11" step="1">
                    </div>

                    <div>
                        <label class="n-collection-item" for="line-height">行間</label>
                        <div class="n-auxiliary"><span>狭い</span><span>広い</span></div>
                        <input class="n-range" type="range" id="line-height" name="line-height" min="1" max="11" step="1">
                    </div>

                </div>
            </details>
        </div>

        <main>

            <!-- 前書き（不要な話ではこのブロックごと削除） -->
            <div class="n-note">
                <p>ここに前書き（注意書きなど）を書きます。</p>
            </div>

            <!-- 本文：id="honbun" は変更しない。
                 初期表示は class で決める（向き・フォント・背景色・サイズ・行間）。 -->
            <div id="honbun" class="n-outer direction-yoko font-family-mincho bg-color-grad font-size-6 line-height-6">
                <div class="n-inner">
                    <p>　ここに本文が入ります。段落の頭には全角スペースを入れます。</p>
                    <p>「<span class="user-your">ミョウジ</span>さん」</p>
                    <p>　名前は <span class="user-your">ミョウジ</span><span class="user-name">ナマエ</span> のように、ミョウジとナマエのどちらも本文中に入れられます。</p>
                    <p><br></p>
                    <p>　ルビは<ruby>海原<rp>（</rp><rt>うなばら</rt><rp>）</rp></ruby>のように書きます。空行は上のように <code>&lt;p&gt;&lt;br&gt;&lt;/p&gt;</code> で入れます。</p>
                </div>
            </div>

            <!-- あとがき（不要ならブロックごと削除） -->
            <div class="n-note">
                <p>ここにあとがきを書きます。</p>
            </div>

            <!-- ページ送り：最初の話は「前へ」、最後の話は「次へ」を span.is-off にする -->
            <div class="ep-pager">
                <span class="is-off">← 前へ</span>
                <a href="mahoroba.html">目次</a>
                <a href="mahoroba-02.html">次へ →</a>
            </div>

        </main>

        <footer>
            <!-- 元のhrefが「[suspicious link removed]」になっていたので、元のURLに戻してください -->
            Template by <a href="#" target="_blank" rel="noopener">mellow.</a>
        </footer>

    </div>

</body>
</html>
```

## mahoroba.css

```css
@charset "UTF-8";

/* ==========================================
   Variables & Root
   ========================================== */
:root {
    --bg-gradient: linear-gradient(40deg, rgba(206,176,211,1) 11%, rgba(174,194,210,1) 63%);
    --blue: #7b90aa;
    --dark-blue: #06023c;
    --font-serif: 'Shippori Mincho', "游明朝", YuMincho, serif;
    --font-sans: 'Roboto Condensed', 'Noto Sans JP', sans-serif;
}

/* ==========================================
   Base
   ========================================== */
html {
    font-size: 12px; /* スマホ */
    background: var(--bg-gradient) no-repeat;
    background-size: 100% 100%;
    background-color: #aec2d2;
}

@media screen and (min-width: 768px) {
    html { font-size: 15px; } /* タブレット（Ginevra共通） */
}
@media screen and (min-width: 1280px) {
    html { font-size: 16px; } /* PC（Ginevra共通） */
}

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    box-sizing: border-box;
    font-family: var(--font-serif);
    color: #FFF;
    letter-spacing: 0.1em;
    line-height: 1.9;
}

/* 背景グラデーションは固定レイヤーに（iOSでも崩れにくい） */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;     /* 画面より大きくして、ツールバーの下まで背景を届かせる */
    z-index: -1;
    background: var(--bg-gradient);
}

.wrap {
    max-width: 60rem;
    margin: 0 auto;
    padding: 0 2rem 2rem;
}

a {
    color: var(--dark-blue);
    text-decoration: none;
    border-bottom: none;
    transition: color 0.2s ease, padding 0.2s ease;
}
a:focus-visible {
    outline: 2px solid #FFF;
    outline-offset: 2px;
}

/* 強調文字（このページでは未使用だが残している） */
strong {
    font-weight: 600;
    border-bottom: 2px solid #FFF;
}
.highlight {
    background: linear-gradient(transparent 65%, #B5EAEA 70%);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

/* ==========================================
   Navigation（装飾なし・余白だけで区切る）
   ========================================== */
nav {
    margin: 1.8rem 0 3rem;
    text-align: center;
    font-family: var(--font-sans);
}
nav ul {
    display: inline-flex;
    gap: 2rem;
    margin: 0;
    padding: 0;
    list-style: none;
}
nav a {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--dark-blue);
    opacity: 0.7;
}
nav a:hover {
    opacity: 1;
}

/* ==========================================
   Layout（スマホ：縦積み／PC：2カラム）
   ========================================== */
.layout {
    display: block;
}

/* ---------- タイトルと画像（枠なし） ---------- */
.top {
    display: flex;
    justify-content: center;
    gap: 1.4rem;
    margin: 0 0 4rem;
}

/* 縦書きタイトル */
.title {
    align-self: flex-start;
    writing-mode: vertical-rl;
    text-shadow: 0 0 1.2rem rgba(6, 2, 60, 0.2);
}
h1 {
    margin: 0 0 0 1.2rem;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.3em;
}
.title p {
    margin: 0;
    font-size: 1rem;
    letter-spacing: 0.25em;
    opacity: 0.9;
}

/* 画像（相対パス: ../../images/mahoroba.jpg） */
.image {
    flex: none;
    width: 11rem;
    aspect-ratio: 5 / 8;
    background-image: url("../../images/mahoroba.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

/* ---------- 目次エリア ---------- */
main {
    max-width: 36rem;
    margin: 0 auto;
}

/* 章：左に縦書きの見出し、右に目次 */
.chapter {
    --chap: #636CCB;                 /* 章ごとのアクセント色（番号に使用） */
    display: grid;
    grid-template-columns: 5rem minmax(0, 1fr);
    column-gap: 1.2rem;
    margin: 0 0 5rem;
}
.chapter.chap-color-1 { --chap: #636CCB; }
.chapter.chap-color-2 { --chap: #8785A2; }

/* 見出し（スクロールしても章の間は残る） */
.chap-head {
    position: sticky;
    top: 2rem;

}
.chap-no {
    display: block;
    margin: 0 0 1.2rem;
    font-family: var(--font-sans);
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.85);
}
.chap-text {
    writing-mode: vertical-rl;
}
h3.chap-label {
    margin: 0 0 0 0.9rem;      /* 縦書きの左側＝タイトルとの間隔 */
    font-size: 0.85rem;
    font-weight: 400;
    line-height: 1.6;
    letter-spacing: 0.4em;
    color: var(--dark-blue);
    opacity: 0.65;
}
h4.chap-title {
    margin: 0;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.25em;
    color: var(--dark-blue);
}

/* 目次リスト（左寄せ） */
.chapter-list {
    list-style: none;
    margin: 0.2rem 0 0;
    padding: 2rem;
    text-align: left;
}
.chapter-list a {
    display: grid;
    grid-template-columns: 3.2rem 1fr;   /* 番号 | タイトル（折り返してもそろう） */
    align-items: baseline;
    padding: 0.2rem 0;
    font-size: 1.1rem;
    line-height: 1.7;
    letter-spacing: 0.08em;
}
.chapter-list a:hover {
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.4em;
    padding-left: 0.3rem;
}
.chapter-list .no {
    font-family: var(--font-sans);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    color: var(--chap);
    color: color-mix(in srgb, var(--chap) 70%, var(--dark-blue));
}

/* ==========================================
   Footer
   ========================================== */
footer {
    margin: 3rem auto 1rem;
    font-size: 0.85rem;
    opacity: 0.8;
    text-align: center;
}
footer a {
    color: #FFF;
    border-bottom: 1px dotted #FFF;
}

/* ==========================================
   PC：2カラム（左に画像を固定、右に目次）
   ========================================== */
@media screen and (min-width: 860px) {
    .layout {
        display: grid;
        grid-template-columns: 25rem minmax(0, 1fr);
        gap: 3rem;
        align-items: start;
    }
    .top {
        position: sticky;
        top: 2rem;
        justify-content: flex-start;
        margin: 0;
    }
    .image {
        width: 12.5rem;
    }
    main {
        max-width: none;
        margin: 0;
    }
}

/* ==========================================
   Responsive (< 500px)
   ========================================== */
@media screen and (max-width: 500px) {
    nav ul { gap: 1.2rem; }
    nav a { font-size: 1.2rem; }
    .chapter { grid-template-columns: 4.4rem minmax(0, 1fr); column-gap: 1rem; }
    .chap-no { font-size: 2.2rem; }
    h4.chap-title { font-size: 1.4rem; }
}
```

## mahoroba.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, viewport-fit=cover">
    <meta name="ROBOTS" content="NOINDEX, NOFOLLOW">

    <!-- OGP / Meta -->
    <meta property="og:title" content="まほろばのくに - 落日">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="落日">
    <meta property="og:description" content="まほろばのくにをみていた。">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="/images/favicon.ico" type="image/x-icon">

    <title>まほろばのくに - 落日 | Kagami</title>

    <!-- Web Fonts（CSSの --font-serif / --font-sans に書かれている2書体） -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Shippori+Mincho:wght@400;600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="mahoroba.css">
</head>
<body>

    <!-- グローバルナビゲーション -->
    <nav>
        <ul>
            <li><a href="/index.html#info">information</a></li>
            <li><a href="/main.html#rkrn">main</a></li>
            <li><a href="/note.html#note">notebook</a></li>
        </ul>
    </nav>

    <div class="wrap">

        <div class="layout">

            <!-- 左：タイトル・画像（PCでは画面に固定） -->
            <header class="top">
                <div class="title">
                    <h1>まほろば<br>のくに</h1>
                    <p>まほろばのくにをみていた。</p>
                </div>
                <div class="image" role="img" aria-label="まほろばのくに イメージ画像"></div>
            </header>

            <!-- 右：章・目次 -->
            <main>

                <!-- 第一章 -->
                <section class="chapter chap-color-1">
                    <div class="chap-head">
                        <span class="chap-no" aria-hidden="true">01</span>
                        <div class="chap-text">
                            <h3 class="chap-label">第一章</h3>
                            <h4 class="chap-title">春雷と潮騒</h4>
                        </div>
                    </div>
                    <ul class="chapter-list">
                        <li><a href="01.html"><span class="no">001</span><span>海原に墜つ</span></a></li>
                        <li><a href="02.html"><span class="no">002</span><span>あなたが笑えば春も笑った</span></a></li>
                        <li><a href="03.html"><span class="no">003</span><span>乙女道五十三次</span></a></li>
                        <li><a href="04.html"><span class="no">004</span><span>そうさぼくら失楽園</span></a></li>
                        <li><a href="05.html"><span class="no">005</span><span>革命のない夜だってふたり</span></a></li>
                        <li><a href="06.html"><span class="no">006</span><span>きみはマイナス一等星</span></a></li>
                        <li><a href="07.html"><span class="no">007</span><span>カペラ、良い夢を</span></a></li>
                        <li><a href="07-05.html"><span class="no">閑話</span><span>ある日の昼下がり</span></a></li>
                        <li><a href="08.html"><span class="no">008</span><span>つづかない楽園</span></a></li>
                        <li><a href="09.html"><span class="no">009</span><span>ルベライトの愛と心臓</span></a></li>
                        <li><a href="10.html"><span class="no">010</span><span>サファイアの瞳と涙</span></a></li>
                        <li><a href="11.html"><span class="no">011</span><span>花に嵐のたとえもあるさ</span></a></li>
                    </ul>
                </section>

                <!-- 第二章 -->
                <section class="chapter chap-color-2">
                    <div class="chap-head">
                        <span class="chap-no" aria-hidden="true">02</span>
                        <div class="chap-text">
                            <h3 class="chap-label">第二章</h3>
                            <h4 class="chap-title">夜濤の縁にて</h4>
                        </div>
                    </div>
                    <ul class="chapter-list">
                        <li><a href="12.html"><span class="no">012</span><span>hellow mellow</span></a></li>
                        <li><a href="13.html"><span class="no">013</span><span>遠き明滅</span></a></li>
                        <li><a href="14.html"><span class="no">014</span><span>眠たげな速度の夕映え</span></a></li>
                        <li><a href="15.html"><span class="no">015</span><span>可惜夜とキス</span></a></li>
                        <li><a href="16.html"><span class="no">016</span><span>ダンスをするならこんな日に</span></a></li>
                        <li><a href="17.html"><span class="no">017</span><span>おくれ毛がやや猫に似る</span></a></li>
                        <li><a href="18.html"><span class="no">018</span><span>きしむ残月</span></a></li>
                        <li><a href="19.html"><span class="no">019</span><span>残れる字のひとひら</span></a></li>
                        <li><a href="20.html"><span class="no">020</span><span>きみのための長夜</span></a></li>
                        <li><a href="21.html"><span class="no">021</span><span>静花葬</span></a></li>
                    </ul>
                </section>

                <!-- 第三章 -->
                <section class="chapter chap-color-3">
                    <div class="chap-head">
                        <span class="chap-no" aria-hidden="true">03</span>
                        <div class="chap-text">
                            <h3 class="chap-label">第三章</h3>
                            <h4 class="chap-title">うららかなれ私の遺灰</h4>
                        </div>
                    </div>
                    <ul class="chapter-list">
                        <li><a href="22.html"><span class="no">022</span><span>グローリー・デイ</span></a></li>
                        <li><a href="23.html"><span class="no">023</span><span>友情n%</span></a></li>
                        <li><a href="24.html"><span class="no">024</span><span>坂東にはいけないね</span></a></li>
                        <li><a href="25.html"><span class="no">025</span><span>まだらのきみと</span></a></li>
                        <li><a href="26.html"><span class="no">026</span><span>白昼に踊り</span></a></li>
                        <li><a href="27.html"><span class="no">027</span><span>燃ゆる野にあなたは立って</span></a></li>
                        <li><a href="28.html"><span class="no">028</span><span>・・・ーーー・・</span></a></li>
                        <li><a href="29.html"><span class="no">029</span><span>右耳を齧る</span></a></li>
                        <li><a href="30.html"><span class="no">030</span><span>飛んでゆけるなら地獄がいい</span></a></li>
                        <li><a href="31.html"><span class="no">031</span><span>いたいいたいあいたい</span></a></li>
                    </ul>
                </section>

            </main>
        </div>

        <!-- フッター -->
        <footer>
            <!-- 元のhrefが「[suspicious link removed]」になっていたので、元のURLに戻してください -->
            Template by <a href="#" target="_blank" rel="noopener">mellow.</a>
        </footer>

    </div>

</body>
</html>
```

## novel.css

```css
@charset "UTF-8";

/* ==========================================
   まほろばのくに：各話ページ用 CSS
   旧 novel/css の reset.css / base.css / novel.css をまとめ直したもの。
   mahoroba.css（目次ページ）と同じ色・フォント・背景を使います。
   ========================================== */

/* ==========================================
   Variables & Root
   ========================================== */
:root {
    --bg-gradient: linear-gradient(40deg, rgba(206,176,211,1) 11%, rgba(174,194,210,1) 63%);
    --blue: #7b90aa;
    --dark-blue: #06023c;
    --font-serif: 'Shippori Mincho', "游明朝", YuMincho, serif;
    --font-sans: 'Roboto Condensed', 'Noto Sans JP', sans-serif;

    --n-pad: min(5%, 1.125em);   /* 本文まわりの左右余白 */
    --n-max: 40em;               /* 本文（横書き）の最大幅 */
}

/* ==========================================
   Base（旧 reset.css + base.css の代わり）
   ========================================== */
*, *::before, *::after {
    box-sizing: border-box;
}
html {
    font-size: 12px; /* スマホ */
    background: #aec2d2; /* グラデーション読み込み前の保険 */
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
}
@media screen and (min-width: 768px) {
    html { font-size: 15px; } /* タブレット */
}
@media screen and (min-width: 1280px) {
    html { font-size: 16px; } /* PC */
}

body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: var(--font-serif);
    color: var(--dark-blue);
    letter-spacing: 0.1em;
    line-height: 1.9;
    overflow-wrap: anywhere;
    line-break: strict;                  /* 強い禁則処理 */
    hanging-punctuation: allow-end;      /* 句読点のぶら下げ（対応ブラウザのみ） */
}

/* 背景グラデーションは固定レイヤー（ツールバーの下まで届くよう画面より高くしている） */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 140vh;
    z-index: -1;
    background: var(--bg-gradient);
}

h1, h2, h3, h4, p, ul, ol, fieldset, legend {
    margin: 0;
    padding: 0;
}
ul, ol { list-style: none; }

a {
    color: var(--dark-blue);
    text-decoration: none;
    transition: color 0.2s ease, opacity 0.2s ease;
}
a:focus-visible {
    outline: 2px solid #FFF;
    outline-offset: 2px;
}

.wrap {
    max-width: 46rem;
    margin: 0 auto;
    padding: 0 2rem 2rem;
}

/* ==========================================
   Navigation（目次ページと同じ）
   ========================================== */
nav {
    margin: 1.8rem 0 3rem;
    text-align: center;
    font-family: var(--font-sans);
}
nav ul {
    display: inline-flex;
    gap: 2rem;
}
nav a {
    font-size: 1.1rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0.7;
}
nav a:hover {
    opacity: 1;
}

/* ==========================================
   各話の見出し
   ========================================== */
.ep-head {
    max-width: var(--n-max);
    margin: 0 auto 2.5rem;
    padding: 0 var(--n-pad);
}
.ep-chap {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1.6rem;
    margin: 0 0 1.4rem;
    font-size: 0.85rem;
    line-height: 1.6;
    letter-spacing: 0.3em;
    opacity: 0.7;
}
.ep-chap a:hover {
    color: #FFF;
}
.ep-no {
    display: block;
    margin: 0 0 0.6rem;
    font-family: var(--font-sans);
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0.04em;
    color: rgba(255, 255, 255, 0.85);
}
h1.ep-title {
    font-size: 1.7rem;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.2em;
}

/* ==========================================
   閲覧設定ボタン
   ========================================== */
.n-settings {
    max-width: var(--n-max);
    margin: 0 auto 1.2rem;
    padding: 0 var(--n-pad);
    text-align: right;
}
.n-summary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border: 1px solid rgba(6, 2, 60, 0.45);
    border-radius: 50%;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    letter-spacing: 0;
    line-height: 1;
    list-style: none;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: background-color 0.2s ease, color 0.2s ease;
}
.n-summary::-webkit-details-marker { display: none; }
.n-summary:focus-visible {
    outline: 2px solid var(--dark-blue);
    outline-offset: 3px;
}
@media (hover: hover) {
    .n-summary:hover {
        background: var(--dark-blue);
        color: #FFF;
    }
}
.n-details[open] .n-summary {
    background: var(--dark-blue);
    color: #FFF;
}

/* 展開部分 */
.n-collection {
    display: grid;
    gap: 1.4rem;
    margin-top: 0.8rem;
    padding: 1.4rem 1.2rem;
    text-align: left;
    background: rgba(255, 255, 255, 0.45);
    -webkit-backdrop-filter: blur(0.6rem);
    backdrop-filter: blur(0.6rem);
}
.n-details[open] .n-collection {
    animation: n-fade 0.18s ease-out;
}
@keyframes n-fade {
    from { opacity: 0; transform: translateY(-0.4rem); }
    to   { opacity: 1; transform: none; }
}
@media (prefers-reduced-motion: reduce) {
    .n-details[open] .n-collection { animation: none; }
}

.n-collection fieldset {
    min-width: 0;
    border: 0;
}
.n-collection-item {
    display: block;
    margin: 0 0 0.6rem;
    font-family: var(--font-sans);
    font-size: 0.8rem;
    letter-spacing: 0.3em;
    opacity: 0.7;
}
.n-collection-radio {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
}
.n-label-radio {
    position: relative;
    padding: 0.35rem 0.9rem;
    font-size: 0.9rem;
    line-height: 1.6;
    letter-spacing: 0.1em;
    box-shadow: inset 0 0 0 1px rgba(6, 2, 60, 0.25);
    cursor: pointer;
    transition: background-color 0.15s ease, color 0.15s ease;
}
.n-radio {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
}
.n-label-radio:has(.n-radio:checked) {
    background: var(--dark-blue);
    color: #FFF;
    box-shadow: none;
}
.n-label-radio:has(.n-radio:focus-visible) {
    outline: 2px solid var(--dark-blue);
    outline-offset: 2px;
}

.n-auxiliary {
    display: flex;
    justify-content: space-between;
    font-size: 0.75rem;
    opacity: 0.7;
}
.n-range {
    display: block;
    width: 100%;
    height: 1.6rem;
    margin: 0;
    accent-color: var(--dark-blue);
    cursor: pointer;
}

/* ==========================================
   前書き・あとがき
   ========================================== */
.n-note {
    max-width: var(--n-max);
    margin: 2rem auto;
    padding: 0 var(--n-pad);
    font-size: 0.9rem;
    line-height: 2;
    opacity: 0.85;
}

/* ==========================================
   本文
   ========================================== */
.n-outer {
    /* 閲覧設定で変わる値（下のクラスで上書きされる） */
    --n-f-size-step-value: 0;
    --n-l-height-step-value: 0;

    --n-f-size-delta: calc(1px * var(--n-f-size-step-value));
    --n-l-height-delta: calc(0.1 * var(--n-l-height-step-value));

    margin: 2rem auto;
    font-family: var(--n-f-family);
    background-color: var(--n-bg-color);
    color: var(--n-t-color);
    font-size: calc(1em + var(--n-f-size-delta));
    line-height: calc(1.8 + var(--n-l-height-delta));
}
.n-inner p {
    min-height: 1em;   /* <p><br></p> で空行を作れるように */
}

/* ---------- フォント ---------- */
.font-family-mincho {
    --n-f-family: 'Shippori Mincho', "Hiragino Mincho ProN", "游明朝", YuMincho, serif;
}
.font-family-marugothic {
    --n-f-family: "Hiragino Maru Gothic ProN", "Kosugi Maru", ui-rounded, sans-serif;
}
.font-family-gothic {
    --n-f-family: "Hiragino Sans", "Noto Sans JP", sans-serif;
}

/* ---------- 背景色 ---------- */
/* grad：ページのグラデーションをそのまま使う（枠なし） */
.bg-color-grad {
    --n-bg-color: transparent;
    --n-t-color: var(--dark-blue);
}
.bg-color-white {
    --n-bg-color: #f8f7fa;
    --n-t-color: #1d1a2b;
}
.bg-color-gray {
    --n-bg-color: #e6e4ea;
    --n-t-color: #1d1a2b;
}
.bg-color-yellow {
    --n-bg-color: #f6f0e3;
    --n-t-color: #2b2620;
}
.bg-color-black {
    --n-bg-color: #16151d;
    --n-t-color: #d8d6de;
}

/* ---------- 文字サイズ（11段階） ---------- */
.font-size-1  { --n-f-size-step-value: -5; }
.font-size-2  { --n-f-size-step-value: -4; }
.font-size-3  { --n-f-size-step-value: -3; }
.font-size-4  { --n-f-size-step-value: -2; }
.font-size-5  { --n-f-size-step-value: -1; }
.font-size-6  { --n-f-size-step-value: 0; }
.font-size-7  { --n-f-size-step-value: 1; }
.font-size-8  { --n-f-size-step-value: 2; }
.font-size-9  { --n-f-size-step-value: 3; }
.font-size-10 { --n-f-size-step-value: 4; }
.font-size-11 { --n-f-size-step-value: 5; }

/* ---------- 行間（11段階） ---------- */
.line-height-1  { --n-l-height-step-value: -5; }
.line-height-2  { --n-l-height-step-value: -4; }
.line-height-3  { --n-l-height-step-value: -3; }
.line-height-4  { --n-l-height-step-value: -2; }
.line-height-5  { --n-l-height-step-value: -1; }
.line-height-6  { --n-l-height-step-value: 0; }
.line-height-7  { --n-l-height-step-value: 1; }
.line-height-8  { --n-l-height-step-value: 2; }
.line-height-9  { --n-l-height-step-value: 3; }
.line-height-10 { --n-l-height-step-value: 4; }
.line-height-11 { --n-l-height-step-value: 5; }

/* ---------- 向き ---------- */
/* 横書き */
.direction-yoko {
    width: 100%;
}
.direction-yoko .n-inner {
    max-width: var(--n-max);
    margin: 0 auto;
    padding: 2em var(--n-pad);
}

/* 縦書き・画面高さ固定・横スクロール */
.direction-tate {
    writing-mode: vertical-rl;
    width: 100%;
    height: 80vh;
    height: 80svh;
    padding: 2em;
    overflow: auto;
    hanging-punctuation: allow-end last;
}

/* 縦書き・多段組み・画面高さ固定・縦スクロール */
.direction-tate-dan {
    writing-mode: vertical-rl;
    width: 100%;
    height: 85vh;
    height: 85svh;
    padding: 2em 1.125em;
    overflow-x: hidden;
    overflow-y: scroll;
    column-count: 2;
    column-gap: 2.25em;
    hanging-punctuation: allow-end last;
}
@media screen and (min-width: 45em) {
    .direction-tate-dan {
        padding-left: 4.5em;
        padding-right: 4.5em;
    }
}

/* ルビ */
ruby rt {
    font-size: 0.5em;
    letter-spacing: 0.05em;
}

/* 本文中のリンク */
.n-inner a {
    border-bottom: 1px dotted currentColor;
}

/* ==========================================
   ページ送り（前へ／目次／次へ）
   ========================================== */
.ep-pager {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    max-width: 24rem;
    margin: 3.5rem auto 0;
    font-family: var(--font-sans);
    font-size: 1rem;
    letter-spacing: 0.2em;
}
.ep-pager a {
    opacity: 0.8;
}
.ep-pager a:hover {
    color: #FFF;
    opacity: 1;
}
.ep-pager .is-off {
    opacity: 0.25;
}

/* ==========================================
   Footer
   ========================================== */
footer {
    margin: 4rem auto 1rem;
    font-size: 0.85rem;
    opacity: 0.8;
    text-align: center;
}
footer a {
    color: #FFF;
    border-bottom: 1px dotted #FFF;
}

noscript p {
    max-width: var(--n-max);
    margin: 0 auto 1.5rem;
    padding: 0 var(--n-pad);
    font-size: 0.85rem;
}

/* ==========================================
   Responsive (< 500px)
   ========================================== */
@media screen and (max-width: 500px) {
    nav ul { gap: 1.2rem; }
    nav a { font-size: 1.2rem; }
    h1.ep-title { font-size: 1.5rem; }
    .ep-no { font-size: 2.2rem; }
}
```

## novel.js

```javascript
/* 
  Template & Designed by Asteroid
  https://asteroid19.netlify.app/
*/

document.addEventListener("DOMContentLoaded", () => {

  const honbun = document.getElementById("honbun");
  if (!honbun) return;

  const localStorageKey = "asteroid-novel";
  const templateVersion = "4.1";

  const editableItems = [
    { key: "direction", type: "radio" },
    { key: "font-family", type: "radio" },
    { key: "bg-color", type: "radio" },
    { key: "font-size", type: "range" },
    { key: "line-height", type: "range" }
  ];

  const FONT_CONFIG = {
    mincho: {
      names: ["Hiragino Mincho ProN", "Noto Serif JP"],
      link: "[suspicious link removed]"
    },
    marugothic: {
      names: ["Hiragino Maru Gothic ProN", "Kosugi Maru"],
      link: "[suspicious link removed]"
    }
  };

  const getNovelData = () => {
    const raw = localStorage.getItem(localStorageKey);
    return raw ? JSON.parse(raw) : {};
  };

  const updateNovelData = (key, value) => {
    const data = getNovelData();
    data[key] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  const updateClass = (element, prefix, value) => {
    const toRemove = Array.from(element.classList).filter(c => c.startsWith(prefix));
    toRemove.forEach(c => element.classList.remove(c));
    if (value) element.classList.add(prefix + value);
  };

  const applyStoredClasses = (data) => {
    editableItems.forEach(item => {
      const value = data[item.key];
      if (value && value !== "novalue") updateClass(honbun, item.key + "-", value);
    });
  };

  // 初期読み込み時の反映処理
  const savedData = getNovelData();
  applyStoredClasses(savedData);

  // ラジオボタン・スライダーの変更イベントリスナー
  editableItems.forEach(item => {
    if (item.type === "radio") {
      const radios = document.querySelectorAll(`input[name="${item.key}"]`);
      radios.forEach(radio => {
        if (savedData[item.key] === radio.value) radio.checked = true;
        radio.addEventListener("change", (e) => {
          updateClass(honbun, item.key + "-", e.target.value);
          updateNovelData(item.key, e.target.value);
        });
      });
    } else if (item.type === "range") {
      const range = document.getElementById(item.key);
      if (range) {
        if (savedData[item.key]) range.value = savedData[item.key];
        range.addEventListener("input", (e) => {
          updateClass(honbun, item.key + "-", e.target.value);
          updateNovelData(item.key, e.target.value);
        });
      }
    }
  });
});
```

