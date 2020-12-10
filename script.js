$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.sticky-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$(document).ready(function(){
  $('.sponsors').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});