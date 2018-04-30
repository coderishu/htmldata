$(document).ready(function(){
  $('.testimonial-slider').slick({
  });
  
  

  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

  /*************************************
    LEFT MENU SMOOTH SCROLL ANIMATION
   *************************************/
  // declare variable
  var h1 = $("#h1").position();
  var h2 = $("#h2").position();
  var h3 = $("#h3").position();

  $('.link1').click(function() {
    $('html, body').animate({
      scrollTop: h1.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link2').click(function() {
    $('html, body').animate({
      scrollTop: h2.top
    }, 500);
    return false;

  }); // left menu link2 click() scroll END

  $('.link3').click(function() {
    $('html, body').animate({
      scrollTop: h3.top
    }, 500);
    return false;

  }); // left menu link3 click() scroll END

 // ready() END




  
  
  
});


function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


(function() {
 
  // store the slider in a local variable
  var $window = $(window),
      flexslider = { vars:{} };
 
  // tiny helper function to add breakpoints
  function getGridSize() {
    return (window.innerWidth < 600) ? 1 :
           (window.innerWidth < 900) ? 3 : 3;
  }
 
  $(function() {
    SyntaxHighlighter.all();
  });
 
  $window.load(function() {
    $('.flexslider').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 360,
      itemMargin: 30,
      minItems: getGridSize(), // use function to pull in initial value
      maxItems: getGridSize() // use function to pull in initial value
    });
  });
 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    flexslider.vars.minItems = gridSize;
    flexslider.vars.maxItems = gridSize;
  });
}());







