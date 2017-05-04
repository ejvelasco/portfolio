import $ from 'jquery';

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
        $('#'+section).stop().fadeIn(1200);
        $('#'+lastSection).stop().fadeOut(1200);
        lastSection = section;

});
$('.mask').on("click", function(){
	$('#contact').fadeOut(600);
	$('.mask').fadeOut(600);
});