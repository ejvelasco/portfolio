(function(){
	'use strict';
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
	$('.snippet').each(function(i, block) {
			  		hljs.highlightBlock(block);
				});	
	// window.sr = ScrollReveal({ origin: 'top', opacity: 0, duration: 1000 });
	// sr.reveal('.navbar-nav a', 300);
	// sr.reveal('.head', { distance:'50px'}, 350);
	$('#btn-two').click(function(){
		$('#btn-one').removeClass('btn-active');
		$('#btn-two').addClass('btn-active');
		$('#two').fadeIn('slow');
		$('#one').fadeOut('slow');
		$('.marvel-device').fadeOut('slow');
		$('#about-more').fadeIn('slow');
		// $('#two').fadeIn(3000);
		// $('#code2').typed({
		// 	strings: ['var myInterests = {\n   one: "Application Architecture",\n   two: "Application Design",\n   three: "Research-Oriented Software",\n   four: "Artificial Intelligence",\n   five: "Game Design",\n   humor() {\n      if(naughty === true){\n         God.sentence.start("callback-hell");\n      }\n   } \n};'],
		// 	typeSpeed: 30,
		// 	backSpeed: 30,
		// 	callback: function(){
				// if($('#one').css('display') !== 'block'){
				// 	$('.typed-cursor').fadeOut('slow');
				// }
				// $('#code2').each(function(i, block) {
			 //  		hljs.highlightBlock(block);
				// });	
			// }
		// }); 
	});
	$('#btn-one').click(function(){
		$('#btn-one').addClass('btn-active');
		$('#btn-two').removeClass('btn-active');
		$('#two').fadeOut('slow');
		$('#about-more').fadeOut('slow');
		$('#one').fadeIn('slow');
		setTimeout(function(){
			$('.marvel-device').fadeIn('slow');
		}, 1000);
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
	});
})();