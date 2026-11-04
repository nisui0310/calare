/* =====================================================
   ss.html 専用：ジャンル絞り込み（OR検索）
   - ジャンルが未選択なら全作品を表示
   - 選択状態は URL のハッシュ（例：ss.html#kgrbc,wt）に保存し、リロードで復元
   - ジャンルの表示名は、上部のタグ（.ss-tag）の文字が唯一の定義元
     各作品のジャンル表示は、起動時にそこから自動で書き換えます
   ===================================================== */
(function () {
    'use strict';

    const filter  = document.getElementById('ss-filter');
    const list    = document.getElementById('ss-list');
    if (!filter || !list) return;

    const tags     = Array.from(filter.querySelectorAll('.ss-tag'));
    const countEl  = filter.querySelector('.ss-count');
    const clearBtn = filter.querySelector('.ss-clear');
    const emptyEl  = document.getElementById('ss-empty');

    // ジャンル名の定義（コード → 表示名）
    const labels = Object.create(null);
    tags.forEach(t => { labels[t.dataset.genre] = t.textContent.trim(); });

    // 作品ごとの情報
    const items = Array.from(list.querySelectorAll('.ss')).map(el => {
        const btns = Array.from(el.querySelectorAll('.ss-genre'));
        btns.forEach(b => {
            const g = b.dataset.genre;
            if (g in labels) b.textContent = labels[g];
        });
        return { el: el, btns: btns, genres: btns.map(b => b.dataset.genre) };
    });

    let selected = [];

    /* ---------- URL ハッシュ ---------- */
    const readHash = () => {
        let raw = '';
        try { raw = decodeURIComponent(location.hash.slice(1)); } catch (e) {}
        return raw.split(',')
            .map(s => s.trim())
            .filter((g, i, a) => g in labels && a.indexOf(g) === i);
    };

    const writeHash = () => {
        const h = selected.length ? '#' + selected.map(encodeURIComponent).join(',') : '';
        if (location.hash === h) return;
        try {
            history.replaceState(null, '', location.pathname + location.search + h);
        } catch (e) {
            location.hash = h.slice(1);
        }
    };

    /* ---------- 表示の更新 ---------- */
    const render = () => {
        let shown = 0;

        items.forEach(it => {
            const show = selected.length === 0 || it.genres.some(g => selected.indexOf(g) > -1);
            it.el.hidden = !show;
            if (show) shown++;
            it.btns.forEach(b => {
                const on = selected.indexOf(b.dataset.genre) > -1;
                b.classList.toggle('is-active', on);
                b.setAttribute('aria-pressed', on ? 'true' : 'false');
            });
        });

        tags.forEach(t => {
            const on = selected.indexOf(t.dataset.genre) > -1;
            t.classList.toggle('is-active', on);
            t.setAttribute('aria-pressed', on ? 'true' : 'false');
        });

        if (countEl) {
            countEl.textContent = selected.length
                ? shown + '件 / 全' + items.length + '件'
                : '全' + items.length + '件';
        }
        if (clearBtn) clearBtn.hidden = selected.length === 0;
        if (emptyEl)  emptyEl.hidden  = shown > 0;
    };

    const toggle = (g) => {
        const i = selected.indexOf(g);
        if (i > -1) selected.splice(i, 1);
        else selected.push(g);
    };

    /* ---------- クリック（タグ・作品内ジャンル・解除） ---------- */
    document.addEventListener('click', (e) => {
        const btn = e.target.closest && e.target.closest('.ss-tag, .ss-genre, .ss-clear');
        if (!btn) return;

        if (btn.classList.contains('ss-clear')) {
            selected = [];
        } else {
            const g = btn.dataset.genre;
            if (!(g in labels)) return;       // タグ未定義のジャンルは無視
            toggle(g);
        }

        render();
        writeHash();

        // 作品内のジャンルを押した場合、絞り込み欄が画面外ならそこまで戻す
        if (btn.classList.contains('ss-genre') && filter.getBoundingClientRect().top < 0) {
            filter.scrollIntoView({ block: 'start' });
        }
    });

    // 手動でハッシュを書き換えたとき
    window.addEventListener('hashchange', () => {
        selected = readHash();
        render();
    });

    /* ---------- 初期表示：ハッシュがあれば復元、なければ全件 ---------- */
    selected = readHash();
    render();
})();