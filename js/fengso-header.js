
$(document).ready(function(){

   //Header Controls
   $('#HeaderSearchRWDTrigger').click(function(){
      $('#HeaderSearchBlock').fadeToggle(220);
   })

   //SidebarControl
   $('#SidebarMenuBTN').click(function(){
      $('#SideBar').fadeIn(220);
      noscroll.bind();
   })

   $('#SidebarMask , #SidebarClose').click(function(){
      $('#SideBar').fadeOut(220);
      $('.type_list_block').fadeOut(220);
      $('.type_name_block , .type_list_block').removeClass('active');
      $('.icon').html('<i class="fas fa-angle-down"></i>');
      noscroll.unbind();
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


});


