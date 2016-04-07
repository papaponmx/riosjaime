$(document).foundation();

$(document).ready( function() {
  $('.hero').animate();

});

$( "#see-more" ).mouseenter(
  function(){  $(".fi-arrow-down").toggleClass ( "second_effect" ); }

);



$( "#effects" ).mouseleave(
  function(){  $("#effects").removeClass( ".first_effect", false ); }
);

//scroll to animation

$(".hero-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#hello").offset().top
    }, 2000);
    $('#smile').show( 3500 );
    $('#smile').show( 3500 );
});



//on show effects
/*var myCar = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
myCar.onpageshow=function(){myScript};*/
