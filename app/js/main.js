$(function () {
  $(window).on('load', function () {
    $('.preloader').addClass("preloader-remove");     
  });

  $(window).scroll(function(){
    if($(this).scrollTop()>140){
        $('.header__menu-fixed').addClass('menu__fixed');
        $('.header__menu-fixed').css('display', 'block');
    }
    else if ($(this).scrollTop()<140){
        $('.header__menu-fixed').removeClass('menu__fixed');
        $('.header__menu-fixed').css('display', 'none');        
    }
  }); 
  
  $('.menu__mobile').on('click', function () {
    $('.menu__mobile-inner').removeClass('menu__mobile-inner--close');
  });
  $('.menu__mobile-btnclosed').on('click', function () {
    $('.menu__mobile-inner').addClass('menu__mobile-inner--close');
  });

  
  $('.header__slider').slick({
    arrows: false,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.offers__slider-box').slick({
    prevArrow: '<button type="button" class="offers__slider-arrow offers__slider-arrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="offers__slider-arrow offers__slider-arrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.offers-innovation__slider-box').slick({
    prevArrow: '<button type="button" class="offers-innovation__slider-arrow offers-innovation__slider-arrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="offers-innovation__slider-arrow offers-innovation__slider-arrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.offers-identity__slider-box').slick({
    prevArrow: '<button type="button" class="offers-identity__slider-arrow offers-identity__slider-arrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="offers-identity__slider-arrow offers-identity__slider-arrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.offers-universalism__slider-box').slick({
    prevArrow: '<button type="button" class="offers-universalism__slider-arrow offers-universalism__slider-arrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="offers-universalism__slider-arrow offers-universalism__slider-arrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.offers-ideological__slider-box').slick({
    prevArrow: '<button type="button" class="offers-universalism__slider-arrow offers-universalism__slider-arrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="offers-universalism__slider-arrow offers-universalism__slider-arrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.offers-practicality__slider-box').slick({
    prevArrow: '<button type="button" class="offers-universalism__slider-arrow offers-universalism__slider-arrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="offers-universalism__slider-arrow offers-universalism__slider-arrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });

  $('.about__slider-box').slick({
    prevArrow: '<button type="button" class="about__slider-arrow about__slider-arrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="about__slider-arrow about__slider-arrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        }
      }
    ]
  });

  $('.reviews__slider-box').slick({
    prevArrow: '<button type="button" class="reviews__slider-arrow reviews__slider-arrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="reviews__slider-arrow reviews__slider-arrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $(".rate-yo").rateYo({
    normalFill: "#C4C4C4",
    ratedFill: "#fa9300",
    spacing: "3px",
    starWidth: "15px"
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 769) {
      $('.results__certificate:not(.slick-initialized)').slick({
        prevArrow: '<button type="button" class="results__certificate-sliderarrow results__certificate-sliderarrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="results__certificate-sliderarrow results__certificate-sliderarrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
        dots: true,
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '180px',
      });
    } else {
      $(".results__certificate.slick-initialized").slick("unslick");
    }
  });

  $(window).on('load resize', function() {
    if ($(window).width() < 769) {
      $('.results__awards:not(.slick-initialized)').slick({
        prevArrow: '<button type="button" class="results__awards-sliderarrow results__awards-sliderarrowleft"><img src="images/icons/arrow-prev.png" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="results__awards-sliderarrow results__awards-sliderarrowright"><img src="images/icons/arrow-next.png" alt="arrow right"></button>',
        dots: true,
        slidesToShow: 1,
      });
    } else {
      $(".results__awards.slick-initialized").slick("unslick");
    }
  });  
    
})