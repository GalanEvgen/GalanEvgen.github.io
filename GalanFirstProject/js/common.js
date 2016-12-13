$(document).ready(function () {
	
	$(".my-flipster").flipster();

	
	//mix Portfolio filter
	$("#portfolio_grid").mixItUp();
	
	
	$("#car_img").flipster({
    style: 'carousel',
    spacing: -0.5,
    nav: true,
    buttons: true,
});
	
	
	
	//$(".port_deskr img").animated("fadeInLeft", "fadeOutDown");
	
	
	$(".s_portfolio li").click(function() {
	$(".s_portfolio li").removeClass("active");
	$(this).addClass("active");
	});
	
	
	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type:"inline", midclick:"true"});
	
	$(".top_text h1").animated("fadeDownUp", "fadeInUp");
	$(".top_text p").animated("fadeDownUp", "fadeInUp");
	$(".section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_l").animated("fadeInLeft", "fadeOutDown");
	$(".animation_r").animated("fadeInRight", "fadeOutDown");
	$(".port_deskr p").animated("fadeInDown");
	$(".item_vertical").animated("flipInY", "fadeOutDown");
	
		$(".corusel_item a").animated("fadeInDown", "fadeOutUp");
		$(".w_svg").animated("fadeInDown", "fadeOutUp");
	
	//dinamic resize windows
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});

	$(".toggle_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".top_menu ul a").click(function() {
		$(".top_menu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_menu").click(function() {
		if ($(".top_menu").is(":visible")) {
			$(".top_text").css("opacity", "1");
			$(".top_menu").fadeOut(600);
			$(".top_menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top_text").css("opacity", ".1");
			$(".top_menu").fadeIn(600);
			$(".top_menu li a").addClass("fadeInUp animated");
		};
	});
	
	$(".top_mnu ul a").mPageScroll2id();
	
	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_deskr").attr("id", "work_" + i);
	});
	
	$("input, select, textarea").jqBootstrapValidation();
	


	
	$(window).load(function () {
		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");
	});


});


