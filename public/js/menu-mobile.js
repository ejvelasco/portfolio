(function(){
  "use strict";
  //VARIABLES
  $('#menu-icn').on('click', ()=>{
  	if($('#navbar').css('display') === 'block'){
      $('#navbar').show('slow');
      $('#social-menu').show('slow');
  		// $('#navbar').hide('slide', {direction: 'left'}, 600);
  		// $('#social-menu').hide('slide', {direction: 'left'}, 600);
  		// $('#menu-icn').removeClass('underline');
  	}else{
  		// $('#navbar').show('slide', {direction: 'left'}, 600);
  		// $('#social-menu').show('slide', {direction: 'left'}, 600);
      $('#navbar').show('slow');
      $('#social-menu').show('slow');
  		// $('#menu-icn').addClass('underline');
  	}
  });

})();