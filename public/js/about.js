(function(){
	'use strict';
	$('#about').hide();
	$('#about').show();
	// $('#code').typed({
	// 	strings: ['dream', 'design', 'innovate', 'program.'],
	// 	typeSpeed: 30,
	// 	backSpeed: 30,
	// 	callback: function(){
	// 		if($('#two').css('display') !== 'block'){
	// 			$('.typed-cursor').fadeOut('slow');
	// 		}
	// 	}
	// });
	
	// // window.sr = ScrollReveal({ origin: 'top', opacity: 0, duration: 1000 });
	// // sr.reveal('.navbar-nav a', 300);
	// // sr.reveal('.head', { distance:'50px'}, 350);
	// $('#btn-two').click(function(){
	// 	$('#btn-one').stop().removeClass('btn-active');
	// 	$('#btn-two').stop().addClass('btn-active');
	// 	$('#two').stop().fadeIn('slow');
	// 	$('#one').stop().fadeOut('slow');
	// 	$('.marvel-device').stop().show();
	// 	$('#about-more').stop().fadeIn('slow');
	// 	// $('#two').fadeIn(3000);
	// 	// $('#code2').typed({
	// 	// 	strings: ['var myInterests = {\n   one: "Application Architecture",\n   two: "Application Design",\n   three: "Research-Oriented Software",\n   four: "Artificial Intelligence",\n   five: "Game Design",\n   humor() {\n      if(naughty === true){\n         God.sentence.start("callback-hell");\n      }\n   } \n};'],
	// 	// 	typeSpeed: 30,
	// 	// 	backSpeed: 30,
	// 	// 	callback: function(){
	// 			// if($('#one').css('display') !== 'block'){
	// 			// 	$('.typed-cursor').fadeOut('slow');
	// 			// }
					
	// 		// }
	// 	// }); 
	// });
	// $('#btn-one').click(function(){
	// 	$('#btn-one').stop().addClass('btn-active');
	// 	$('#btn-two').stop().removeClass('btn-active');
	// 	$('#two').stop().fadeOut('slow');
	// 	$('#about-more').stop().fadeOut('slow');
	// 	$('#one').stop().fadeIn('slow');
	// 	setTimeout(function(){
	// 		$('.marvel-device').stop().fadeOut('slow');
	// 	}, 1000);
	// 	// $('#code').typed({
	// 	// 	strings: ['dream', 'design', 'innovate', 'program.'],
	// 	// 	typeSpeed: 30,
	// 	// 	backSpeed: 30,
	// 	// 	callback: function(){
	// 	// 		if($('#two').css('display') !== 'block'){
	// 	// 			$('.typed-cursor').fadeOut('slow');
	// 	// 		}
	// 	// 	}
	// 	// }); 
	// });
	// $('').each(function(i, block) {
	// 	hljs.highlightBlock(block);
	// });
	let triggerAgain = true;
	window.sr = ScrollReveal({ origin: 'left', opacity: 0, duration: 1000 });
	$(window).scroll(function(){
		if( $(window).scrollTop() + 700 > $('#about').position().top  && triggerAgain === true){
			triggerAgain = false;
			$('.head').css('color', '#02303E');
			$('.msg-2, .msg-3, .msg-4, .phone').show();
		    sr.reveal('.msg-2', {delay: 0, distance:'50px', duration: 1000}, 350);	
		    sr.reveal('.msg-4', {delay: 500, distance:'50px', duration: 1000}, 350);	
		    sr.reveal('.msg-3', {delay: 1000, distance:'50px', duration: 1000}, 350);
		    
		}
	});
	
	
})();