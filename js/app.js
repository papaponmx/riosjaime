$(document).foundation();

$(document).ready( function() {
  $('.hero').animate();

});

$( "#see-more" ).mouseenter(
  function(){  $(".fi-arrow-down").toggleClass ( "second_effect" ); }
);

//scroll to animation

$(".hero-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#hello").offset().top
    }, 2000);
    $('#smile').show( 1000 );
    $('#the-header').show( 3000 );
    $('#the-header').show( 3000 );
});

// For #portfolio-btn
$("#portfolio-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 2000);
    $('#smile').show( 1000 );
    $('#the-header').show( 3000 );
    $('#the-header').show( 3000 );
});



$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
            $this.removeClass('hidden');
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn');
        $(this).addClass('hidden');
      }
    });
  }

  revealOnScroll();
});
