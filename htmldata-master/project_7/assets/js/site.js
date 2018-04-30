function myFunction(x) {
    x.classList.toggle("change");
}

$(document).ready(function(){
    $(".nav-button").click(function(){
        $(".nav").slideToggle(1000);
    });
    
 	$(".icon-search").click(function(){
        $(".input-wrapper").toggle();
    });

   $(".icon-search").click(function(){
        $(".nav").hide();
    });
    
	$(".nav-button").click(function(){
        $(".input-wrapper").hide();
    });
    
 });

// slider jquery
$(document).ready(function(){
  
  
  $('.bxslider').bxSlider({
  auto: true,
  autoControls: true
});});


    
    

// Window resize function

$( window ).resize(function() {
 if($( window ).width()>767){
 	$(".input-wrapper").css("display","block");
 }
 else{
 	$(".input-wrapper").css("display","none");
 }
		
 if($( window ).width()>767){
 	$(".nav").css("display","block");
 }
 else{
 	$(".nav").css("display","none");
 }
});


