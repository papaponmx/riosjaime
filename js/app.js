$(document).foundation();

$( "#see-more" ).mouseenter(
  function(){  $(".fi-arrow-down").toggleClass ( "second_effect" ); }
);

//scroll to animation
// global animation
var theAnimation = function(){


$('html, body').animate({
    scrollTop: $("#hello").offset().top
}, 2000);
};


var theAnimationTwo = function(){
$('html, body').animate({
    scrollTop: $("#works").offset().top
}, 2000);
};




$(".hero-link, #nav-btn-hello").click(function() {
 theAnimation();
});

// For #portfolio-btn
$("#portfolio-btn, #nav-btn-works").click(function() {
theAnimationTwo();

});




// Scroll to top button

// adding the html
$('body').prepend('<a href="#hero" class="back-to-top" id="the-arrow"><p<i class="fi-arrow-up"></i></p></a>');

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
        scrollTop: $("#hero").offset().top
    }, 1000);
});
