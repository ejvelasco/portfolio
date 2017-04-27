(function(){
	'use strict';
	let triggerAgain = true;
	
	const $divR = $('.img-r');
	const bgR = $divR.css('background-image');
	let srcR, $imgR;
	srcR = bgR.replace(/(^url\()|(\)$|[\"\'])/g, ''),
	$imgR = $('<img>').attr('src', srcR).on('load', function() {
		const $divL = $('.img-l');
		const bgL = $divL.css('background-image');
		let srcL, $imgL;
		srcL = bgL.replace(/(^url\()|(\)$|[\"\'])/g, ''),
		$imgL = $('<img>').attr('src', srcL).on('load', function() {
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
		});	
	});
	
	
	
	
})();