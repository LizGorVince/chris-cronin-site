// ON READY
jQuery(document).ready(function($) {
  try{Typekit.load({ async: true });}catch(e){}

  // Load JS modules
  slickSlider();
});

// LOADED
$(window).on('load', function() {
  $('html').addClass('js--loaded'); // JS loaded flag
  $('body').removeClass('no-js').addClass('js--loaded');
});
