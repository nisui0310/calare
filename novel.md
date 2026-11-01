# サイトのソースコード

対象フォルダ: `/Users/rin/Documents/GitHub/Ginevra/novel`

ファイル数: 10

## css/base.css

```css
@charset "utf-8";
/* 
  Template & Designed by Asteroid
  https://asteroid19.netlify.app/
*/
/*
  ※旧バージョンではI'll be NET様のpixiv小説のように縦書き表示する方法-2019版を元に作成していましたが、技術の進化に合わせて全面的に刷新しています。
*/
/* ******************************************************************************** */
/*  I'll be NET jQuery Novel
/*  作成：I'll be NET（http://illbenet.jp/）
/* ******************************************************************************** */


/* ******************************************************************************** */
/* 最低限のスタイル設定。
/* 自分のサイトで使用しているCSSに差し替えても動きます。
/* ******************************************************************************** */

/* CSS変数(このファイル内でのみ使用する) */
:root {
  --n-text-color: #2d272f;         /* ダークチャコール */
  --n-background-color: #fafafa;   /* novel.html風のすっきりした明るい白 */
  --n-link-color: #c4696a;         /* 朱ローズ */
  --n-link-visited-color: #a88d85; /* くすみローズ */
  --n-hr-bd-color: #d5cebc;        /* サンドベージュ */
}

/* body */
body {
    font-family: "Helvetica Neue", "Arial", sans-serif; /* フォントの種類 */
    font-size: clamp(0.75rem, 3.8vw, 1rem); /* フォントサイズを「12px以上1rem以下の3.8」にしています。お好みで変更してください。 */
    line-height: 1.8; /* 行の高さ */
    text-align: left; /* 左寄せ */
    overflow-wrap: break-word;
    overflow-wrap: anywhere;  /* 文字の折り返し。収まらない場合に折り返す。anywhereが非対応時のフォールバックとしてbreak-wordも指定。 */
    line-break: strict; /* 強い禁則処理(通常はnormal) */
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%; /* 文字サイズの自動調整を制御 */
    hanging-punctuation: allow-end; /* 句読点のぶら下げ。対応ブラウザは少ない。不要ならば削除してください。 */
    color: var(--n-text-color); /* 文字色 */
    background-color: var(--n-background-color);  /* 背景色 */
}

/* リンク */
/* 未訪問リンク（基本） */
:where(a) {
    color: var(--n-link-color);
    text-decoration: none;
    border-bottom: 1px dotted var(--n-link-color); /* 下線を控えめな点線に */
    transition: color 0.2s ease, border-color 0.2s ease;
}

/* 訪問済みリンク（少し薄く落ち着いた表示） */
:where(a:visited) {
    color: var(--n-link-visited-color);
    border-bottom-color: var(--n-link-visited-color); /* 下線も薄い色に同期 */
}

/* マウスを乗せたとき・タップ時（ホバー） */
:where(a:is(:hover, :active)) {
    color: #d96a58;                /* 少し明るい朱赤に変化 */
    border-bottom-style: solid;    /* 点線から実線に変わって分かりやすく */
    border-bottom-color: #d96a58;
}

/* :where(center){ text-align: revert;}は
nanoやalice+で center タグを使っている場合は必要。不要なら削除 */
:where(center) {
    text-align: revert;
}

/* ol, ulタグ */
:where(ol, ul) {
    list-style: revert;
    padding-inline-start: 2em;
}

```

## css/novel.css

```css
@charset "utf-8";
/* 
  Template & Designed by Asteroid
  https://asteroid19.netlify.app/
*/
/*
  ※旧バージョンではI'll be NET様のpixiv小説のように縦書き表示する方法-2019版を元に作成していましたが、技術の進化に合わせて全面的に刷新しています。
*/
/* ******************************************************************************** */
/*  I'll be NET jQuery Novel
/*  作成：I'll be NET（http://illbenet.jp/）
/* ******************************************************************************** */



/* ******************************************************************************** */
/*  共通設定
/* ******************************************************************************** */

:root {

    /* 配色 */
    --n-red: #c4696a;                   /* 断り書き（朱ローズ） */
    --n-details-bd-color: #2d272f;      /* 枠線（ダークチャコール） */
    --n-label-radio-bd-color: #d5cebc;  /* ラジオボタン枠線（サンドベージュ） */
    --n-accent-color: #c4696a;          /* ラジオボタン・スライダー（朱ローズ） */

    /* 共通設定 */
    --n-common-value-1: 1.125em; /* paddingの横幅の最大値。1em以上を推奨。 */
    --n-common-side-padding: min(5%, var(--n-common-value-1)); /* paddingの横幅の設定。設定の意味は「5%、ただしvar(--n-common-value-1)以下」 */
    --n-common-max-width: 45em;   /* 横幅の最大値 */
}

.n-common {
    margin: 3em auto 0;
    padding: 0 var(--n-common-side-padding);
    max-width: var(--n-common-max-width);
}

/* ******************************************************************************** */
/*  断り書き
/* ******************************************************************************** */

/* 以下の状況で断り書きを表示する要素
・JavaScriptが使用不可なとき
・WebStorageが使用不可なとき */
.n-announce {
    padding: var(--n-common-value-1) var(--n-common-side-padding);
    border: solid 2px var(--n-red);
}

/* WebStorageが使用不可の場合、またはWebStorageの空き容量がない場合は断り書きを表示する */
.n-webstorage-unusable,
.n-webstorage-nospace {
    display: none;
}

.n-webstorage-unusable-after,
.n-webstorage-nospace-after {
    display: revert;
}

/* ******************************************************************************** */
/*  小説閲覧設定切り替えのボタン
/* ******************************************************************************** */
/* *********************************** */
/*  detailsとsummaryで開閉できるボタン
/* *********************************** */
/* 右寄せ用指定 */
aside.n-common {
    text-align: right;
}

/* details */
/* 開いているときのdetails */
.n-details[open] {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}

/* summary（アイコンサイズ・右寄せ） */
.n-summary {
    list-style: none; /* 三角マークを非表示 */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;  /* 【変更】2.5rem → 2.75rem（指で押しやすい約44px） */
    height: 2.75rem;
    padding: 0;
    border: solid 2px var(--n-details-bd-color);  /* 【変更】1px → 2px（見えやすく） */
    border-radius: 50%;  /* 丸型 */
    background-color: var(--n-background-color, #fff);  /* 【追加】背景色 */
    color: var(--n-details-bd-color);  /* 【追加】アイコンの色（枠線と同じ） */
    cursor: pointer;
    margin-left: auto;
    user-select: none;  /* 【追加】連続タップで文字選択されないように */
    -webkit-tap-highlight-color: transparent;  /* 【追加】スマホで押したときの灰色の四角を消す */
    transition: 0.2s;  /* 【追加】色の変化をなめらかに */
}

.n-summary::-webkit-details-marker {
    display: none;
}

/* 【追加】アイコンの大きさ。大きくしたい／小さくしたい場合はこの数字を変更 */
.n-summary i,
.n-summary svg,
.n-icon {
    font-size: 1.2rem;
    line-height: 1;
}

/* 【追加】マウスを乗せたとき（スマホでは反応しない） */
@media (hover: hover) {
    .n-summary:hover {
        background-color: var(--n-accent-color);
        border-color: var(--n-accent-color);
        color: #fff;
    }
}

/* 【追加】押した瞬間に少し縮む */
.n-summary:active {
    transform: scale(0.94);
}

/* 【追加】キーボードで選んだときの枠 */
.n-summary:focus-visible {
    outline: 3px solid var(--n-accent-color);
    outline-offset: 3px;
}

/* 開いているときのsummary */
.n-details[open] .n-summary {
    border-radius: 50%;
    /* 【追加】開いている間は塗りつぶしたままにして、今開いていることを分かりやすく */
    background-color: var(--n-accent-color);
    border-color: var(--n-accent-color);
    color: #fff;
}

/* summaryに下線を表示するためのspan */
.n-summary-span {
    text-decoration: underline;
}

/* 開いているときのsummaryからは下線を消す */
.n-details[open] .n-summary-span {
    text-decoration: none;
}

/* ここから開閉アニメーション。アニメーションが不要ならば削除 */
.n-details .n-collection {
  animation: unset;
}

.n-details[open] .n-collection {
  animation: fadeIn-Animation 0.18s ease-out;  /* 【変更】0.25s → 0.18s（速くした）。もっと速くしたいなら 0.12s、ゆっくりなら 0.3s */
}

@keyframes fadeIn-Animation {
  0% {
    opacity: 0;    /* 透明 */
    transform: translateY(-8px);    /* 【変更】-10px → -8px（動く幅を少し小さく） */
  }

  100% {
    opacity: 1;
    transform: none;
  }
}

/* 【追加】「動きを減らす」設定にしている人にはアニメーションなし */
@media (prefers-reduced-motion: reduce) {
  .n-details[open] .n-collection {
    animation: none;
  }
}
/* ここまで開閉アニメーション */

/* *********************************** */
/* 切り替えボタン
/* ・ラジオボタン(input type="radio")
/* ・スライダー(input type="range")
/* *********************************** */

/* 開閉ボタンで展開される箇所を一括でまとめている要素 */
.n-collection {
    text-align: left; /* メニュー内の配置は左揃えに維持 */
    display: grid;
    row-gap: calc(var(--n-common-value-1) * 1.5); /* 要素の隙間の大きさ */
    padding: calc(var(--n-common-value-1) * 1.5) var(--n-common-side-padding);
    border: solid 1px var(--n-details-bd-color);
    border-radius: 10px;
    margin-top: 12px;  /* 【追加】アイコンとの間に隙間をあける */
    background-color: var(--n-background-color, #fff);  /* 【追加】 */
}

/* 【追加】fieldsetの標準の枠線・余白を消す（向き・フォント・背景色の外側に出る線を無くす） */
.n-collection fieldset {
    margin: 0;
    padding: 0;
    border: 0;
    min-width: 0;
}

/* グループ化したラジオボタンのグループ見出し */
.n-collection-item {
    font-weight: bold;
    margin-bottom: calc(var(--n-common-value-1) - 1em);
}

/* ラジオボタンの個数にかかわらず、均等に1行にまとめる要素 */
.n-collection-radio {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(1px, 1fr));
}

/* ラジオボタンのラベル */
.n-label-radio {
    display: grid;
    place-items: center;    /* 上下中央寄せ */
    justify-content: start; /* 左寄せ */
    grid-auto-flow: column; /* 横に並べる */
    column-gap: 0.35em; /* 【変更】0.25em → 0.35em ラジオボタンとテキストの間の大きさ */
    padding: 0.75em 0.4em 0.75em 0.6em;  /* 【変更】押しやすいように上下を広げた */
    border: solid 1px var(--n-label-radio-bd-color);
    border-right: 0;
    cursor: pointer;  /* 【追加】 */
    transition: background-color 0.15s;  /* 【追加】 */
}

/* 【追加】マウスを乗せたとき、うっすら色が付く */
@media (hover: hover) {
    .n-label-radio:hover {
        background-color: color-mix(in srgb, var(--n-accent-color) 8%, transparent);
    }
}

/* ラジオボタンのラベルの最初のみ左側を角丸 */
.n-label-radio:first-of-type {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}

/* ラジオボタンのラベルの最後のみ右側を角丸 */
.n-label-radio:last-of-type {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    border-right: solid 1px var(--n-label-radio-bd-color);
}

/* ラジオボタンのラベルのうち、ラジオボタンにチェックが入ったときのスタイル */
.n-label-radio:has(.n-radio:checked) {
    outline: solid 2px var(--n-accent-color);
    outline-offset: -1px;
    background-color: color-mix(in srgb, var(--n-accent-color) 14%, transparent);  /* 【追加】選択中が一目で分かるように色を付ける */
    font-weight: bold;  /* 【追加】 */
}

/* ラジオボタンとスライダー */
.n-radio,
.n-range {
    all: revert;
    box-sizing: border-box;
    cursor: pointer;
    font: unset;
    font-size: max(1em, 1rem);  /* フォントサイズは1em、ただし1rem以上に設定 */
    margin: unset;
    padding: unset;
    accent-color: var(--n-accent-color);    /* アクセントカラー */
}

/* ラジオボタンの大きさ */
.n-radio {
    width: 1em;   /* 【変更】0.85em → 1em（押しやすく） */
    height: 1em;
}

/* スライダーのラベル */
.n-label-range {
    display: block;
    width: fit-content;
}

/* スライダーの大きさ */
.n-range {
    display: block;
    width: 100%;
    height: 1.75rem;  /* 【追加】つまみを指で掴みやすい高さにする */
}
 /* スライダーの補足文章(小さい大きい、狭い広い)のブロック */
.n-auxiliary {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
}

/* スライダーの補足文章の大きさ */
.n-auxiliary-text {
    font-size: 0.75em;
}
/* ******************************************************************************** */
/*  小説の外観
/* ******************************************************************************** */

/* *********************************** */
/*  外枠の共通設定
/* *********************************** */
.n-outer {

    /* 小説のフォントサイズの変化量 */
    --n-f-size-base: 1em;  /* 基本は1em */
    --n-f-size-step: 1px;  /* 1段階ごとに1px増減する */
    --n-f-size-delta: calc(var(--n-f-size-step) * var(--n-f-size-step-value)); /* フォントサイズを増減させる値 */

    /* 小説の行間の変化量 */
    --n-l-height-base: 1.8;    /* 基本は1.8 */
    --n-l-height-step: 0.1;    /* 1段階ごとに0.1増減する */
    --n-l-height-delta: calc(var(--n-l-height-step) * var(--n-l-height-step-value)); /* 行間を増減させる値 */

    /* 外枠の共通設定 */
    border-top: solid 1px var(--n-label-radio-bd-color);
    border-bottom: solid 1px var(--n-label-radio-bd-color);
    margin: calc(3 * calc(var(--n-f-size-base) - var(--n-f-size-delta))) auto;

    /* 小説閲覧設定切り替えで選択可能な要素 */
    /* フォントファミリー */
    font-family: var(--n-f-family);
    /* 背景色と文字色 */
    background-color: var(--n-bg-color);
    color: var(--n-t-color);
    /* フォントサイズ */
    font-size: calc(var(--n-f-size-base) + var(--n-f-size-delta));
    /* 行間 */
    line-height: calc(var(--n-l-height-base) + var(--n-l-height-delta));

    /* 小説の向きは別指定 */
}

/* *********************************** */
/*  小説のフォントファミリー
/* *********************************** */

/* 明朝体 */
/* 指定する順番は、ヒラギノ明朝、Noto Serif JP、OS標準の明朝体 */
/* いずれも存在しない場合に限り、JavaScriptでWebフォント(Noto Serif JP)をダウンロードする。 */
.font-family-mincho {
    --n-f-family: "Hiragino Mincho ProN", "Noto Serif JP", serif;
}

/* 丸ゴシック体 */
/* 指定する順番は、ヒラギノ丸ゴシック、Kosugi Maru、ユーザーインターフェイス既定の丸い特性を持ったフォント、OS標準のゴシック体 */
/* ヒラギノ丸ゴシックが存在しない場合に限り、JavaScriptでWebフォント(Kosugi Maru)をダウンロードする。 */
.font-family-marugothic {
    --n-f-family: "Hiragino Maru Gothic ProN", "Kosugi Maru", ui-rounded, sans-serif;
}

/* ゴシック体 */
.font-family-gothic {
    --n-f-family: sans-serif;
}

/* *********************************** */
/*  小説の背景色
/* *********************************** */

/* 白（Webで定番の、真っ白に見えて目に優しいスッキリした白） */
.bg-color-white {
    --n-bg-color: #fafafa; /* または #fcfcfc */
    --n-t-color: #2d272f;
}

/* 黒 */
.bg-color-black {
    --n-bg-color: #1f1f1f;
    --n-t-color: #ddd;
}

/* 灰 */
.bg-color-gray {
    --n-bg-color: #f5f5f5; /* または #e8e8eb / #f0f0f2 */
    --n-t-color: #2d272f;  /* ダークチャコール文字 */
}

/* 青 */
.bg-color-blue {
    --n-bg-color: #e8eee8; /* ほんのり青みがかった灰水色 */
    --n-t-color: #2d272f;  /* ダークチャコール */
}

/* 黄（ほんのり黄みがかった優しいクリーム・サンドカラー） */
.bg-color-yellow {
    --n-bg-color: #fcf9f2; /* サイト基本背景と同じ色 */
    --n-t-color: #2d272f;
}




/* *********************************** */
/*  小説のフォントサイズ
/* *********************************** */

/* 変化は11段階、数値が大きいほどフォントサイズが大きくなる */
.font-size-1 {
    --n-f-size-step-value: -5;
}

.font-size-2 {
    --n-f-size-step-value: -4;
}

.font-size-3 {
    --n-f-size-step-value: -3;
}

.font-size-4 {
    --n-f-size-step-value: -2;
}

.font-size-5 {
    --n-f-size-step-value: -1;
}

.font-size-6 {
    --n-f-size-step-value: 0;
}

.font-size-7 {
    --n-f-size-step-value: 1;
}

.font-size-8 {
    --n-f-size-step-value: 2;
}

.font-size-9 {
    --n-f-size-step-value: 3;
}

.font-size-10 {
    --n-f-size-step-value: 4;
}

.font-size-11 {
    --n-f-size-step-value: 5;
}

/* *********************************** */
/*  小説の行間
/* *********************************** */

/* 変化は11段階、数値が大きいほど行間が広くなる */
.line-height-1 {
    --n-l-height-step-value: -5;
}

.line-height-2 {
    --n-l-height-step-value: -4;
}

.line-height-3 {
    --n-l-height-step-value: -3;
}

.line-height-4 {
    --n-l-height-step-value: -2;
}

.line-height-5 {
    --n-l-height-step-value: -1;
}

.line-height-6 {
    --n-l-height-step-value: 0;
}

.line-height-7 {
    --n-l-height-step-value: 1;
}

.line-height-8 {
    --n-l-height-step-value: 2;
}

.line-height-9 {
    --n-l-height-step-value: 3;
}

.line-height-10 {
    --n-l-height-step-value: 4;
}

.line-height-11 {
    --n-l-height-step-value: 5;
}

/* *********************************** */
/*  小説の向き
/* *********************************** */

/* 1. 縦書き・多段組み・画面高さ固定・縦スクロール */
/* 外枠 */
.direction-tate-dan {
    writing-mode: vertical-rl;  /* 縦書き */
    width: 100%;
    height: 85vh;
    margin-left: auto;
    margin-right: auto;
    padding: calc(var(--n-common-value-1) * 2) var(--n-common-value-1);
    overflow-x: hidden;
    overflow-y: scroll;
    column-gap: calc(var(--n-common-value-1) * 2);  /* 段間の大きさ */
    column-count: 2;    /* 画面の縦幅が小さい時は1画面に1段組み */
    hanging-punctuation: allow-end last; /* 句読点と閉じ括弧のぶら下げ。対応ブラウザは少ない。不要ならば削除してください。 */
}

/* 1のとき内枠は特に指定なし */

/* 画面の横幅が45em以上のときに限定して、.direction-tate-danの設定 */
@media screen and (min-width: 45em) {
    .direction-tate-dan {
        width: calc(100% - calc(calc(var(--n-f-size-base) - var(--n-f-size-delta)) * 6));
        padding-left: calc(var(--n-common-value-1) * 4);
        padding-right: calc(var(--n-common-value-1) * 4);
    }
}

/* 2. 縦書き・画面高さ固定・横スクロール */
/* 外枠 */
.direction-tate {
    writing-mode: vertical-rl;  /* 縦書き */
    width: 100%;
    max-width: 100%;
    height: 80vh;
    max-height: var(--n-common-max-width);
    padding: calc(var(--n-common-value-1) * 2);
    overflow: auto;
    hanging-punctuation: allow-end last; /* 句読点と閉じ括弧のぶら下げ。対応ブラウザは少ない。不要ならば削除してください。 */
}

/* 内枠 */
/* 2のとき内枠は特に設定なし */

/* 画面の横幅が45em以上のときに限定して、.direction-tateの設定 */
@media screen and (min-width: 45em) {
    .direction-tate {
        width: calc(100% - calc(calc(var(--n-f-size-base) - var(--n-f-size-delta)) * 4));
    }
}

/* 3. 横書き */
/* 外枠 */
.direction-yoko {
    width: 100%;
    max-width: 100%;
    hanging-punctuation: allow-end; /* 句読点のぶら下げ。対応ブラウザは少ない。不要ならば削除してください。 */
}

/* 内枠 */
.direction-yoko .n-inner {
    max-width: var(--n-common-max-width);
    margin: 0 auto;
    padding: calc(3 * calc(var(--n-f-size-base) - var(--n-f-size-delta))) var(--n-common-side-padding);
}

/* ******************************************************************************** */
/*  その他のパーツ
/* ******************************************************************************** */



/* 前書きとあとがきの共通枠（線だけを消し、領域・余白は保持） */
.n-maegaki,
.n-atogaki {
    border: none;       /* 線を消去 */
    margin-bottom: 2em; /* 領域（高さ・間隔）はそのまま保持 */
}

/* 前書き・あとがき内の余白 */
.n-maegaki .n-common,
.n-atogaki .n-common {
    margin-bottom: 1.5em;
}

/* ページネーション（前へ ｜ 一覧へ ｜ 次へ） */
.n-pagenation {
    text-align: center; /* 中央寄せ */
    margin: 1em 0;
}
/* フッター、簡易版 */
.n-footer {
    text-align: center; /* 中央寄せ、不要ならば削除。サイト共通のフッターがあればそれらを適用する */
    margin-bottom: 3em;
}




/* タイトル全体を包むエリア */
.novel-title-header {
    text-align: center;
    margin: 3.5rem 0 2.5rem;
}


/* 小説タイトルの1文字目を赤色＆少し強調 */
.novel-title::first-letter {
    color: var(--n-link-color);        /* または #c4696a */
    font-size: 1.15em;        /* ほんの少しだけ大きくして印象的に */
    font-weight: bold;
}


/* タイトル上の小さなカテゴリ（英語表記） */
.novel-category {
    display: block;
    font-family: var(--san-serif);
    font-size: 0.75rem;
    letter-spacing: 0.25em;       /* 文字間隔を広げて現代的に */
    color: var(--red);            /* テーマカラーの朱ローズ */
    text-transform: uppercase;
    margin-bottom: 0.6rem;
}

/* メインの作品タイトル */
.novel-title {
    font-family: "Tsukushi A Old Mincho", "貂明朝", var(--serif); /* Adobe Fontsを指定 */
    font-size: clamp(1.8rem, 5vw, 2.5rem); /* スマホ〜PCで大きさを自動調整 */
    font-weight: 600;             /* 程よい太さ */
    color: var(--dark);           /* ダークチャコール */
    letter-spacing: 0.12em;       /* 文字間隔を少し空けて上品に */
    line-height: 1.3;
    margin: 0;
}

/* タイトルの下の短いアクセント線 */
.novel-title-line {
    width: 30px;
    height: 2px;
    background-color: var(--red); /* 朱ローズの短い線 */
    margin: 1.2rem auto 0;
}



```

## css/reset.css

```css
@charset "utf-8";
/* 
  Template & Designed by Asteroid
  https://asteroid19.netlify.app/
*/

/* ******************************************************************************** */
/* リセットCSSと、最低限のスタイル復元。
/* ******************************************************************************** */

/* リセットCSSはここから */
/* Copyright (c) 2021 Elad Shechter - https://github.com/elad2412/the-new-css-reset Released under the MIT license https://opensource.org/license/mit/ */
*:where(:not(html,iframe,canvas,img,svg,video,audio):not(svg *,symbol *)){all:unset;display:revert}*,*::before,*::after{box-sizing:border-box}a,button{cursor:revert}:where(ol,ul){counter-reset:revert}img{max-inline-size:100%;max-block-size:100%}table{border-collapse:collapse}input,textarea{-webkit-user-select:auto}textarea{white-space:revert}meter{-webkit-appearance:revert;appearance:revert}:where(pre){all:revert;box-sizing:border-box}::placeholder{color:unset}:where([hidden]){display:none}:where([contenteditable]:not([contenteditable="false"])){-moz-user-modify:read-write;-webkit-user-modify:read-write;overflow-wrap:break-word;-webkit-line-break:after-white-space;-webkit-user-select:auto}:where([draggable="true"]){-webkit-user-drag:element}:where(dialog:modal){all:revert;box-sizing:border-box}
/* リセットCSSここまで */


/* 特定のセレクタに対してスタイルを復元・指定 */

/* キーボード操作でのフォーカスリングを復元 */
:where(:focus-visible) {
    outline: revert;
}

/* imgを表示した際のズレを解消 */
:where(img) {
    vertical-align: bottom;
}

/* カーソルをポインターに */
a, button, :where([type="checkbox"], [type="radio"], [type="submit"], [type="reset"], [type="button"], select, optgroup, option, label:has([type="checkbox"], [type="radio"]), summary) {
    cursor: pointer;
}

/* 一部のhtmlタグのスタイルを復元 */
:where(em, strong, small, s, cite, q, dfn, abbr, data, time, code, var, samp, kbd, sub, sup, i, b, u, mark, ruby, rb, rt, rtc, rp, bdi, bdo, span, br, wbr, ins, del, center, font) {
    all: revert;
    box-sizing: border-box;
}

```

## html/index.html

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <!-- リセットCSS -->
  <link rel="stylesheet" href="../css/reset.css">
  <!-- 小説以外で最低限適用するベースのCSS。自分のサイトで使用しているCSSに差し替えても動きます。 -->
  <link rel="stylesheet" href="../css/base.css">
  <!-- 小説用のCSS -->
  <link rel="stylesheet" href="../css/novel.css">
  <!-- Font Awesome（アイコン表示用ライブラリ）の読み込み -->
　<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- 閲覧設定切り替えのためのJavaScript -->
  <script defer src="../js/novel.js"></script>

  <!-- ページタイトル -->
  <title>ページタイトルサンプル</title>
</head>
<body>
  <!-- JavaScriptが使用不可なときに断り書きを表示する -->
  <noscript>
    <div class="n-common">
      <div class="n-announce">
        小説閲覧設定の切り替えのためにJavaScriptとWebStorageを使用しています。
      </div>
    </div>
  </noscript>
  <!-- WebStorageが使用不可なときに断り書きを表示する -->
  <div class="n-common n-webstorage-unusable n-webstorage-nospace">
    <!-- WebStorageが使用不可なときに断り書きを表示する -->
    <div class="n-announce n-webstorage-unusable">
      ※小説閲覧設定の切り替えのためにWebStorageを使用しています。ご利用される場合はWebStorageをオンにしたのち、再読み込みをしてください。
    </div>
    <!-- WebStorageの空き容量がないときに断り書きを表示する -->
    <div class="n-announce n-webstorage-nospace">
      ※WebStorageの空き容量がありません。
    </div>
  </div>

  <!-- ここから 小説閲覧設定切り替えのボタン -->
<aside class="n-common n-settings">
  <details class="n-details">
    <!-- summaryで開閉ボタン（アイコン化） -->
    <summary class="n-summary" aria-label="表示設定を開く">
      <i class="fa-solid fa-book n-icon" aria-hidden="true"></i>
      <!-- 歯車マークにしたい場合は fa-book を fa-gear に変更 -->
    </summary>
    <!-- ここから 切り替えボタンの一覧 -->
    <div class="n-collection">

      <!-- ここから 向きの切り替えボタン -->
      <fieldset>
        <legend class="n-collection-item">向き</legend>
        <div class="n-collection-radio">
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="direction" value="tate-dan">縦書き(段)
          </label>
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="direction" value="tate">縦書き
          </label>
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="direction" value="yoko">横書き
          </label>
        </div>
      </fieldset>
      <!-- ここまで 向きの切り替えボタン -->

      <!-- ここから フォントファミリーの切り替えボタン -->
      <fieldset>
        <legend class="n-collection-item">フォント</legend>
        <div class="n-collection-radio">
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="font-family" value="mincho">明朝
          </label>
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="font-family" value="marugothic">丸ゴシック
          </label>
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="font-family" value="gothic">ゴシック
          </label>
        </div>
      </fieldset>
      <!-- ここまで フォントファミリーの切り替えボタン -->

      <!-- ここから 背景色の切り替えボタン -->
      <fieldset>
        <legend class="n-collection-item">背景色</legend>
        <div class="n-collection-radio">
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="bg-color" value="white">白
          </label>
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="bg-color" value="black">黒
          </label>
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="bg-color" value="gray">灰
          </label>
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="bg-color" value="blue">青
          </label>
          <label class="n-label-radio">
            <input class="n-radio" type="radio" name="bg-color" value="yellow">黄
          </label>
        </div>
      </fieldset>
      <!-- ここまで 背景色の切り替えボタン -->

      <!-- ここから フォントサイズの切り替えボタン -->
      <div>
        <label class="n-collection-item n-label-range" for="font-size">サイズ</label>
        <div class="n-auxiliary">
          <div class="n-auxiliary-text">小さい</div><div class="n-auxiliary-text">大きい</div>
        </div>
        <input class="n-range" type="range" id="font-size" name="font-size" min="1" max="11" step="1">
      </div>
      <!-- labelタグのfor属性とinputのid属性でフォームパーツとラベルを紐づける -->
      <!-- ここまで フォントサイズの切り替えボタン -->

      <!-- ここから 行間の切り替えボタン -->
      <div>
        <label class="n-collection-item n-label-range" for="line-height">行間</label>
        <div class="n-auxiliary">
          <div class="n-auxiliary-text">狭い</div><div class="n-auxiliary-text">広い</div>
        </div>
        <input class="n-range" type="range" id="line-height" name="line-height" min="1" max="11" step="1">
      </div>
      <!-- labelタグのfor属性とinputのid属性でフォームパーツとラベルを紐づける -->
      <!-- ここまで 行間の切り替えボタン -->

    </div>
    <!-- ここまで 切り替えボタンの一覧 -->
  </details>
</aside>
  <!-- ここまで 小説閲覧設定切り替えのボタン -->

  <main>


    <div class="novel-title-header">
    <span class="novel-category">SHORT STORY</span>
    <h1 class="novel-title">手袋を買いに</h1>
    <div class="novel-title-line"></div>
</div>



    <!-- ========================================== -->
    <!-- ここから 前書き＆上部ページネーション -->
    <!-- ========================================== -->

    <!-- 上部ページネーション -->
    <div class="n-maegaki">
      <div class="n-pagenation">
        <a href="前話のファイル名.html">前へ</a> ｜ <a href="../index.html">一覧へ戻る</a> ｜ <a href="次話のファイル名.html">次へ</a>
      </div>
    </div>

    <!-- 前書き本文（不要な話ではこの div ブロック全体を削除OK） -->
    <div class="n-maegaki">
      <div class="n-common">
        <!-- ↓ここから前書き本文↓ -->
        <p>【前書き】</p>
        <p>ここに前書きの文章（注意書きやキャプション、作品の前提など）を自由に記入してください。</p>
        <!-- ↑ここまで前書き本文↑ -->
      </div>
    </div>

    <!-- ========================================== -->
    <!-- ここまで 前書き＆上部ページネーション -->
    <!-- ========================================== -->
    


    <!-- ここから 小説の本文 -->
    <!-- n-outerが外枠、n-innerが内枠。-->
    <!-- 閲覧のデフォルトのスタイルをここで設定する。デフォルト設定の内容は、「向き：横書き、フォントファミリー：ゴシック、背景色：灰色、フォントサイズ：6段階目、行間：6段階目」。 -->
    <div id="honbun" class="n-outer direction-yoko font-family-gothic bg-color-gray font-size-6 line-height-6">
      <div class="n-inner">
        <p>　寒い冬が北方から、<ruby>狐<rp>（</rp><rt>きつね</rt><rp>）</rp></ruby>の親子の<ruby>棲<rp>（</rp><rt>す</rt><rp>）</rp></ruby>んでいる森へもやって来ました。</p>
        <p>　<ruby>或朝<rp>（</rp><rt>あるあさ</rt><rp>）</rp></ruby><ruby>洞穴<rp>（</rp><rt>ほらあな</rt><rp>）</rp></ruby>から子供の狐が出ようとしましたが、</p>
        <p>「あっ」と叫んで<ruby>眼<rp>（</rp><rt>め</rt><rp>）</rp></ruby>を<ruby>抑<rp>（</rp><rt>おさ</rt><rp>）</rp></ruby>えながら母さん狐のところへころげて来ました。</p>
        <p>「母ちゃん、眼に何か刺さった、ぬいて<ruby>頂戴<rp>（</rp><rt>ちょうだい</rt><rp>）</rp></ruby>早く早く」と言いました。</p>
        <br>
        <p>　母さん狐がびっくりして、あわてふためきながら、眼を抑えている子供の手を恐る恐るとりのけて見ましたが、何も刺さってはいませんでした。母さん狐は洞穴の入口から外へ出て始めてわけが<ruby>解<rp>（</rp><rt>わか</rt><rp>）</rp></ruby>りました。昨夜のうちに、真白な雪がどっさり降ったのです。その雪の上からお<ruby>陽<rp>（</rp><rt>ひ</rt><rp>）</rp></ruby>さまがキラキラと<ruby>照<rp>（</rp><rt>てら</rt><rp>）</rp></ruby>していたので、雪は<ruby>眩<rp>（</rp><rt>まぶ</rt><rp>）</rp></ruby>しいほど反射していたのです。雪を知らなかった子供の狐は、あまり強い反射をうけたので、眼に何か刺さったと思ったのでした。</p>
        <br>
        <p>　子供の狐は遊びに行きました。<ruby>真綿<rp>（</rp><rt>まわた</rt><rp>）</rp></ruby>のように<ruby>柔<rp>（</rp><rt>やわら</rt><rp>）</rp></ruby>かい雪の上を<ruby>駈<rp>（</rp><rt>か</rt><rp>）</rp></ruby>け<ruby>廻<rp>（</rp><rt>まわ</rt><rp>）</rp></ruby>ると、雪の<ruby>粉<rp>（</rp><rt>こ</rt><rp>）</rp></ruby>が、しぶきのように飛び散って小さい<ruby>虹<rp>（</rp><rt>にじ</rt><rp>）</rp></ruby>がすっと映るのでした。</p>
        <br>
        <p>　すると突然、うしろで、</p>
        <p>「どたどた、ざーっ」と<ruby>物凄<rp>（</rp><rt>ものすご</rt><rp>）</rp></ruby>い音がして、パン粉のような<ruby>粉雪<rp>（</rp><rt>こなゆき</rt><rp>）</rp></ruby>が、ふわーっと子狐におっかぶさって来ました。子狐はびっくりして、雪の中にころがるようにして十<ruby>米<rp>（</rp><rt>メートル</rt><rp>）</rp></ruby>も向こうへ逃げました。何だろうと思ってふり返って見ましたが何もいませんでした。それは<ruby>樅<rp>（</rp><rt>もみ</rt><rp>）</rp></ruby>の枝から雪がなだれ落ちたのでした。まだ枝と枝の間から白い絹糸のように雪がこぼれていました。</p>
        <br>
        <p>　間もなく洞穴へ帰って来た子狐は、</p>
        <p>「お母ちゃん、お手々が冷たい、お手々がちんちんする」と言って、<ruby>濡<rp>（</rp><rt>ぬ</rt><rp>）</rp></ruby>れて<ruby>牡丹色<rp>（</rp><rt>ぼたんいろ</rt><rp>）</rp></ruby>になった両手を母さん狐の前にさしだしました。母さん狐は、その手に、は――っと息をふっかけて、ぬくとい母さんの手でやんわり包んでやりながら、</p>
        <p>「もうすぐ<ruby>暖<rp>（</rp><rt>あたたか</rt><rp>）</rp></ruby>くなるよ、雪をさわると、すぐ暖くなるもんだよ」といいましたが、かあいい坊やの手に<ruby>霜焼<rp>（</rp><rt>しもやけ</rt><rp>）</rp></ruby>ができてはかわいそうだから、夜になったら、町まで行って、<ruby>坊<rp>（</rp><rt>ぼう</rt><rp>）</rp></ruby>やのお手々にあうような毛糸の手袋を買ってやろうと思いました。</p>
        <br>
        <p>　すると帽子屋さんは、おやおやと思いました。狐の手です。狐の手が手袋をくれと言うのです。</p>
      </div>
    </div>
    <!-- ここまで 小説の本文 -->

    <!-- あとがきなど。不要ならば削除 -->
    <div class="n-atogaki">
      <div class="n-common">
        <p>あとがきなど。不要ならば削除。小説閲覧設定切り替えテンプレートです。</p>      
      </div>
    </div>

    <!-- ページネーション。不要ならば削除 -->
    <div class="n-atogaki">
      <div class="n-common n-pagenation">
        <a href="###">前へ</a> ｜ <a href="###">一覧へ戻る</a> ｜ <a href="###">次へ</a>
      </div>
    </div>

  </main>

  <!-- フッター。不要ならば削除 -->
  <footer class="n-common n-footer">
    <div>
      <a href="/index.html">Your Site Name</a>
    </div>
    <div>
      Template by <a href="https://asteroid19.netlify.app/">Asteroid</a>
    </div>
  </footer>

</body>
</html>
```

## js/novel.js

```javascript
/* 
  Template & Designed by Asteroid
  https://asteroid19.netlify.app/
*/
/*
  ※旧バージョンではI'll be NET様のpixiv小説のように縦書き表示する方法-2019版を元に作成していましたが、技術の進化に合わせて全面的に刷新しています。
*/
/* ******************************************************************************** */
/*  I'll be NET jQuery Novel
/*  作成：I'll be NET（http://illbenet.jp/）
/* ******************************************************************************** */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------
   処理：id="honbun"の要素を取得する。要素が存在しなかったらその時点で処理を終了する。
   ------------------------------ */
  const honbun = document.getElementById("honbun");
  if (!honbun) return;

  /* -----------------------------
   以下に定数と関数が書かれている。定数と関数の記述が終了した後、一番最後にメインの処理が記述されている。
   ------------------------------ */

  /* -----------------------------
   定数：localStorageのキー名、テンプレートのバージョン
   ------------------------------ */
  const localStorageKey = "asteroid-novel";
  const templateVersion = "4.1";

  /* -----------------------------
   定数：設定する項目の一覧
   ------------------------------ */
  const editableItems = [
    { key: "direction", type: "radio" },  /* ラジオボタン */
    { key: "font-family", type: "radio" },  /* ラジオボタン */
    { key: "bg-color", type: "radio" }, /* ラジオボタン */
    { key: "font-size", type: "range" },  /* レンジボタンでスライダー */
    { key: "line-height", type: "range" } /* レンジボタンでスライダー */
  ];

  /* -----------------------------
   定数：存在判定を行うフォントの一覧
   ------------------------------ */
  const FONT_CONFIG = {
    /* minchoという値が選ばれたときに判定を行うフォント名および総称フォント名と、webフォントのURL */
    mincho: {
      names: ["Hiragino Mincho ProN", "Noto Serif JP"],
      link: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap"
    },
    /* marugothicという値が選ばれたときに判定を行うフォント名と、webフォントのURL */
    marugothic: {
      names: ["Hiragino Maru Gothic ProN", "Kosugi Maru"],
      link: "https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap"
    }
  };


  /* -----------------------------
     関数：localStorage から小説閲覧設定データを取得する
  ------------------------------ */
  const getNovelData = () => {
    const raw = localStorage.getItem(localStorageKey);
    return raw ? JSON.parse(raw) : {};
  };

  /* -----------------------------
     関数：localStorage の指定項目(key)を更新する
  ------------------------------ */
  const updateNovelData = (key, value) => {
    const data = getNovelData();
    data[key] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  /* -----------------------------
     関数：1つのクラスを更新する
  ------------------------------ */
  const updateClass = (element, prefix, value) => {
    const toRemove = Array.from(element.classList).filter(c => c.startsWith(prefix));
    toRemove.forEach(c => element.classList.remove(c));
    if (value) element.classList.add(prefix + value);
  };

  /* -----------------------------
     関数：データに基づいて複数クラスをまとめて反映する
  ------------------------------ */
  const applyStoredClasses = (data) => {
    editableItems.forEach(item => {
      const value = data[item.key];
      if (value !== "novalue") updateClass(honbun, item.key + "-", value);
      else if (item.type === "radio") applyRadioDefaults(data);
    });
  };

  /* -----------------------------
     関数：ラジオボタンに初期値をセットし、チェック状態にする。localStorageに値があればそれを、なければhtmlのクラス名から判断し、適用する。
  ------------------------------ */
  const applyRadioDefaults = (data) => {
    editableItems.filter(item => item.type === "radio").forEach(item => {
      const key = item.key;
      if (data[key] === "novalue") {
        const matchedClass = Array.from(honbun.classList).find(c => c.startsWith(key + "-"));
        if (matchedClass) {
          const value = matchedClass.substring((key + "-").length);
          const input = document.querySelector(`input[name="${key}"][value="${value}"]`);
          if (input) input.checked = true;
        }
      }
    });
  };

  /* -----------------------------
     関数：フォントの存在を確認する
  ------------------------------ */
  const isFontAvailable = (fontName) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const text = "abcdefghijklmnopqrstuvwxyz0123456789あいうえお";

    const testFont = fontName.toLowerCase() === "serif" ? "serif" : fontName + ", sans-serif";

    context.font = "72px " + testFont;
    const widthFont = context.measureText(text).width;

    context.font = "72px sans-serif";
    const widthSans = context.measureText(text).width;

    return widthFont !== widthSans;
  };

  /* -----------------------------
   関数：head内に特定のlinkタグを一度だけ追加する
   ------------------------------ */
  const loadFontIfMissing = (fontNames, fontLinkUrl) => {
    const anyAvailable = fontNames.some(f => isFontAvailable(f));
    if (anyAvailable) return;

    const headLinks = Array.from(document.head.querySelectorAll("link[href]"));
    const alreadyExists = headLinks.some(link => link.href === fontLinkUrl);
    if (alreadyExists) return;

    const link = document.createElement("link");
    link.href = fontLinkUrl;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  };

  /* -----------------------------
   関数：ページロード後またはラジオボタン選択時にフォントを反映
  ------------------------------ */
  const handleFontLoading = (initial = true, selectedFont) => {
    const data = getNovelData();
    const fontClass = honbun.className;

    const fontKey = initial
      ? Object.keys(FONT_CONFIG).find(key => {
          const stored = data["font-family"];
          return (
            stored === key ||
            (stored === "novalue" && fontClass.includes(`font-family-${key}`))
          );
        }) || null
      : selectedFont;

    if (!fontKey || !(fontKey in FONT_CONFIG)) return;

    const config = FONT_CONFIG[fontKey];
    loadFontIfMissing(config.names, config.link);
  };

  /* -----------------------------
   関数：縦書き時に横スクロール制御
   ------------------------------ */
  const setupTategakiScroll = () => {
    /* すでに登録済みならスキップ */
    if (setupTategakiScroll.initialized) return;
    setupTategakiScroll.initialized = true;

    const handleWheel = (event) => {
      const data = getNovelData();
      const direction = data["direction"];
      if (direction === "tate") {
        event.preventDefault();
        honbun.scrollLeft -= event.deltaY;
      }
    };
    honbun.addEventListener("wheel", handleWheel, { passive: false });
  };


  /* -----------------------------
   関数：ユーザがラジオボタンで切り替えたときに反映する
   ------------------------------ */
  const setupRadioGroup = (optionKey, inputName, classPrefix) => {
    const inputs = document.querySelectorAll(`input[name="${inputName}"]`);
    if (!inputs.length || !honbun) return;

    const data = getNovelData();
    const value = data[optionKey];

    if (value && value !== "novalue") {
      inputs.forEach(input => {
        if (input.value === value) {
          input.checked = true;
          updateClass(honbun, classPrefix + "-", value);
        }
      });
    }

    inputs.forEach(input => {
      input.addEventListener("change", (event) => {
        updateClass(honbun, classPrefix + "-", event.target.value);
        updateNovelData(optionKey, event.target.value);

        if (optionKey === "font-family") {
          handleFontLoading(false, event.target.value);
        }
        if (optionKey === "direction" && event.target.value === "tate") {
          setupTategakiScroll();
        }
      });
    });
  };

  /* -----------------------------
   関数：ユーザがレンジボタン(スライダー)で切り替えたときに反映する
   ------------------------------ */
  const setupSlider = (optionKey, inputSelector, classPrefix) => {
    const input = document.querySelector(inputSelector);
    if (!input || !honbun) return;

    const data = getNovelData();
    const value = data[optionKey];

    if (value && value !== "novalue") {
      input.value = value;
      updateClass(honbun, classPrefix + "-", value);
    }

    input.addEventListener("input", (event) => {
      updateClass(honbun, classPrefix + "-", event.target.value);
      updateNovelData(optionKey, event.target.value);
    });
  };

  /* -----------------------------
   関数：小説閲覧設定のデータを初期化する。localStorageに値があればそれを、なければhtmlのクラス名から判断し、適用する。
   ------------------------------ */
  const initializeNovelData = () => {
    const defaultData = { ver: "novalue" };
    editableItems.forEach(item => defaultData[item.key] = "novalue");

    const storedValue = localStorage.getItem(localStorageKey);

    const data = storedValue
      ? (() => {
          const parsed = JSON.parse(storedValue);
          editableItems.forEach(item => {
            if (!(item.key in parsed)) parsed[item.key] = "novalue";
          });
          localStorage.setItem(localStorageKey, JSON.stringify(parsed));
          return parsed;
        })()
      : (() => {
          const initial = { ...defaultData };
          localStorage.setItem(localStorageKey, JSON.stringify(initial));
          applyRadioDefaults(defaultData);
          console.log("キーが存在しないため、初期値をセットしました。");
          return initial;
        })();

    applyStoredClasses(data);
    handleFontLoading(true);
  };

  /* -----------------------------
   関数：テンプレートのバージョンを確認する
   ------------------------------ */
  const updateNovelVersion = () => {
    const data = getNovelData();
    if (!data.ver || data.ver !== templateVersion) {
      data.ver = templateVersion;

      [
        "localStorage_BgColor",
        "localStorage_FontFamily",
        "localStorage_Tateyoko",
        "localStorage_FontSize",
        "localStorage_slider_size",
        "localStorage_slider_height"
      ].forEach(key => {
        if (localStorage.getItem(key) !== null) {
          localStorage.removeItem(key);
        }
      });

      localStorage.setItem(localStorageKey, JSON.stringify(data));
    }
  };

  /* -----------------------------
   関数：切り替えボタンUI(ラジオボタンやスライダー)を初期化する。ページロード時にlocalStorageの値があればそれを、なければhtmlの指定と一致させ、イベントも設定して使える状態にする。
   ------------------------------ */
  const initializeUIControls = () => {
    editableItems.forEach(item => {
      if (item.type === "radio") {
        setupRadioGroup(item.key, item.key, item.key);
      } else if (item.type === "range") {
        setupSlider(item.key, `input[name='${item.key}']`, item.key);
      }
    });

    const data = getNovelData();
    if (data["direction"] === "tate") {
      setupTategakiScroll();
    }
  };

  /* -----------------------------
   関数：エラー時にエラーメッセージを表示する。
   ------------------------------ */
  const handleLocalStorageError = (e) => {
    if (e instanceof DOMException) {
      if (e.name === "QuotaExceededError" || e.code === 22 || e.code === 1014) {
        document.querySelectorAll(".n-webstorage-nospace")
          .forEach(el => el.classList.add("n-webstorage-nospace-after"));
        console.log("localStorageの空き容量がありません。処理を終了します。");
      } else if (e.name === "SecurityError") {
        document.querySelectorAll(".n-webstorage-unusable")
          .forEach(el => el.classList.add("n-webstorage-unusable-after"));
        console.log("localStorage が使用できません。処理を終了します。");
      } else {
        console.error("予期しない DOMException:", e);
      }
    } else {
      console.error("予期しないエラー:", e);
    }
  };

  /* -----------------------------
   メインの処理：小説閲覧設定切り替えのメインの処理。エラーハンドリングつき。
   ------------------------------ */
  try {
    initializeNovelData();
    updateNovelVersion();
    initializeUIControls();
  } catch (e) {
    handleLocalStorageError(e);
  }

});



/* ==========================================
   小説名前自動変換処理
   ========================================== */
document.addEventListener("DOMContentLoaded", function(){
    // 保存された名前を取得
    const last  = localStorage.getItem("userYour"); 
    const first = localStorage.getItem("userName"); 

    // 苗字（class="user-your"）を一括書き換え
    document.querySelectorAll(".user-your").forEach(el => {
        el.textContent = last ? last : "ミョウジ"; // 未入力時のデフォルト名
    });

    // 名前（class="user-name"）を一括書き換え
    document.querySelectorAll(".user-name").forEach(el => {
        el.textContent = first ? first : "ナマエ"; // 未入力時のデフォルト名
    });
});
```

## long/mahoroba/01.html

```html

```

## long/mahoroba/mahoroba.css

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

## long/mahoroba/mahoroba.html

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

## long/mahoroba/novel.css

```css

```

## long/mahoroba/novel.js

```javascript

```

