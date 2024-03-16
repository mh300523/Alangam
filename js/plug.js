$(document).ready(function () {
 
    
    $(window).on('load', function () {
        //preloader
      $('.pre-loader').fadeOut("500", function () {
        $('body').removeClass("overflow");
        $(this).remove();
      });

      if ($('.pre-loader').length == 0) {
        $('body').removeClass("overflow");
      }
    });
  
    ///////// **mobile size** /////////
    
    $('#navbtn').click(function(){
		$('.main_nav').addClass('over_mob');
		$('.over_click').addClass('on');
		$('body').addClass('scroll_mob');
	});

	$('.closebtn').click(function(){
		$('.main_nav').removeClass('over_mob');
		$('.over_click').removeClass('on');
		$('body').removeClass('scroll_mob');
	});
    
    $('.over_click').click(function(){
		$('.closebtn').trigger('click');
	});
    

    
    if (window.innerWidth <= 767) {
      $('.main_nav .dir_anc').on('click', function () {
            $(this).toggleClass('activel');
            $(this).parent().find('.mega_menu').slideToggle(300);
            $(this).parent().siblings().removeClass('open').children('.mega_menu').slideUp(300);
        });
        
        $('.sub_mega_title').on('click', function() {
            $(this).parent().toggleClass('open').children('.mega_ul').collapse('toggle');
            $(this).parent().siblings().removeClass('open').children('.mega_ul.in').collapse('hide');
        });
    } 
    
    ///////// **main Slider** /////////
    var mainswiper = new Swiper('.main_slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 2000,
    },
    speed: 500,
    updateOnWindowResize: true,
    
        
    // If we need pagination
    pagination: {
      el: '.main_slider .swiper-pagination',
      clickable: true,
    },
    // Navigation arrows   
    navigation: {
      nextEl: '.main_slider .swiper-button-next',
      prevEl: '.main_slider .swiper-button-prev',
    },
  });
    
    
            ///////// **category Slider** /////////
    var categs = new Swiper('.catgs_slider .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
          delay: 20000000,
        },
    speed: 500,
    allowTouchMove: false,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    pagination: {
        el: '.catgs_slider .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            autoplay: {
              delay: 2000,
            },
            allowTouchMove: true,
        },
        767: {
            slidesPerView: 2,
            autoplay: {
              delay: 2000,
            },
            allowTouchMove: true,
        },
        992: {
            slidesPerView: 4,
            autoplay: {
              delay: 2000,
            },
            allowTouchMove: true,
            
        },
        1200: {
            slidesPerView: 4,
        },
    },
    });
    
    
        ///////// **bestseller Slider** /////////
        var bestseller = new Swiper('.proslider1 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
              delay: 2000,
            },
        speed: 500,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.proslider1 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.proslider1 .swiper-button-next',
            prevEl: '.proslider1 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
    
            ///////// **special offers Slider** /////////
        var specialoffers = new Swiper('.proslider2 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
              delay: 2000,
            },
        speed: 500,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.proslider2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.proslider2 .swiper-button-next',
            prevEl: 'proslider2 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
    
    
                ///////// **most viewed Slider** /////////
        var mostviewed = new Swiper('.proslider3 .swiper-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
        autoplay: {
              delay: 2000,
            },
        speed: 500,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.proslider3 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.proslider3 .swiper-button-next',
            prevEl: 'proslider3 .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
    
    
        ///////// **reviews Slider** /////////
     var reviews = new Swiper('.reviews_slider .swiper-container', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
       autoplay: {
          delay: 2000,
        },
         speed: 500,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.reviews_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.reviews_slider .swiper-button-next',
            prevEl: '.reviews_slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2,
            },
        },
    });
     ///////// **partner_slider ** /////////
        var partner_s = new Swiper('.partner_slider .swiper-container', {
        slidesPerView: 7,
        spaceBetween: 30,
        loop: true,
        autoplay: {
        delay: 2000,
        },
        observer: true,
        observeParents: true,
        pagination: {
            el: '.partner_slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.partner_slider .swiper-button-next',
            prevEl: '.partner_slider .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 4,
            },
            992: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 7,
            },
        },
    });
    

  });  

