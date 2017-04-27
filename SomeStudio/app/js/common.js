$(function () {

	$("#my-menu").mmenu({
		extensions:['theme-dark', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src ="img/favicon/logo.svg" alt="Фотостудия Pro Studio>"'
		},
		offCanvas: {
			position: "right"
		}
	});
	
	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function(){
		$('.hamburger').addClass('is-active');
	}).bind('closed', function(){
		$('.hamburger').removeClass('is-active');
	});
	
	$('.carousel-service').on('initialized.owl.carousel', function(){
		setTimeout(function(){
			carouselServise();
		}, 100);
	});
	
	$('.carousel-service').owlCarousel({
		loop: true,
		dots: false,
		nav: true,
		smartSpeed: 700,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1100: {
				items: 3
			}
		},
		navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>']
	});
	
	function carouselServise() {
		$('.item-carousel-service').each(function() {
			var ths = $(this),
					thsh = ths.find('.carousel-service-content').outerHeight();
					ths.find('.carousel-service-image').css('min-height', thsh);
		});
	}carouselServise();
	
	$('.carousel-service-composition .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});
	$('.s-galery .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
	
	
	function onResize() {
		$('.carousel-service-content').equalHeights();
	}onResize();
	window.onresize = function() {onResize()};

});
