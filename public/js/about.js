import $ from 'jquery';

(() => {
	'use-strict';
	//wait for left and right images on about sections to load before revealing
	let triggerAgain = true,
	$divR = $('.img-r'),
	bgR = $divR.css('background-image'),
	srcR = bgR.replace(/(^url\()|(\)$|[\"\'])/g, ''),
		$imgR = $('<img>').attr('src', srcR).on('load', () => {
		let $divL = $('.img-l'),
		bgL = $divL.css('background-image'),
		srcL = bgL.replace(/(^url\()|(\)$|[\"\'])/g, ''),
		$imgL = $('<img>').attr('src', srcL).on('load', () => {
			window.sr = ScrollReveal({ origin: 'left', opacity: 0, duration: 1000 });
			$(window).scroll(() => {
				if($(window).scrollTop() + 700 > $('#about').position().top  && triggerAgain === true){
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
	$('#about-slide').on("click", () => {
		$('.head, .about-me').fadeOut(800, 'easeInOutCubic');
		$('.head').text('GETTING TECHNICAL');
		$('.about-me').html("<p class='about'> I'm a twenty-two year old programmer currently based in Dallas, but I call Austin, Texas home. I developed a passion for programming in high school, and I have come a long way since. I embrace new opportunities to learn independently, and I am all about a hands-on approach to development.</p><br><p class='about'>Don't let my portfolio fool you into thinking I'm only about coding! It is my interest in Mathematics that gives rise to my interest in the theoretical aspect of CS. I like to take an analytical approach when solving programming problems. Here's a cool <a href='#' class='link'> example.</a> When I'm away from the keyboard, I like to stay fit, read anything from non-fiction to high fantasy, and play chess.</p>", () =>{
			$('.head, .about-me')..fadeIn(800, 'easeInOutCubic');
		});
		
	});
})();