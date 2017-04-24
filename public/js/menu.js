(function(){
	'use strict';
	let expanded = true;
	// change menu on scroll
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 0 && expanded) {
	        expanded = false;
	        // $('#new-menu').css('pa')
	        $('#mobile-brand').css('top', 35);
	        $('#new-menu').css('background-color', '#EFEFEF').css('padding-top', '30px').css('padding-left', '20px');
	        $('#arrow').stop().fadeOut('slow');
	        // $('#new-menu').css('opacity', '.6');
	    } else if($(this).scrollTop() === 0){
	    	expanded = true;
	    	$('#mobile-brand').css('top', 55);
	    	$('#arrow').stop().fadeIn('slow');
	    	$('#new-menu').css('background-color', '').css('padding', '').css('opacity', '');
	    	// $('#content-wrapper, canvas, #time').fadeIn(1000);
	    }
	});
})();