
   var noscroll = {
      bind: function(){
         var tops = $(document).scrollTop();
         $(document).bind("scroll",function (){
            $(document).scrollTop(tops);
         });
      },
      unbind: function(){
         $(document).unbind("scroll");
      },
      overflow: function(){
         if($('body').css('overflow-y') === 'hidden' ){
            $('body').css({
               'overflow-y':'auto',
            });
         }else{
            $('body').css({
               'overflow-y':'hidden',
            });
         }
      }
   };

   function LightingBoxOpeningType2(BoxType){
      $('#LightingBoxType2').fadeIn(220);
      //noscroll.bind();
   }
   function LightingBoxOpening(BoxType){
      $('#LightingBox').fadeIn(220);
      //noscroll.bind();
   }
   function LightingBoxClosing(BoxType){
      $('#LightingBox , #LightingBoxType2 , .user_lr').fadeOut(220);
      //noscroll.unbind();
   }


(function ($) {
   $.fn.LightingBox = function(event) {
      this.click(function(event){
         event.preventDefault();
         var targetID = '#' + $(this).data('content');
         var targetHtml = $(targetID).html();
         LightingBoxOpeningType2();
         $('#LightingBoxInnerContainerType2').html(targetHtml);
      })
   };
}( jQuery ));

$(document).ready(function(){

   //Header Controls
   $('#HeaderLogin').click(function(){
      LightingBoxOpening();
      $('#LoginBlock').show();
   })

   $('#HEaderRegister').click(function(){
      LightingBoxOpening();
      $('#RegisterBlock').show();
   })

   //LB Control
   $('.lightingbox_mask , .btn_close').click(function(){
      LightingBoxClosing();
   })

});
