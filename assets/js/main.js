
// Add your nice, nice JavaScript here
// And minify! Time to check out Grunt or Gulp - what else to you have to do this weekend?

$(document).ready( function($) {

	// Load JS modules
	function slickSlider() {

  var $slider = $('.gallery__slider').slick({
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: $('.hero__arrows__prev'),
    nextArrow: $('.hero__arrows__next'),
    draggable: true,
    swipe: true,
    cssEase: 'linear',
    fade: true
  });

}


	// Put some nice JavaScript in here.
	var $nav_main = $('.nav-main'),
		$nav_trigger = $('.nav-trigger');

	$nav_trigger.click( function() {
		console.log('clicked!');
		$nav_main.toggleClass('active');
		$nav_trigger.toggleClass('active');
		return false;
	});




});
