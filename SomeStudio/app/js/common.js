$(function () {

	$("#my-menu").mmenu({
		extensions:[ 'theme-dark', 'effect-menu-slide', 'pagedim-black'],
		navbar: {
			title: '<img src ="img/favicon/logo.svg" alt="Фотостудия Pro Studio>"'
		},
		offCanvas: {
            position: "right"
         }
	});
	
var api = $('#my-menu').data('mmenu');
	api.bind('opened', function() {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function() {
					$('.hamburger').removeClass('is-active');
		});
	
$('.carousel-service').owlCarousel({
	loop: true,
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
	
	
	navText: ['<i class="fa fa-clock-o"></i>', '<i class="fa fa-clock-o"></i>']
});
	
});
