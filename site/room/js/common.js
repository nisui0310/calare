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