
$(document).ready(function(){

   //Header Controls
   $('#HeaderSearchRWDTrigger').click(function(){
      
      $('.header_Search_block').fadeToggle(220);
   })

   //SidebarControl
   $('#SidebarMenuBTN').click(function(){
      //  $('#SideBar').fadeIn(220);
      let target = $('#SideBar');
      target.hide().children('.container').removeClass('is_right').css({'transform':'translateX(-120px)'});
      target.fadeIn(100).children('.container').addClass('is_right').animate({'opacity':'1'} ,0 ,function() {
         $('#SideBar .container').css({'transform':'translateX(0px)'});
      });
      // noscroll.bind();
   })

   $('#SidebarMask , #SidebarClose').click(function(){

      // $('#SideBar').fadeOut(300).children('.container').removeClass('is_right').css({'transform':'translateX(-120px)'});

      $('#SideBar').fadeOut(220);

      $('.type_list_block').fadeOut(220);
      $('.type_name_block , .type_list_block').removeClass('active');
      $('.icon').html('<i class="fas fa-angle-down"></i>');
      // noscroll.unbind();
   })

   $('.type_name_block').click(function(){
      if($(this).hasClass('active')){
         $('.type_list_block').removeClass('active');
         $(this).removeClass('active').children('.icon').html('<i class="fas fa-angle-down"></i>');
         $(this).next('.type_list_block').removeClass('active').slideUp(220)
      }else{
         $('.type_list_block').slideUp(220).removeClass('active');
         $('.type_name_block').removeClass('active').children('.icon').html('<i class="fas fa-angle-down"></i>');
         $(this).addClass('active').children('.icon').html('<i class="fas fa-angle-up"></i>');
         $(this).next('.type_list_block').addClass('active').slideDown(220);
      }
   })


// $('#SideBarITeach').ightingBoxType2();
// $('#HeaderITeach').LightingBoxType2();

 $('#SideBarITeach').click(function(){
      // $(this).next().fadeToggle(300);
      // $('#TeacherRegister').fadeToggle(250);
      lightingBoxAnimation();
 })
 $('#HeaderITeach').click(function(){
      // $(this).next().fadeToggle(300);
      // $('#TeacherRegister').fadeToggle(250);
      lightingBoxAnimation();
 })

 function lightingBoxAnimation(){
   let target = $('#TeacherRegister');
   target.hide().children('.lightingbox_wrap').removeClass('isopen').css({'transform':'scale(0)'});
   target.fadeIn(100).children('.lightingbox_wrap').addClass('isopen').animate({'opacity':'1'} ,150 ,function() {
      $('#TeacherRegister .lightingbox_wrap').css({'transform':'scale(1)'});
   });
 }
 

   var ScrollTimer;

   // $('#GoTopAndBottomButton').hide();

   $(window).scroll(function () {

      $('#GoTopAndBottomButton').show();
      ScrollTimer = window.setTimeout(function () {
         windowTop = $(this).scrollTop() + 10;
         pageHeight = $(document).height();
         windowHeight = $(this).height();
         //a + c > b
         if (windowTop + windowHeight >= pageHeight) {
            $('#Recommender').addClass('oncollapse');
            $('#Collapser').addClass('active');
         }
         //Skylight Mobile ScrollHide Function
         if (windowTop >= 200) {
            $('#SkylightLinkMobile').addClass('onhide');
         } else {
            $('#SkylightLinkMobile').removeClass('onhide');
         }




         //算出卷軸距離文件底部的高度
         var OnScrolltoBottomHeight = $(document).height() - $(window).height() - $(window).scrollTop();
         if (OnScrolltoBottomHeight <= 400) {
            $('#GoTopAndBottomButton').html('<i class="fas fa-arrow-up"><span class="gotop_gobottom_deco gotop "></span></i>')
         } else {
            $('#GoTopAndBottomButton').html('<i class="fas fa-arrow-down"><span class="gotop_gobottom_deco gobotton"></span></i>')
         }
      }, 200)
   });

   //Go top Button Click Func
   $('#GoTopAndBottomButton').on('click', function () {
      $(this).addClass('unactive');
      $('html , body').css({
         'scroll-behavior': 'unset',
      });
      setTimeout(() => {
         $(this).removeClass('unactive');
         $('html , body').css({
            'scroll-behavior': 'smooth',
         });
      }, 1500);
      var CheckScrolltoBottomHeight = $(document).height() - $(window).height() - $(window).scrollTop();
      if (CheckScrolltoBottomHeight <= 400) {
         $('html, body').animate({
            scrollTop: $('html').offset().top
         }, {
            duration: 1000, easing: "swing"
         });
      } else {
         $('html, body').animate({
            scrollTop: $(document).height() - $(window).height()
         }, {
            duration: 1000, easing: "swing"
         });
      }


   });



});


