$(function () {

// ============================ RATE ===============================

  $(".header__rateYo").rateYo({
    rating: 4.5,
    spacing: "5px",
    precision: 2,
    starSvg: '<svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 35 36" xmlns="http://www.w3.org/2000/svg"><path d="M11.8231 2.29087C12.9532 0.176266 15.9846 0.176268 17.1148 2.29087L19.3148 6.40731C19.7419 7.20653 20.5074 7.76985 21.3975 7.93994L26.009 8.82117C28.3232 9.26341 29.2479 12.0784 27.6466 13.8067L24.3545 17.36C23.7511 18.0114 23.4671 18.8966 23.5791 19.7774L24.188 24.5654C24.4884 26.9283 22.0478 28.6821 19.9041 27.6437L15.7768 25.6444C14.9508 25.2443 13.9871 25.2443 13.1611 25.6444L9.03375 27.6437C6.89008 28.6821 4.44942 26.9283 4.74988 24.5654L5.35872 19.7774C5.47072 18.8966 5.1868 18.0114 4.58335 17.36L1.29126 13.8067C-0.310014 12.0784 0.614609 9.26341 2.92883 8.82117L7.54035 7.93994C8.43044 7.76985 9.19596 7.20653 9.62309 6.4073L11.8231 2.29087Z" fill-rule="nonzero"/></svg>'
  });

  $(".header__rateYo").rateYo("option", "normalFill", "#D7D1C7");
  $(".header__rateYo").rateYo("option", "ratedFill", "#FFB648");

  var mixer = mixitup('.blog__list');

  // ==================== BLOG =======================

  $('.blog__filter-btn').on('click', function () {
    $('.blog__filter-btn').removeClass('blog__filter-item--active')
    $(this).addClass('blog__filter-item--active')
  })

  // ============================= SLAIDER =============================
  $('.customers__slider').slick({
    infinite: true,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    draggable: false,
    dots: true,
    appendDots: $('.customers__slider-buttons'),
    
    dots: true,
        appendDots: $('.customers__slider-buttons'),
        responsive: [
            {
                breakpoint: 730,
                settings: {
                    slidesToShow: 1
                },
            },
            {
                breakpoint: 570,
                settings: {
                    draggable: true,
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ],

  })
  $('.customers__slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
  })
  $('.customers__slider-next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
  })


  // ============================= ACCORDEON ======================

  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link--active')) {
      $(this).removeClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideUp()
    } else {
      $('.questions__acc-link').removeClass('questions__acc-link--active')
      $('.questions__acc-text').slideUp()
      $(this).addClass('questions__acc-link--active')
      $(this).children('.questions__acc-text').slideDown()
    }
  })

  let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 40.705186968505195, lng: -74.01377966739278 },
        zoom: 14,
    });
  }
  
  window.initMap = initMap;

  $(".header__nav-list a, .header__top-btn, .footer__bottom-link, .header__content-btn, .about__button, .touch__button").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  })

// ============================= BURGER ======================

  $('.burger, .overlay').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top--open')
    $('.overlay').toggleClass('overlay--show')
    $('body').toggleClass('lock')
    

  })

  $('.header__nav-link').on('click', function (e) {
    e.preventDefault()
    $('.header__top').removeClass('header__top--open')
    $('.overlay').removeClass('overlay--show')
    $('body').removeClass('lock')
    

  })


  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
        $('.burger').addClass('burger--follow')
    } else {
        $('.burger').removeClass('burger--follow')
    }
}, 0);



});



