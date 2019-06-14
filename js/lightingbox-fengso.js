
$(document).ready(function(){

   //Header Controls
   $('#HeaderLogin').click(function(){
      $('#LightingBox').fadeIn(220);
      $('#LoginBlock').show();
   })

   $('#HEaderRegister').click(function(){
      $('#LightingBox').fadeIn(220);
      $('#RegisterBlock').show();
   })


   //LB Control
   $('#LightingBoxClose').click(function(){
      $('#LightingBox , .user_lr').fadeOut(220);
   })
   $('#HeaderLogin').click(function(){
      $('#LightingBox').fadeIn(220);
   })
   $('#LightingBoxMask').click(function(){
      $('#LightingBox , .user_lr').fadeOut(220);
   })


   
});


