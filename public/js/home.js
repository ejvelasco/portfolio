(function(){
    'use strict';
    const $div = $('#home-bg');
    const bg = $div.css('background-image');
    let src, $img;
    src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
    $img = $('<img>').attr('src', src).on('load', function() {
        $div.fadeIn(2500);
        if($(window).scrollTop() === 0){
            $('#new-menu, #arrow').fadeIn(2500);    
        }else{
            $('#new-menu').fadeIn(2500);    
        }
        $('.loader').fadeOut(2500);
        setTimeout(function(){
            $('.msg').show();
            window.sr = ScrollReveal({ origin: 'left', opacity: 0, duration: 1000 });
            sr.reveal('.msg', {delay: 1000, distance:'50px'}, 350);
        }, 1000);
        let deg = 150;
        setTimeout(function(){
            setInterval(function(){
                $('#home-bg').css('filter', 'saturate(.3) hue-rotate('+deg+'deg)');
                deg = deg + .2;
            }, 30);    
        }, 3000);
    });
    $('.snippet-1').each(function(i, block) {
        hljs.highlightBlock(block);
    }); 
})();


