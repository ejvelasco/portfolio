(function(){
	'use strict';
	$('#code').typed({
		strings: ['dream', 'design', 'innovate', 'program.'],
		typeSpeed: 30,
		backSpeed: 30,
		callback: function(){
			if($('#two').css('display') !== 'block'){
				$('.typed-cursor').fadeOut('slow');
			}
		}
	});
	$('#btn-two').click(function(){
		$('#btn-one').removeClass('btn-active');
		$('#btn-two').addClass('btn-active');
		$('#one').fadeOut('slow');
		$('#about-more').fadeIn('slow');
		$('#two').fadeIn('slow');
		$('#code2').typed({
			strings: ['var myInterests = {\n   one: "Application Architecture",\n   two: "Application Design",\n   three: "Research-Oriented Software",\n   four: "Artificial Intelligence",\n   five: "Game Design",\n   humor() {\n      if(naughty === true){\n         God.sentence.start("callback-hell");\n      }\n   } \n};'],
			typeSpeed: 30,
			backSpeed: 30,
			callback: function(){
				if($('#one').css('display') !== 'block'){
					$('.typed-cursor').fadeOut('slow');
				}
				$('#code2').each(function(i, block) {
			  		hljs.highlightBlock(block);
				});	
			}
		}); 
	});
	$('#btn-one').click(function(){
		$('#btn-one').addClass('btn-active');
		$('#btn-two').removeClass('btn-active');
		$('#two').fadeOut('slow');
		$('#about-more').fadeOut('slow');
		$('#one').fadeIn('slow');
		$('#code').typed({
			strings: ['dream', 'design', 'innovate', 'program.'],
			typeSpeed: 30,
			backSpeed: 30,
			callback: function(){
				if($('#two').css('display') !== 'block'){
					$('.typed-cursor').fadeOut('slow');
				}
			}
		}); 
	});
})();