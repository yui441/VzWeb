
  //ハンバーガーメニュー
$(window).on('load', function () {
  $(function () {
    $(".hamburger-button").click(function () {
      $(this).toggleClass("active");
      $(".nav-sp").toggleClass("active");
    });
  });
});

/*
ページが完全に読み込まれる。
$(window).on('load', function () {

ユーザーがハンバーガーボタン（.hamburger-button）をクリックする。
$(".hamburger-button").click(function () {

ハンバーガーボタンにactiveクラスが追加され、スタイルが変化する（例えばアニメーション）。
$(this).toggleClass("active");

.nav-sp（ナビゲーションメニュー）が表示・非表示を切り替える（displayプロパティやtransformなどで制御している）。
 $(".nav-sp").toggleClass("active");
*/
