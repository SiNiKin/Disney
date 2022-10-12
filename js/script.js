$(document).ready(function () {

    var mySwiper = new Swiper('.swiper-container', {

        loop: true,
        speed: 1200,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto"

    });

    var mySwiper2 = new Swiper('.swiper-container-2', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper3 = new Swiper('.swiper-container-3', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper4 = new Swiper('.swiper-container-4', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper5 = new Swiper('.swiper-container-5', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper6 = new Swiper('.swiper-container-6', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper7 = new Swiper('.swiper-container-7', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper8 = new Swiper('.swiper-container-8', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper9 = new Swiper('.swiper-container-9', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper10 = new Swiper('.swiper-container-10', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper11 = new Swiper('.swiper-container-11', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    var mySwiper12 = new Swiper('.swiper-container-12', {

        loop: true,
        speed: 1200,
        grabCursor: true,
        slidesPerView: "auto"

    });

    $('.disney .container .disney-btn-box .disney-ani').addClass('active');

    //디즈니 버튼 active 이벤트 + 실사 애미 슬라이드 opacity

    $('.disney .container .disney-btn-box .disney-top-btn').on('click', function (e) {
        e.preventDefault();

        $('.disney .container .disney-btn-box .disney-ani').removeClass('active');
        $(this).addClass('active');
        

        var btn1 = $('.disney .container .disney-btn-box .disney-ani');
        var btn2 = $('.disney .container .disney-btn-box .disney-real');
        var btn1_c = $('.disney .container .disney-btn-box .disney-ani').hasClass('active');
        var btn2_c = $('.disney .container .disney-btn-box .disney-real').hasClass('active');

        var ani = $('.disney .container .disney-ani-vod .swiper-container-2');
        var real = $('.disney .container .disney-ani-vod .swiper-container-3');

        if(btn1_c == true){
            $(btn2).removeClass('active');
            $(ani).css({opacity : 1});
            $(real).css({opacity : 0});
        }else if(btn2_c == true){
            $(btn1).removeClass('active');
            $(ani).css({opacity : 0});
            $(real).css({opacity : 1});
        }

    });

    $('.viewing .swiper-container-5 .view-slide').mouseenter(function(){
        $(this).children('.toy-video-pre').css('opacity','0');
        $(this).children('.fro-video-pre').css('opacity','0');
        $(this).children('.spider-video-pre').css('opacity','0');
        
        $(this).children('video').get(0).play();
        console.log('play');
        //동영상에 마우스 올리면 .play() 재생

    });
    $('.viewing .swiper-container-5 .view-slide').mouseout(function(){
        $(this).children('video').get(0).pause();
        $(this).children('video').get(0).currentTime = 0;

        $(this).children('.toy-video-pre').css('opacity','1');
        $(this).children('.fro-video-pre').css('opacity','1');
        $(this).children('.spider-video-pre').css('opacity','1');

        console.log('pause');
         //동영상에 마우스 내리면 .pause() 정지
    });

    media();
    function media(){
        var windowWidth = $(window).width();
        if(windowWidth >= 375){
            $('.viewing .swiper-container-5 .view-slide').click(function(){

                $(this).children('.toy-video-pre').css('opacity','0');
                $(this).children('.fro-video-pre').css('opacity','0');
                $(this).children('.spider-video-pre').css('opacity','0');
            
                $(this).children('video').get(0).play();
                console.log('play');
            
            });
        }
    };
        

    // $('.viewing .swiper-container-5 .view-slide').click(function(){

    //     $(this).children('.toy-video-pre').css('opacity','0');
    //     $(this).children('.fro-video-pre').css('opacity','0');
    //     $(this).children('.spider-video-pre').css('opacity','0');

    //     $(this).children('video').get(0).play();
    //     console.log('play');

    // });

    // $('.viewing .swiper-container-5 .view-slide').mouseout(function(){
    //     $(this).children('video').get(0).pause();
    //     $(this).children('video').get(0).currentTime = 0;

    //     $(this).children('.toy-video-pre').css('opacity','1');
    //     $(this).children('.fro-video-pre').css('opacity','1');
    //     $(this).children('.spider-video-pre').css('opacity','1');

    //     console.log('pause');
    //      //동영상에 마우스 내리면 .pause() 정지
    // });
    


});