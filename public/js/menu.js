(function(){
	'use strict';
	let expanded = true;
	
	//staggered menu effect
	// window.sr = ScrollReveal({ origin: 'top', opacity: 0, duration: 1000 });
	// sr.reveal('#new-menu a', 100);
	//change menu on scroll
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
	});
})();