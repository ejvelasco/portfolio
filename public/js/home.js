import $ from 'jquery';

(() => {
    'use-strict';
    //wait for background image to load before revealing
    let $div = $('#home-bg'),
        bg = $div.css('background-image'),
        src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
        $img = $('<img>').attr('src', src).on('load', () => {
            let deg = 0;
            $div.fadeIn(2000);
            $('#new-menu').fadeIn(2000);
            $('.loader').fadeOut(2000);
            //change hue of background
            setTimeout(() => {
                setInterval(() => {
                    $('#home-bg').css('filter', 'hue-rotate('+deg+'deg)');
                    deg = deg + .4;
                }, 30);    
            }, 3000);
        });
})();
