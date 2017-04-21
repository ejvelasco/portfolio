(function(){
	'use strict';
	let expanded = true;
	// change menu on scroll
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 0 && expanded) {
	        expanded = false;
	        // $('#new-menu').css('pa')
	        $('#new-menu').css('background-color', 'rgba(0,0,0,1)').css('padding-top', '30px').css('padding-left', '20px');
	        // $('#new-menu').css('opacity', '.6');
	    } else if($(this).scrollTop() === 0){
	    	expanded = true;
	    	$('#new-menu').css('background-color', '').css('padding', '').css('opacity', '');
	    	$('#content-wrapper, canvas, #time').fadeIn(1000);
	    }
	});
})();