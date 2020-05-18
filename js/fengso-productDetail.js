

$(document).ready(function(){
   $('#header').load('header.html');
   $('#footer').load('footer.html');



   //寫入網址到input
   $('.link__box').val(location.href);
   //選取並複製選取的內容
   $('.link__btn').on('click', function() {      
      $('.link__box').select();
      document.execCommand('copy');
      $(this).addClass('isactive');
      $('#CopySuccessAlert').addClass('isshow');
      setTimeout(() => {
         $(this).removeClass('isactive');
         $('#CopySuccessAlert').removeClass('isshow');
      }, 1200);
   })



   //Add title to the List item
   $('.course_list_item ').each(function(){
      let targetItemTitle = $(this).children('.title').html();
      $(this).attr('title',targetItemTitle);
   });
   
   //IntroVideo Activer
   $('.video_activer').click(function(){
      $('.video_activer').removeClass('active');
      $(this).toggleClass('active');
   })

   $('.tab_panel').click(function(){
      $('.tab_panel').removeClass('active');
      $(this).toggleClass('active');
      var panel_id = $(this).data('tab-name');
      //console.log(panel_id);
   $('.course_type_list').hide();
      $(panel_id).fadeIn(150);
   })

   //CourseList /ChapterList active control
   $('.chapter_list').find('.type_collapse').on('click' , function(){
      if($(this).hasClass('active')){
         $(this).removeClass('active');
         $(this).find('.square').html('<i class="fas fa-minus"></i>');
         $(this).parents('.content').next('.step_2').show();
      }else{
         $(this).addClass('active');
         $(this).find('.square').html('<i class="fas fa-plus"></i>');
         $(this).parents('.content').next('.step_2').hide();
      }
   })

   $('#CourseContentTab .tab_item').click(function(){
      $('.tab_item').removeClass('active');
      $(this).addClass('active');
   })

   //Announcement List Control
   $('#AnnouncementController').click(function(){
      if($('#AnnouncementContainer').hasClass('active')){
         $('#AnnouncementContainer').removeClass('active');
         $(this).removeClass('active');
         $(this).find('.controller').html('<i class="fas fa-sort-down"></i>展開全部');
      }else{
         $('#AnnouncementContainer').addClass('active');
         $(this).addClass('active');
         $(this).find('.controller').html('<i class="fas fa-sort-up"></i>收合內容');
      }
   })
   
    //tmp course trigger
   $('.course_intro').fadeIn(200);
   $('#CourseContentTab .tab_item').click(function(){
      $('.course_tabtarget').hide();
        var thisTabTarget = '.' + $(this).data('target');
        console.log(thisTabTarget);
        $(thisTabTarget).fadeIn(350);    
   });

   $('.course_discuss_blocks .trigger').click(function(){
     
      if($(this).prev('.content_box').hasClass('expand')){

         $(this).prev('.content_box').removeClass('expand');
         $(this).removeClass('expand');
         $(this).html(' 展開 <i class="fas fa-angle-down"></i>');
      }else{
         $(this).prev('.content_box').addClass('expand');
         $(this).addClass('expand');
         $(this).html(' 收合 <i class="fas fa-angle-up"></i>');
      }
       
   })
   

   //rating function rate and evaluation
   $('#RatingStars label').click(function(){


      var Target = $(this);
      var RatingVal = Target.attr('for');
      var Evaluation = $('#RatingEvaluation');

      if(RatingVal == 'star_0'){
         Evaluation.html('0 糟透了 :(( ');
      }else if(RatingVal == 'star_0.5'){
         Evaluation.html('0.5 真是糟 :( ');
      }else if(RatingVal == 'star_1'){
         Evaluation.html('1.0 請在加油！');
      }else if(RatingVal == 'star_1.5'){
         Evaluation.html('1.5 有很大的進步空間');
      }else if(RatingVal == 'star_2'){
         Evaluation.html('2.0 還有進步空間');
      }else if(RatingVal == 'star_2.5'){
         Evaluation.html('2.5 再加油！');
      }else if(RatingVal == 'star_3'){
         Evaluation.html('3.0 還不錯');
      }else if(RatingVal == 'star_3.5'){
         Evaluation.html('3.5 Nice！');
      }else if(RatingVal == 'star_4'){
         Evaluation.html('4.0 很棒的課程！');
      }else if(RatingVal == 'star_4.5'){
         Evaluation.html('4.5 棒透了！ ');
      }else if(RatingVal == 'star_5'){
         Evaluation.html('5.0 太好了！  我學到很多東西！ ');
      }

   })



   //rating function mob
   // const labels = document.querySelectorAll('label');
   // const getInput = val => document.getElementById(`star_${val}`);

   // labels.forEach(label => {

   //    label.addEventListener('touchstart', e => {
   //       const targetInput = getInput(e.target.control.value);
   //       targetInput.checked = true;
   //       console.log(getInput)
   //    })

   //    label.addEventListener('touchmove', e => {
   //       const touch = e.touches[0]
   //       const targetLabel = document.elementFromPoint(touch.clientX, touch.clientY)

   //       if (!targetLabel || !targetLabel.htmlFor) {
            
   //          return
            
   //       }

   //       const targetInput = document.getElementById(targetLabel.htmlFor)
   //       targetInput.checked = true;
   //    })
      
   // })

   //HomeworkBox Functions
   $('#HomeworkUploadBox').hide();
   $('#HomeworkUploadOpenButton').click(function(){
      // $(this).delay(80).hide(0);
      $(this).hide(0);
      // $('#HomeworkUploadBox').slideDown(200);
      $('#HomeworkUploadBox').fadeIn(200);
   });
   $('#HomeworkUploadCloseButton').click(function(){
      // $('#HomeworkUploadBox').slideUp(200);
      $('#HomeworkUploadBox').fadeOut(0);
      $('#HomeworkUploadOpenButton').show(0);
   });




   $('.discuss_btn').click(function(){
      //取出學園區塊內容
      let thisDetail = $(this).parents('.homework_block').children('.homework_discussion_block');

      //將內容物複製到燈箱
      $('#LightingBoxHomework').find('.homework_discuss_container').html(thisDetail.clone());

      //開啟燈箱動畫
      let target = $('#LightingBoxHomework');
         target.hide().children('.lightingbox_wrap').removeClass('isopen').css({'transform':'scale(0)'});
         target.show().children('.lightingbox_wrap').addClass('isopen').animate({'opacity':'1'} ,200 ,function() {
         $('#LightingBoxHomework .lightingbox_wrap').css({'transform':'scale(1)'});
      });
      
   }) 
});


$(window).bind('scroll resize', function () {

   var eleTop = $('.intro_block').offset().top - 75;//物件高度

   var windowTop = $(window).scrollTop();//卷軸頂部高度
   var tabWindowTop = windowTop;//桌面header高度
   var mobWindowTop = windowTop + 40;//手機header高度

   //卷軸高度大於物件距離頂端高度(0)
   if (eleTop > tabWindowTop) {
      $('#CourseShareBlock').removeClass('isfixed');
      $('.intro_tab_block').css({
         'position': 'relative',
         'top': '0',
      });
      $('.intro_block').css({
         'padding-top': 'unset',
      })
   } else if (eleTop <= mobWindowTop) {

      $('#CourseShareBlock').addClass('isfixed');
      $('.intro_tab_block').css({
         'position': 'fixed',
         'top': '80px',
      });
      
      $('.intro_tab_block hr').css({
         'display': 'none',
      });
      $('.intro_block').css({
         'padding-top': '75px',
      })
      // if (window.innerWidth > 1301) {


      //    // $('.pb-container').css({
      //    //    'padding': '90px  0 0 0',
      //    // })
      // } else {
      //    $('.intro_tab_block').css({
      //       'position': 'fixed',
      //       'top': '50px',
      //    });
      // }
   }


}).scroll();



// $('#tabs-nav').children('.swiper-slide').find('a').click(function () {

//    $("html, body").animate({
//       scrollTop: $("#CourseTaber").offset().top
//    }, {
//       duration: 300, easing: "swing"
//    });

// });