function initSlick() {

  $('.full__slider').slick({
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
    draggable: false,
    swipe: false,
    pauseOnHover: false,
    cssEase: 'linear',
    fade: true
  });

}
