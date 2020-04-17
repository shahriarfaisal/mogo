$(function(){
      
    $(window).scroll(function(){

var scrolling = $(this).scrollTop();
if(scrolling > 1000){
    $(".navbar").addClass("bg");
}
else{
    
    $(".navbar").removeClass("bg");
}    
}); 
                         // animation smooth scroll
                      //animation scroll js
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });   
// video background
jQuery(function(){
  jQuery(".player").YTPlayer();
});
    
    //banner-slider
    
$('.banner-topic-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
    fade:true,
    button:false,
    speed:3000,
});
	
    //comment-slider*/

$('.comment-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  button:false,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
});
    
$('.blog-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
    vertical:true,
    speed:1000,
    arrows:false,
  autoplaySpeed: 2000,
});
 
    //message slider
    
$('.message-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  button:false,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
});

    //story-slider

$('.story-slider').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,    
    button:false,
    autoplay:true,
    speed: 1500,
    arrows:false,
    centerMode:true,
    centerPadding:true,
});
    
	//venobox
    
$('.venobox').venobox();    
    
   //message slider
    
jQuery(function(){
      jQuery(".player").YTPlayer();
    });
    
//particles js for device part
    
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 400,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode":  "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});    
    
    //banner-slider
    
$('.footer-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows:false,
    vertical:true,
    button:false,
    speed:3000,
});    
    
// counter js
    
/*$('.counter').counterUp({
    delay: 10,
    time: 3000
});*/  
    
     //sidebox-slider
    
var $el, $ps, $up, totalHeight;

$(".sidebar-box .button").click(function() {
      
  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more')");
  
  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });
        
  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });
  
  // fade out read-more
  $p.fadeOut();
  
  // prevent jump-down
  return false;
    
});    
});