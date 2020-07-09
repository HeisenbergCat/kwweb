jQuery(document).ready(function() {
    "use strict";
    jQuery(window).load(function() {
        jQuery(".status").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });
    $(window).on('ready , scroll', function() {
        if ($(window).scrollTop() > 30) {
            $('.clean-main-menu').addClass('minified');
        } else {
            $('.clean-main-menu').removeClass('minified');
        }
    });
    jQuery(".nav a").on("click", function() {
        jQuery("#nav-menu").removeClass("in").addClass("collapse");
    });
    $('#nav-menu').onePageNav({
        currentClass: 'active',
        scrollSpeed: 500,
        easing: 'linear'
    });
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 250,
        mobile: true,
        live: true,
        callback: function(box) {}
    });
    wow.init();
    // $.scrollUp({
    //     scrollName: 'scrollUp',
    //     scrollDistance: 300,
    //     scrollFrom: 'top',
    //     scrollSpeed: 5000,
    //     easingType: 'linear',
    //     animation: 'fade',
    //     animationInSpeed: 200,
    //     animationOutSpeed: 200,
    //     scrollText: 'Scroll to top',
    //     scrollTitle: false,
    //     scrollImg: true,
    //     activeOverlay: false,
    //     zIndex: 2147483647
    // });
    var nice = $("html").niceScroll({
        cursorborderradius: 0,
        cursorwidth: "8px",
        cursorfixedheight: 150,
        cursorcolor: "#6CB670",
        zindex: 9999,
        cursorborder: 0,
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $("#scrollUp").fadeIn(200);
        } else {
            $("#scrollUp").fadeOut(200);
        }
    });	
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $("#scrollUp").fadeIn(200);
        } else {
            $("#scrollUp").fadeOut(200);
        }
    });
    $('#scrollUp').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });		
    $('.clean-featured-work-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    $("#team-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [520, 1],
        autoPlay: 4000,
        navigation: false
    });
    $("#featured-work-slider").owlCarousel({
        items: 3,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 3],
        itemsTabletSmall: [767, 2],
        itemsMobile: [500, 1],
        // autoPlay: 4000,
        navigation: false,
		pagination:false,
		//navigation:true,
		//navText:["prev","next"]
		// stopOnHover:true	
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
    });
    $("#related-works-slider").owlCarousel({
        items: 4,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        autoPlay: 4000,
        navigation: false
    });
    $("#clean-testimonial").owlCarousel({
        items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [520, 1],
        // autoPlay: 5000,
		// navigation:true,
		// navText:["prev","next"],
		pagination:false
		// stopOnHover:true
    });
	 $('.lan_owl-prev').on('click',function() {
	 	$('#clean-testimonial').data('owlCarousel').prev();
	 });
	 $('.lan_owl-next').on('click',function() {
	 	$('#clean-testimonial').data('owlCarousel').next();
	 });
    $(window).stellar({
        responsive: true,
        positionProperty: 'position'
    });
    var $container = $('.clean-portfolio-items');
    $container.isotope({
        filter: '*',
        itemSelector: '.item',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
    $('#clean-portfolio-filter ul li a').on('click', function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    });
    var $optionSets = $('#clean-portfolio-filter ul')
      , $optionLinks = $optionSets.find('a');
    $optionLinks.on('click', function() {
        var $this = $(this);
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('#clean-portfolio-filter ul');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });
    $('#clean-slider').sliderPro({
        width: '100%',
        height: 860,
        fade: true,
        // arrows: true,
        waitForLayers: true,
        buttons: true,
        autoplay: true,
        autoScaleLayers: false,
        imageScaleMode: 'cover',
        slideAnimationDuration: 1500,
        breakpoints: {
			1500:{
				height: 860
			},
			1440:{
				height: 770
			},
			1024:{
				height: 542
			},			
			768:{
				height: 414
			},			
            600: {
                height: 480
            },
            375: {
                height: 250
            },
            320: {
                height: 425
            }						
        }
    });
    $('#contact-submit').click(function(e) {
        e.preventDefault();
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
        if (name.length == 0) {
            var error = true;
            $('#name').css("border-color", "#D8000C");
        } else {
            $('#name').css("border-color", "#666");
        }
        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
            $('#email').css("border-color", "#D8000C");
        } else {
            $('#email').css("border-color", "#666");
        }
        if (message.length == 0) {
            var error = true;
            $('#message').css("border-color", "#D8000C");
        } else {
            $('#message').css("border-color", "#666");
        }
        if (Most.length == 0) {
            var error = true;
            $('#Most').css("color", "#D8000C");
        } else {
            $('#Most').css("color", "#666");
        }		
        if (error == false) {
            $('#contact-submit').attr({
                'disabled': 'false',
                'value': 'Sending...'
            });
            $.post("sendmail.php", $("#contact-form").serialize(), function(result) {
                if (result == 'sent') {
                    $('#cf-submit').remove();
                    $('#mail-success').fadeIn(500);
                } else {
                    $('#mail-fail').fadeIn(500);
                    $('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    });
	//swiper
	var mySwiper = new Swiper('.swiper-container',{
		direction: 'horizontal', 
		height:371,
		slidesPerView: 1,
		spaceBetween: 40,
		grabCursor : true,
		centeredSlides: true,
		initialSlide :1,
		loop : true,
		// centeredSlidesBounds: true,	
		breakpoints: { 
			320: {  //当屏幕宽度大于等于320
			  initialSlide : 0,
			  slidesPerView: 2,
			  spaceBetween: 10
			},
			768: {  //当屏幕宽度大于等于768
			  initialSlide : 1,
			  slidesPerView: 3,
			  spaceBetween: 20
			},
			1280: {  //当屏幕宽度大于等于1280
			  initialSlide : 1,
			  slidesPerView: 3,
			  spaceBetween: 30
			}
		},
		//窗口缩放时设置width和height
		on: {
		   resize: function(){
			 this.params.width = window.innerWidth;
			 this.params.height = window.innerHeight;
			 this.update();
		   },
		},
		//按钮
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			}

	})
    $('.nav_iphone').click(function() {
        $('#iphone_nav').fadeIn(200);
    })
	$('.search_icon').click(function(){
		$('#iphone_nav').fadeIn(200);
	})
    $('.language').click(function() {
        $('#language_nav').fadeIn(200);
    })
    $('.nav__icon').click(function() {
        $('#iphone_nav').fadeOut(200);
		$('#language_nav').fadeOut(200);
    })
	$('.cover_nav li a').click(function() {
		$('#iphone_nav').fadeOut(200);
		$('#language_nav').fadeOut(200);
	})
});
