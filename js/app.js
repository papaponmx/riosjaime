$(document).foundation();

$(window).load( function() {
  $('.hero').animate();

});

$( "#see-more" ).mouseenter(
  function(){  $(".fi-arrow-down").toggleClass ( "second_effect" ); }
);

//scroll to animation

$(".hero-link, #nav-btn-hello").click(function() {
    $('html, body').animate({
        scrollTop: $("#hello").offset().top
    }, 2000);
    $('#smile').show( 1000 );
    $('#the-header').show( 3000 );
    $('#the-header').show( 3000 );
});

// For #portfolio-btn
$("#portfolio-btn, #nav-btn-works").click(function() {
    $('html, body').animate({
        scrollTop: $("#works").offset().top
    }, 2000);
    $('#smile').show( 1000 );
    $('#the-header').show( 3000 );
    $('#the-header').show( 3000 );
});
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


// Scroll to top button

// adding the html
$('body').prepend('<a href="#" class="back-to-top" id="the-arrow"><p<i class="fi-arrow-up"></i></p></a>');

//The rest
var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});


//animation for button scrolling

$(".back-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $(".hero").offset().top
    }, 1000);
});
