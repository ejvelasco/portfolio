(function(){
  "use strict";
  //VARIABLES
  var windowWidth = $(window).width();
  const logoWidth = $('#logo').width();
  $('#logo').css('left', windowWidth/2-logoWidth/2);
  $('#logo').fadeIn(1000);
  //FORMAT CARS
  $('#car-dev').css('width', windowWidth);
  //BG'S FADE IN
  $(window).on('load', ()=> {
    $('#developer-bg').fadeIn(3000);
    $('#designer-bg').fadeIn(3000);
  });
  //HANDLE MOUSE EFFECT EASE ON ENTER
  $('#content-wrapper').on('mouseenter', function(){
    $('#developer-bg').css('transition', 'all .4s');
      setTimeout(function(){
        $('#developer-bg').css('transition', '');
      }, 400);
  });
  //HANDLE MOUSE EFFECT ON MOVE
  $('#content-wrapper').on("mousemove", function(event){
    windowWidth = $(window).width();
    var adjust = windowWidth-event.pageX-1;
    if(event.pageX < 80){
    $('#developer-bg').css('width',windowWidth*1.1);  
    }else{
    $('#developer-bg').css('width',adjust);
  }
  });
  //HANDLE MOUSE EFFECT EASE ON LEAVE
  $('#content-wrapper').on("mouseleave", function(){
    $('#developer-bg').css('transition', 'all .4s');
      $('#developer-bg').css('width', '');
      setTimeout(function(){
        $('#developer-bg').css('transition', '');
      }, 400);
  });
  //HANDLE MASK
  $(window).scroll((event) =>{
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 0){
      $('#mask').show();
    }else{
      $('#mask').hide();
    }
  });
})();







