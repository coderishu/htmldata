
function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function(){
    $("button").click(function(){
        $(".nav-bar").slideToggle("slow");
    }); 


// login pop up

$( "#onclick" ).click(function() {
  $( "#login" ).fadeIn( 500, function() {
    $( "#login_form" ).fadeIn( 500 );
  });
  return false;
});

$( ".close" ).click(function() {
  $( "#login" ).fadeOut( 500, function() {
    $( "#login_form" ).fadeOut( 500 );
  });
  return false;
});

});



$( window ).resize(function() {
 if($( window ).width()>768){
 	$(".nav-bar").css("display","block");
 }
 else{
 	$(".nav-bar").css("display","none");
 }
});


