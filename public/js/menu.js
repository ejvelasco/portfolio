(function(){
	'use strict';
	var expanded = true;
	var menuHeight = 80;
	$('#new-menu').fadeIn('slow');
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
			clearInterval(updateClock);
			$('#content-wrapper, #canvas, #time').fadeOut('fast');
		}
		setTimeout(function(){
		if(section != 'home') {
			$('html, body').animate({
			        scrollTop: $("#"+section).offset().top-menuHeight+10
			}, 1500);
		}else{
			$('html, body').animate({
			        scrollTop: 0
			}, 1500, function(){
				$('#content-wrapper, #canvas, #time').fadeIn('fast');
				clockFunction();
			});
		}
	}, 200);
	});
})();