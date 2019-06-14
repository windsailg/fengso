
$(document).ready(function(){

   //Header Controls
   $('#HeaderSearchRWDTrigger').click(function(){
      $('#HeaderSearchBlock').fadeToggle(220);
   })

var resizeTimer = null;
   $(window).resize(function(){
         if (resizeTimer) {
           clearTimeout(resizeTimer)
         }
         resizeTimer = setTimeout(function(){
            var ww = window.innerWidth;
            if(ww <= 781){
               $('#HeaderSearchBlock').hide();
            }else{
               $('#HeaderSearchBlock').show();
            }
         }, 500);
   })


});


