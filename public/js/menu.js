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
	$('#new-menu a').on('click', function(){
	        let tab = $(this).attr('id');
	        let section = tab.replace('-t', '');
	        if(section === 'about'){
	            $('html, body').stop().animate({scrollTop: $("#"+section).offset().top - 50},1000,'easeInOutCubic');
	        }else if(section === 'projects'){
	            $('html, body').stop().animate({scrollTop: $("#"+section).offset().top - 200},1000,'easeInOutCubic');
	        }else if(section === 'contact'){
	            $('.mask').fadeIn(800, 'swing');
	            $('#contact').fadeIn(800, 'swing');   
	        }else if(section === 'home'){
	        	$('html, body').stop().animate({scrollTop: 0},1000,'easeInOutCubic');
	        }
	});
	$('.mask').on("click", function(){
		$('#contact').fadeOut(800);
		$('.mask').fadeOut(800);
	});
})();