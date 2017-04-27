(function(){
	'use strict';
	let triggerAgain = true;
	window.sr = ScrollReveal({ origin: 'left', opacity: 0, duration: 1000 });
	$(window).scroll(function(){
		if( $(window).scrollTop() + 700 > $('#about').position().top  && triggerAgain === true){
			triggerAgain = false;
			$('.head').css('color', '#02303E');
			$('.msg-2, .msg-3, .msg-4, .msg-5, #chelsea, canvas').show();
		    sr.reveal('.msg-2', {delay: 0, distance:'50px', duration: 1000});	
		    sr.reveal('.msg-3', {delay: 500, distance:'50px', duration: 1000});	
		    sr.reveal('.msg-4', {delay: 1000, distance:'50px', duration: 1000});
		    
		}
	});
	
	
})();