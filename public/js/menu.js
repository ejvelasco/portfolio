(function(){
	'use strict';
	var expanded = true;
	var menuHeight = 80;
	// $('#new-menu').fadeIn('slow');
	window.sr = ScrollReveal({ origin: 'top', opacity: 0, duration: 1000 });
	sr.reveal('#new-menu a', 100);
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 0 && expanded) {
	        expanded = false;
	        $('#new-menu').css('background-color', 'black').css('padding', '10px').css('opacity', .8);
	        $('#new-menu a').css('color', 'white');
	    } else if($(this).scrollTop() === 0){
	    	expanded = true;
	    	$('#new-menu').css('background-color', '').css('padding', '').css('opacity', '');
	    	$('#new-menu a').css('color', '');
	    }
	    // console.log(expanded);
	    // console.log($(this).scrollTop());
	});
	//SCROLL TO DIV ON CLICK
	$('#new-menu a').on('click', function(){
		var tab = $(this).attr('id');
		var section = tab.replace('-t', '');
		if(section != 'home'){
			console.log(updateClock)
			clearInterval(updateClock);
			$('#content-wrapper, #canvas, #time').fadeOut('fast');
		}
		if(section != 'home') {
			$('html, body').animate({
			        scrollTop: $("#"+section).offset().top-menuHeight+10
			}, 1000);
		}else{
			$('html, body').animate({
			        scrollTop: 0
			}, 1000, function(){
				$('#content-wrapper, #canvas, #time').fadeIn('fast');
				drawClock();
			});
		}
	});
})();