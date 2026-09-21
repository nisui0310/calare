// スマホ用メニュー　クラス追加
const ham = document.querySelector("#js-hamburger");
const nav = document.querySelector("#js-globalnav");
const Main = document.querySelector("#js-main");

ham.addEventListener("click", function () {
 ham.classList.toggle("_active");
 nav.classList.toggle("_active");
 Main.classList.toggle("_darker");
});

// 子メニュー表示
const parentMenu = document.querySelectorAll("._has-child > a");
for (let i = 0; i < parentMenu.length; i++) {
 parentMenu[i].addEventListener("click", function(e){
  e.preventDefault();
  this.nextElementSibling.classList.toggle("active");
 })
}



// ページUP
const PageUpBtn = document.querySelector('#js-pageup');

window.addEventListener("scroll", () =>  {
 PageUpBtn?.classList.toggle("_active", window.scrollY > 700);
});

PageUpBtn?.addEventListener('click', () => {
 window.scrollTo({
  top: 0,
  behavior: 'smooth'
 });
});


// Gallery
document.addEventListener('DOMContentLoaded', () => {
    const detailView = document.getElementById('detail-view');
    const fullImage = document.getElementById('full-image');
    const detailCaption = document.getElementById('detail-caption');
    const prevBtn = document.getElementById('detail-prev');
    const nextBtn = document.getElementById('detail-next');
    const listItems = Array.from(document.querySelectorAll('.gallerylist__item'));

    let scrollPosition = 0;
    let currentIndex = 0;

    const renderItem = (index) => {
        const item = listItems[index];
        fullImage.src = item.getAttribute('data-full');
        fullImage.alt = item.getAttribute('data-caption') || '';
        detailCaption.innerHTML = item.getAttribute('data-caption') || '';
    };

    const openDetail = (index) => {
        currentIndex = index;
        scrollPosition = window.pageYOffset;

        renderItem(currentIndex);
        detailView.classList.remove('hidden');

        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    };

    const closeDetail = () => {
        document.documentElement.style.scrollBehavior = 'auto';

        detailView.classList.add('hidden');
        fullImage.src = '';
        fullImage.alt = '';
        detailCaption.innerHTML = '';

        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);

        setTimeout(() => {
            document.documentElement.style.scrollBehavior = '';
        }, 0);
    };

    const showPrev = () => {
        currentIndex = (currentIndex - 1 + listItems.length) % listItems.length;
        renderItem(currentIndex);
    };

    const showNext = () => {
        currentIndex = (currentIndex + 1) % listItems.length;
        renderItem(currentIndex);
    };

    listItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openDetail(index);
        });
    });

    detailView.addEventListener('click', closeDetail);

    fullImage.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // 矢印ボタン(背景クリックの閉じる処理に巻き込まれないよう stopPropagation)
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrev();
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showNext();
    });

    // キーボード操作
    document.addEventListener('keydown', (e) => {
        if (detailView.classList.contains('hidden')) return;

        if (e.key === 'Escape') closeDetail();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    // スワイプ(フリック)操作
    let touchStartX = 0;
    let touchEndX = 0;
    const SWIPE_THRESHOLD = 50; // これ以上動いたらスワイプと判定(px)

    detailView.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    detailView.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;

        if (Math.abs(diff) > SWIPE_THRESHOLD) {
            if (diff > 0) {
                showPrev(); // 右にスワイプ → 前の画像
            } else {
                showNext(); // 左にスワイプ → 次の画像
            }
        }
    });
});




// 作品一覧ページの絞り込み（カテゴリ・要素タグ。お気に入りも要素タグの一種として扱う）
// このスクリプトは .worklist があるページでのみ動きます。
(function () {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.worklist__item');
  const emptyMsg = document.querySelector('.worklist-empty');

  if (!items.length) return;

  const selected = { category: new Set(), tag: new Set() };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const type = btn.dataset.filterType;
      const value = btn.dataset.filterValue;

      if (selected[type].has(value)) {
        selected[type].delete(value);
        btn.classList.remove('is-active');
      } else {
        selected[type].add(value);
        btn.classList.add('is-active');
      }
      applyFilter();
    });
  });

  function applyFilter() {
    let visibleCount = 0;

    items.forEach((item) => {
      const category = item.dataset.category;
      const tags = Array.from(item.querySelectorAll('.worklist__tag')).map(
        (t) => t.dataset.filter
      );

      // カテゴリは選択したどれか1つでも一致すればOK（複数選択可）
      const categoryMatch =
        selected.category.size === 0 || selected.category.has(category);

      // タグ（お気に入りも同じ扱い）は選んだどれか1つでも含んでいればOK（OR）
      const tagMatch =
        selected.tag.size === 0 || tags.some((t) => selected.tag.has(t));

      const show = categoryMatch && tagMatch;
      item.classList.toggle('is-hidden', !show);
      if (show) visibleCount++;
    });

    if (emptyMsg) {
      emptyMsg.classList.toggle('is-visible', visibleCount === 0);
    }
  }
})();