(function(){
	'use strict';
	//CONSTANTS
	var windowWidth = $(window).width();
	const menuHeight = $('#menu').height();
	//ACCOUNT FOR SMALL SCREEN
	if(windowWidth < 1340){
	  	$('#menu-icn').fadeIn('slow');
	  }else{
	  	$('#menu-items').fadeIn('slow');
	  	$('#social-menu').fadeIn('slow');
	  }
	//SCROLL TO DIV ON CLICK
	$('.item').on('click', function(){
		console.log('click');
		var tab = $(this).attr('id');
		var section = tab.replace('-t', '');
		if(section != 'home' && section != 'logo') {
			$('html, body').animate({
			        scrollTop: $("#"+section).offset().top-menuHeight+2
			}, 1500);
		}else{
			$('html, body').animate({
			        scrollTop: 4
			}, 1500);
		}
	});
})();