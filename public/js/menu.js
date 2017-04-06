(function(){
	'use strict';
	let expanded = true;
	//change menu on scroll
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 0 && expanded) {
	        expanded = false;
	        $('#new-menu').css('background-color', 'black').css('padding', '10px').css('opacity', .6);
	    } else if($(this).scrollTop() === 0){
	    	expanded = true;
	    	$('#new-menu').css('background-color', '').css('padding', '').css('opacity', '');
            sr.reveal('#new-menu a', 100);
	    	$('#content-wrapper, canvas, #time').fadeIn(1000);
	    }
	});
})();