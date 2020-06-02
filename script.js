$(document).ready(function(){
 
  var slider = $('.slider'); 
  slider.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true
  });

  $( window ).resize(function() {
    var w = window.innerWidth;

    if(w < 780){
      slider.slick( "unslick" );
      slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3,
        dots: true
      });
    }
    else{
      slider.slick( "unslick" );
      slider.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true
      });
    }
    
  });
  });