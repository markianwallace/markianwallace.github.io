// Initialise FlexSlider for Carousels
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
	  minItems: 4,
	  itemWidth: 600,
	  slideshowSpeed: 3000,
	  animationSpeed: 3000,
	  animationLoop: true,
	  randomize: true,
	  controlNav: false,
	  directionNav: false,
	  itemMargin: 5,
	  move: 1,
  	  startAt: 1
	  
	  //start: function(slider){
	  //        $('body').removeClass('loading');
	//	  }
  });
});