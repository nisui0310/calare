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
    const listItems = document.querySelectorAll('.gallerylist__item');

    let scrollPosition = 0;

    const openDetail = (src, caption) => {
        scrollPosition = window.pageYOffset;

        fullImage.src = src;
        fullImage.alt = caption || '';
        detailCaption.innerHTML = caption || '';
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

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            openDetail(
                item.getAttribute('data-full'),
                item.getAttribute('data-caption')
            );
        });
    });

    // 画像以外(背景・余白・キャプション)をクリックしたら閉じる
    detailView.addEventListener('click', closeDetail);

    // 画像自体のクリックだけは閉じる処理を止める
    fullImage.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !detailView.classList.contains('hidden')) {
            closeDetail();
        }
    });
});