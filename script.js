$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.sticky-top");    
    $nav.toggleClass("scrolled navbar-light", $(this).scrollTop() > $nav.height());
    $nav.toggleClass("navbar-dark", $(this).scrollTop() < $nav.height());
  });
});


$(document).ready(function(){
  $('.sponsors').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1300,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
    ]
  });
});