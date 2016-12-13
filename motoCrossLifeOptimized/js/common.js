
$(document).ready(function() {

	// Custom JS
	//$("li").animated("fadeInUp", "fadeOutDown");

	$('.sf-menu').superfish({
		cssArrows: false,
		delay: 300, 
		hoverClass:	'no-class'                       
	});
	
	function heightDetect() {
		$(".head").css("height", $(window).height());
	};
		heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(window).scroll(function() {
		var st = $(this).scrollTop();
			$(".slider-wrap").css({
				"transform" : "translate3d(0px, " + st/2  + "%, .01px)",
				"-webkit-transform" : "translate3d(0px, " + st/2 + "%, .01px)"
			});
	});

	var owl = $('.slider');
		owl.owlCarousel({
			loop : true,
			items : 1,
			itemClass : "slide-wrap",
			nav : true,
			navText : "",
			//autoplay : true,
			//autoplayTimeout : 7000
		});
		$('.prev').click(function() {
			owl.trigger('prev.owl.carousel');
		});
		
		$('.next').click(function() {
			owl.trigger('next.owl.carousel', [300]);
		});
	
	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
		return false;
	});
	
	$(".sf-menu").after("<div id='my-menu'>");
	$(".sf-menu").clone().appendTo("#my-menu");
	$("#my-menu").find("*").attr("style","");
	$("#my-menu").find("ul").removeClass("sf-menu")
		$("#my-menu").mmenu({
				extensions: [ "effect-menu-slide", "effect-listitems-slide", "widescreen", "theme-white"],
			navbar:{
				title : "menu"
			}
		});
	
	var api = $("#my-menu").data( "mmenu" );
			api.bind("closed", function () {
				$(".sandwich").removeClass("active");
			});
	$(".mobile-mnu")
			.click(function() {
				var mnuAPI = $("#my-menu").data( "mmenu" );
				mnuAPI.open();
			$(".sandwich").toggleClass("active");
		});
	
	var $containerMs = $(".masonry-container");
		$containerMs.imagesLoaded(function () {
		$containerMs.masonry({
			columnWidth: ".item",
			itemSelector: ".item"
		});
	});

	$('.popup-with-move-anim').magnificPopup({
		type: 'inline',
		fixedContentPos: false,
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});
});
