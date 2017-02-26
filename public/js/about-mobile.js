(function(){
	'use-strict';

	// $('#btn-one').click(function(){
	// 	$('#btn-one').addClass('btn-active');
	// 	$('#btn-two').removeClass('btn-active');
	// 	$('#two').fadeOut('slow');
	// 	$('#one').fadeIn('slow');
	// 	$('#about-more').fadeOut('slow');
	
	// });
	$('#about').on('swipeleft',function(){
		$('#two').animate({right: '0'}, 400);
		// $('#about-more').show('slide',{direction: 'right'}, 500);
		$('#one').animate({left: '-1000'}, 400);
	});
	$('#about').on('swiperight',function(){
		$('#two').animate({right: '1000'}, 400);
		// $('#about-more').show('slide',{direction: 'right'}, 500);
		$('#one').animate({left: '0'}, 400);
		// $('#two').hide('slide',{direction: 'right'}, 500);
		// $('#about-more').hide('slide',{direction: 'right'}, 500);
		// $('#one').show('slide',{direction: 'left'}, 500);
	});
})();