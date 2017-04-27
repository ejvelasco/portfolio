(function(){
	'use strict';
	let expanded = true;
	$(window).scroll(function() {
	    if ($(this).scrollTop() > 0 && expanded) {
	        expanded = false;
	        $('#new-menu').css('background-color', '#EFEFEF').css('padding-top', '30px').css('padding-left', '20px');
	        $('#arrow').stop().fadeOut('slow');
	    } else if($(this).scrollTop() === 0){
	    	expanded = true;
	    	$('#arrow').stop().fadeIn('slow');
	    	$('#new-menu').css('background-color', '').css('padding', '').css('opacity', '');
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
	$('#contact-t-2').on("click", function(){
		$('.mask').fadeIn(800, 'swing');
	    $('#contact').fadeIn(800, 'swing');
	});
	$('.mask').on("click", function(){
		$('#contact').fadeOut(600);
		$('.mask').fadeOut(600);
	});
})();