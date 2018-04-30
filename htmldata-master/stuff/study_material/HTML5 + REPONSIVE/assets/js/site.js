var windowWindth;
var clearTimeout;
(function($) {
	windowWindth=$(window).width();
	
		
	$('.nav-button').on('click', function(event){
		if(windowWindth < 768){
		event.stopPropagation();
		$("body").toggleClass('slide-nav');
		}
	});
	
	if($("body.nav-toggle").length > 0){
			$('.nav-button').on('click', function(){
				if(windowWindth < 768){
				$(this).parents('.navbar').find('.nav').slideToggle();	
				}			
		});
	}
	$(".nav").on("click",function(event){
		event.stopPropagation();
	});
	
	$(".nav li").off("click",".nav li").on("click",function(event){
		if(windowWindth < 768){
	  event.stopPropagation();
	  $(this).siblings().removeClass("active");
	  $(this).siblings().find("active").removeClass("active");
	  $(this).siblings().find("ul").slideUp();
	  $(this).toggleClass("active");
	  $(this).children("ul").slideToggle();
	 }
	 })
	
	$("a").on("click",function(event){
		if($(this).attr("href") == "#")
		event.preventDefault();
	})
	
	$(window).on('click',function(){
		$("body").removeClass('slide-nav');
	});
	 
			
})(jQuery);



$(window).resize(function(){
	clearInterval(clearTimeout);
	clearTimeout=setTimeout(function(){
		
		windowWindth=$(window).width();
		if(windowWindth > 768){
		$('body').find('.nav li').find('ul').removeAttr('style');
		}
		console.log(windowWindth);
	},200)
})
