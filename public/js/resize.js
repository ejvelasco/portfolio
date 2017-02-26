(function(){
    'use strict';
    var windowWidth;
    $(window).resize(function(){
      windowWidth = $(window).width();
      //MENU
      if(windowWidth < 1340){
          $('#menu-items').fadeOut('fast');
          $('#social-menu').fadeOut('fast');
          $('#menu-icn').fadeIn();
      }else if(windowWidth > 1340 && $('#menu-items').css('display') == 'none'){
          $('#menu-items').fadeIn('fast');
          $('#menu-icn').fadeOut('fast');
          $('#social-menu').fadeIn('fast');
      }
      //HOME
      $('#developer-bg').css('transform', 'skew(0)'); 
      $('#car-dev').css('transform', 'skew(0)');
      $('#logo').hide(); 
      $('#car-dev').css('width', windowWidth);
      $('#car-des').css('width', windowWidth);
      $('#logo').css('position', 'relative');
      $('#code2').fadeOut('slow');
      $('.typed-cursor').fadeOut('slow');
    });
})();