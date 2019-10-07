
$(document).ready(function(){

   //Header Controls
   $('#HeaderSearchRWDTrigger').click(function(){
      $('#HeaderSearchBlock').fadeToggle(220);
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
   target.fadeIn(100).children('.lightingbox_wrap').addClass('isopen').animate({'opacity':'1'} ,200 ,function() {
      $('#TeacherRegister .lightingbox_wrap').css({'transform':'scale(1)'});
   });
 }
 

});


