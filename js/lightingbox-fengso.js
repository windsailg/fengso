

$(document).ready(function(){



   //固定畫面不捲動物件
   // var noscroll = {
   //    bind: function(){
   //       var tops = $(document).scrollTop();
   //       $(document).bind("scroll",function (){
   //          $(document).scrollTop(tops);
   //       });
   //    },
   //    unbind: function(){
   //       $(document).unbind("scroll");
   //    },
   //    overflow: function(){
   //       if($('body').css('overflow-y') === 'hidden' ){
   //          $('body').css({
   //             'overflow-y':'auto',
   //          });
   //       }else{
   //          $('body').css({
   //             'overflow-y':'hidden',
   //          });
   //       }
   //    }
   // };



// console.log('lb step0');
// (function ($) {
//    console.log('lb step1');
//    $.fn.LightingBox = function(event) {
//       this.click(function(event){
//          event.preventDefault();
//          var targetID = '#' + $(this).data('content');
//          var targetHtml = $(targetID).html();
//          LightingBoxOpeningType2();
//          $('#LightingBoxInnerContainerType2').html(targetHtml);
//          console.log('lb success');
//       })
//    };
// }( jQuery ));





btnFunctionheader()

   function btnFunctionheader(){

      $('#HeaderLogin').click(function(){
         LightingBoxOpening();
         $('#LoginBlock').show();
      })

      $('#HEaderRegister').click(function(){
         LightingBoxOpening();
         $('#RegisterBlock').show();
      })

      $('.lightingbox_mask , .btn_close').click(function(){
         LightingBoxClosing();
      })

   }

      //LB Control




      function LightingBoxOpeningType2(BoxType){
         $('#TeacherRegister').fadeIn(220);
   //noscroll.bind();
      }
      function LightingBoxOpening(BoxType){
         $('#LightingBox').fadeIn(220);
         //noscroll.bind();
      }
      function LightingBoxClosing(BoxType){
         $(' .lightingbox, .user_lr').fadeOut(220);
         //noscroll.unbind();

      }


});
