(function(){
  "use strict";
  //VARIABLES
  var windowHeight = window.innerHeight;
  console.log(windowHeight);
  $('#about-container-1, #about-container-2, #projects-container, #contact-container').css('height', windowHeight + windowHeight*.1);
  var counter = 0;
  $('#home').css('height', innerHeight*.85);
  window.setInterval(function(){
  	$('#home').css('filter', 'hue-rotate('+counter+'deg)');
  	counter++;
  }, 100);
 // $('#about-1,#about-2').css('top', '50%');
  // $('#about-1,#about-2').css('transform', 'translateY(-50%');
  // document.addEventListener("touchstart", function(){}, true);
  
  // $(window).on('resize', function(){
  // 	$('#home, #about-container-1, #about-container-2, #projects-container, #contact-container').css('height', windowHeight-250);
  // })
})();
