$(function() {
	
	$('.homepage_slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		
		centerPadding: '40px',
	});

	var $carousel = $('.homepage_slider');
	$(document).on('keydown', function(e) {
		if (e.keyCode == 37) {
			$carousel.slick('slickPrev');
		}
		if (e.keyCode == 39) {
			$carousel.slick('slickNext');
		}
	});
	
});