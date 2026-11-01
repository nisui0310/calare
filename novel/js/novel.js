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