
$(document).ready(function(){

   //Header Controls
   $('#HeaderLogin , #HEaderRegister').click(function(){
      $('#LightingBox').fadeIn(220);
   })
   //LB Control
   $('#LightingBoxClose').click(function(){
      $('#LightingBox').fadeOut(220);
   })

   $('#HeaderLogin').click(function(){
      $('#LightingBox').fadeIn(220);
   })

   $('#LightingBoxMask').click(function(){
      $('#LightingBox').fadeOut(220);
   })

   
});


