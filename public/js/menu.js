import $ from 'jquery';
import 'jquery-ui';

let expanded = true;
let clicked = false;
let lastSection = 'soup-container';

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


$('.menu-item').on('click', function(){
        if(section === lastSection){
            clicked = false;
            return;
        }

        let tab = $(this).attr('id');
        let section = tab.replace('-t', '');
    
        if(section !== 'projects'){
            $('#'+section).stop().fadeIn(900, 'easeInOutCubic');
            $('#'+lastSection).stop().fadeOut(900, 'easeInOutCubic');
        } else{
            $('#'+lastSection).stop().fadeOut(900, 'easeInOutCubic', () => {
                $('#'+section).stop().slideDown(1500, 'easeInOutCubic');
            });
        }

        if(clicked === true){
            $('#new-menu').stop().animate({height: '0', opacity: 0}, 700);    
        }

        lastSection = section;
        clicked = false;

});

$('#menu-toggle').on("click", () =>{
    if(clicked === false){
        $('#projects, #contact').stop().fadeOut('fast');
        $('#new-menu a').stop().show();
        $('#new-menu').stop().animate({height: '100%', opacity: 1}, 700, () => {

        });
        clicked = !clicked;    
    } else{
        $('#new-menu a').stop().hide();
        $('#new-menu').stop().animate({height: '0', opacity: 0}, 700);
    }
});