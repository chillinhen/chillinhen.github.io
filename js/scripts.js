(function($) {
  'use strict';
  //console.log("hello");
  //tweak some heights
  $('.box-social').each(function() {
    var boxWidth = $(this).width();
    console.log(boxWidth);
    $(this).css("height", boxWidth);
  });
  var carouselHeight = $('.nav-main-cnt').height();
  $('.flexslider.carousel').css('height',carouselHeight-16);

  $(document).ready(function() {
    $('.flexslider').css('display','block');
    $('.flexslider').flexslider({
      animation: "slide"
    });
    $('.flex-control-nav a, .flex-next, .flex-prev').wrapInner('<span></span>');
  });


})(jQuery);
