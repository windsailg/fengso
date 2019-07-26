

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



(function ($) {
   
   //點擊後將資料嵌入動態產生的容器內
   $.fn.LightingBoxType2 = function(options) {


      //init - 開始建立容器
      // var newlb = document.createElement('div');
      // newlb.setAttribute('id', 'LightingBox') ;
      // newlb.setAttribute('class', 'lightingbox') ;

      // var lbwrap = document.createElement('div');
      // lbwrap.setAttribute('class', 'lightingbox_wrap') ;

      // var lbcontainer = document.createElement('div');
      // lbcontainer.setAttribute('id', 'LightingBoxInnerContainer') ;
      // lbcontainer.setAttribute('class', 'lightingbox_container') ;



      // var lbbtnclose = document.createElement('span');
      // lbbtnclose.setAttribute('class', 'btn_close ') ;

      // var lbbtnclosebox = document.createElement('div');
      // lbbtnclosebox.setAttribute('class', 'btn_close_box') ;

      // var lbbtncloseelement_1 = document.createElement('span');
      // lbbtncloseelement_1.setAttribute('class', 'c_deco cd1') ;

      // var lbbtncloseelement_2 = document.createElement('span');
      // lbbtncloseelement_2.setAttribute('class', 'c_deco cd2') ;

      // var lbbtntext = document.createElement('span');
      // lbbtntext.setAttribute('class', 'btn_close_text') ;

      // var lbbtntextnode = document.createTextNode("關閉視窗");
      
      // var lbmask = document.createElement('div');
      // lbmask.setAttribute('class', 'lightingbox_mask') ;



      //type2
      var newlb = document.createElement('div');
      // newlb.setAttribute('id', 'LightingBoxType2') ;
      newlb.setAttribute('class', 'lightingbox type2') ;

      var lbwrap = document.createElement('div');
      lbwrap.setAttribute('class', 'lightingbox_wrap type2') ;

      var lbcontainer = document.createElement('div');
      // lbcontainer.setAttribute('id', 'LightingBoxInnerContainerType2') ;
      lbcontainer.setAttribute('class', 'lightingbox_container') ;


      var lbbtnclose = document.createElement('span');
      lbbtnclose.setAttribute('class', 'btn_close type2') ;

      var lbbtnclosebox = document.createElement('div');
      lbbtnclosebox.setAttribute('class', 'btn_close_box') ;

      var lbbtncloseelement_1 = document.createElement('span');
      lbbtncloseelement_1.setAttribute('class', 'c_deco cd1') ;

      var lbbtncloseelement_2 = document.createElement('span');
      lbbtncloseelement_2.setAttribute('class', 'c_deco cd2') ;

      var lbbtntext = document.createElement('span');
      lbbtntext.setAttribute('class', 'btn_close_text') ;

      var lbbtntextnode = document.createTextNode("關閉視窗");
      
      var lbmask = document.createElement('div');
      lbmask.setAttribute('class', 'lightingbox_mask') ;


         var Target = $(this);
         //將創建的元素寫入容器
         Target.after(newlb);
         $(newlb).append(lbwrap,lbmask);
         $(lbwrap).append(lbcontainer,lbbtnclose);
         $(lbbtnclose).append(lbbtnclosebox,lbbtntext);
         $(lbbtnclosebox).append(lbbtncloseelement_1,lbbtncloseelement_2);
         $(lbbtntext).append(lbbtntextnode);

         //lbbtntext.appendChild(textnode);
         var targetID = '#' + Target.data('content');
         var targetHtml = $(targetID).html();
         $('.lightingbox_container').html(targetHtml);

         btnFunctionheader();


      this.click(function(options){

         LightingBoxOpeningType2();
         
         console.log('lb success');

      })


   };

   return this;
}( jQuery ));


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
         $('.lightingbox.type2').fadeIn(220);
   //noscroll.bind();
      }
      function LightingBoxOpening(BoxType){
         $('#LightingBox').fadeIn(220);
         //noscroll.bind();
      }
      function LightingBoxClosing(BoxType){
         $('#LightingBox , .lightingbox.type2 , .user_lr').fadeOut(220);
         //noscroll.unbind();

      }


});
