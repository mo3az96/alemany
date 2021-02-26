$(window).on('load', function () {
    var popup = localStorage.getItem('newsletter-popup');
    if (popup != 0) {
        $("body").addClass("overflow");
        $(".mo-modal-overlay").fadeIn(500)
        $(".mo-modal").addClass("mo-modal-in");
    }
});
$(document).ready(function () {
    ///////// **modal** /////////
    $('.mo-modal-overlay').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
        localStorage.setItem('newsletter-popup', 0);
    });
    $('.mo-modal').click(function (e) {
        e.stopPropagation();
    });
    $('.mo-modal-close').click(function () {
        $(".mo-modal-overlay").fadeOut(400);
        $(".mo-modal").removeClass("mo-modal-in");
        $("body").removeClass("overflow");
        localStorage.setItem('newsletter-popup', 0);
    });
    //////////** fixed **//////////
    if ($(this).scrollTop() >= 35) {
        $("body").addClass("header-scroll");
        $(".header-message").hide();
    } else {
        $("body").removeClass("header-scroll");
        $(".header-message").show();
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 35) {
            $("body").addClass("header-scroll");
            $(".header-message").slideUp(300);
        } else {
            $("body").removeClass("header-scroll");
            $(".header-message").slideDown(300);
        }
    });
    //////////** header msg **//////////
    $(".header-message span.msg-close").click(function () {
        $(".header-message").slideUp(function () {
            $(".header-message").remove()
        });
    });

    //////////** main slider **//////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        spaceBetween: 10,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        // },
        navigation: {
            nextEl: '.main-slider .swiper-btn-next',
            prevEl: '.main-slider .swiper-btn-prev',
        },
    });
    //////////** cats slider **//////////
    var catswiper = new Swiper('.cats-slider .swiper-container', {
        // loop: true,
        pagination: {
            el: '.cats-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 5,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 5,
            },
        },
    });
    //////////** product slider **//////////
    sliderinit('.cat-slide-1')
    sliderinit('.cat-slide-2')
    sliderinit('.cat-slide-3')
    sliderinit('.cat-slide-4')
    //////////** search **//////////
    $('.search-btn').click(function () {
        $(".search-overlay, .search-cont").fadeIn(300);
        $(".search-form").addClass("active");
        $("body").addClass("overflow");
    });

    $('.search-overlay, .close-btn').click(function () {
        $(".search-overlay, .search-cont").fadeOut(400);
        $(".search-form").removeClass("active");
        $("body").removeClass("overflow");
    });
    //////////** menu **//////////
    $('.setting-anchor').click(function () {
        $(".setting-anchor").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(300);
        } else {
            $(this).siblings().slideUp(300);
        }
        $(".setting-anchor").not(this).siblings().slideUp(300);
    })
    $('.have_sub>a').click(function () {
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(300);
        } else {
            $(this).siblings().slideUp(300);
        }
        $(".setting-anchor").not(this).siblings().slideUp(300);
    })
    $('.menu-btn').click(function () {
        $("nav").addClass("active");
        $(".overlay").fadeIn(300);
        $("body").addClass("overflow");
    })
    $('.overlay,.close-btn').click(function () {
        $("nav").removeClass("active");
        $(".overlay").fadeOut(400);
        $("body").removeClass("overflow");
    })
});

sliderinit = function (section_name) {
    var productswiper = new Swiper(section_name + ' .swiper-container', {

        loop: true,
        pagination: {
            el: section_name + ' .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: section_name + ' .swiper-btn-next',
            prevEl: section_name + ' .swiper-btn-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 17,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });
}