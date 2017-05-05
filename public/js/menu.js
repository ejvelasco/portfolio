import $ from 'jquery';
import 'jquery-ui';

let expanded = true;
$(window).scroll(function() {
    if ($(this).scrollTop() > 0 && expanded) {
        expanded = false;
        $('#new-menu').css('background-color', 'rgba(0,0,0,.7)').css('padding-top', '30px').css('padding-left', '20px');
        $('#arrow').stop().fadeOut('slow');
    } else if($(this).scrollTop() === 0){
    	expanded = true;
    	$('#arrow').stop().fadeIn('slow');
    	$('#new-menu').css('background-color', '').css('padding', '').css('opacity', '');
    }
});
let lastSection = 'soup-container';

$('#new-menu a').on('click', function(){
        let tab = $(this).attr('id');
        let section = tab.replace('-t', '');
        
        if(section === lastSection){
            return;
        }
        if(section !== 'projects'){
            $('#'+section).stop().fadeIn(800, 'easeInOutCubic');
            $('#'+lastSection).stop().fadeOut(800, 'easeInOutCubic');
        } else{
            $('#'+section).stop().fadeIn(1800, 'easeInOutCubic');
            $('#'+lastSection).stop().fadeOut(1800, 'easeInOutCubic');
        }
        lastSection = section;

});
$('.mask').on("click", function(){
	$('#contact').fadeOut(600);
	$('.mask').fadeOut(600);
});