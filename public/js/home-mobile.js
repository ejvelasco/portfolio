(function(){
  "use strict";
  //VARIABLES
  var windowHeight = window.innerHeight + 50;
  console.log(windowHeight);
  $('#about-container-1, #about-container-2, #projects-container, #contact-container').css('height', windowHeight);
  // $(window).on('resize', function(){
  // 	$('#home, #about-container-1, #about-container-2, #projects-container, #contact-container').css('height', windowHeight-250);
  // })
})();
