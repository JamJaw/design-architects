$(function(){
    /* header btn ***********************************************************/
    $(".openbtn7").click(function () {
    $(this).toggleClass('active');
    });

    /* slider ***************************************************************/
    $('.slider').slick({
        autoplay: true, //自動でスクロール
        autoplaySpeed: 2500, //自動再生のスライド切り替えまでの時間を設定
        speed: 1000, //スライドが流れる速度を設定
    });

    /* header nav ***************************************************************/
    $(function() {
    let headNav = $('header');
    //scrollしたとき
    $(window).on('scroll', function () {
    //現在の位置が200pxより大きいかつ、クラスfixedが付与されていない（false）時
    if($(this).scrollTop() > 660 && headNav.hasClass('fixed') == false) {
    //クラスfixedを付与
    headNav.addClass('fixed');
    }
    });
    });
    $(function() {
    let headNav = $('.menu-btn2');
    //scrollしたとき
    $(window).on('scroll', function () {
    //現在の位置が200pxより大きいかつ、クラスfixedが付与されていない（false）時
    if($(this).scrollTop() > 660 && headNav.hasClass('none') == false) {
    //クラスfixedを付与
    headNav.addClass('none');
    }
    });
    });

    /* modal ************************************************************/
     $(".menu-btn").click(function () {
    $(".modal").toggleClass('modal-open');
    });
     $(".menu-btn").click(function () {
    $(".opentbn72 span").toggleClass('menu-btn-color');
    });


});