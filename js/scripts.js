(function($) {
  'use strict';
  //console.log("hello");
  //some tweaks for smaller windows
  function checkSize() {
          if ($(".off-canvas").css("display") === "block") {
            $('.flexslider.carousel').css('height','30vH');      //something
          } else {
              //tweak some heights
            $('.box-social').each(function() {
              var boxWidth = $(this).width();
              //console.log(boxWidth);
              $(this).css("height", boxWidth);
            });
            var carouselHeight = $('.nav-main-cnt').height();
            $('.flexslider.carousel').css('height',carouselHeight-16);
          }
      }
  // run test on initial page load (and put firstly in document)
    checkSize();
    // run test on resize of the window
    $(window).resize(checkSize);

    //initialize flexslider
    $('.flexslider').css('display','block');
    $('.flexslider').flexslider({
      animation: "slide"
    });
    $('.flex-control-nav a, .flex-next, .flex-prev').wrapInner('<span></span>');


})(jQuery);
