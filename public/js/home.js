import $ from 'jquery';

(() => {
    'use-strict';
    let $div = $('#home-bg'),
        bg = $div.css('background-image'),
        src = bg.replace(/(^url\()|(\)$|[\"\'])/g, ''),
        $img = $('<img>').attr('src', src).on('load', () => {
            let deg = 0;
            $div.fadeIn(2000);
            $('#new-menu').fadeIn(2000);
            $('.loader').fadeOut(2000);
            setTimeout(() => {
                setInterval(() => {
                    $('#home-bg').css('filter', 'hue-rotate('+deg+'deg)');
                    deg = deg + .4;
                }, 30);    
            }, 3000);
        });
})();
