/* ==========================================
   小説名前自動変換処理
   ========================================== */
document.addEventListener("DOMContentLoaded", function(){
    // 保存された名前を取得
    const last  = localStorage.getItem("Your"); 
    const first = localStorage.getItem("Name"); 

    // 苗字（class="user-your"）を一括書き換え
    document.querySelectorAll(".user-your").forEach(el => {
        el.textContent = last ? last : "ミョウジ"; // 未入力時のデフォルト名
    });

    // 名前（class="user-name"）を一括書き換え
    document.querySelectorAll(".user-name").forEach(el => {
        el.textContent = first ? first : "ナマエ"; // 未入力時のデフォルト名
    });
});