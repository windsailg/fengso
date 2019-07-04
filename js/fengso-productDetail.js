$('#header').load('header.html');        
$('#footer').load('footer.html');    

$(document).ready(function(){

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
   $('.chapter_list').children('.type_collapse').click(function(){
      if($(this).hasClass('active')){
         $(this).removeClass('active');
         $(this).find('.square').html('<i class="fas fa-minus"></i>');
         $(this).next('.step_2').show();
      }else{
         $(this).addClass('active');
         $(this).find('.square').html('<i class="fas fa-plus"></i>');
         $(this).next('.step_2').hide();
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
   
   //Rate and Add to list
  
   var ActName = $('.add_to_list').children('.act_name').html();
   $('.add_to_list').click(function(){
      if($(this).hasClass('active')){

         $(this).removeClass('active animate');
         $(this).children('.btn').html('<i class="far fa-heart"></i>');
         $(this).children('.act_name').html(ActName);
      }else{
         $(this).addClass('active animate');
         $(this).children('.btn').html('<i class="fas fa-heart"></i>');
         $(this).children('.act_name').html('已加入課程');
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


      //rating function rate and evaluation
      $('#RatingStars label').click(function(){
         var Target = $(this);
         var RatingVal = Target.attr('for');
         var Evaluation = $('#RatingEvaluation');

         if(RatingVal == 'star_0'){
            Evaluation.html('糟透了 :(( ');
         }else if(RatingVal == 'star_0.5'){
            Evaluation.html('真是糟 :( ');
         }else if(RatingVal == 'star_1'){
            Evaluation.html('很糟，請在加油 ');
         }else if(RatingVal == 'star_1.5'){
            Evaluation.html('有很大的進步空間');
         }else if(RatingVal == 'star_2'){
            Evaluation.html('進步空間很大');
         }else if(RatingVal == 'star_2.5'){
            Evaluation.html('再加油！');
         }else if(RatingVal == 'star_3'){
            Evaluation.html('普通');
         }else if(RatingVal == 'star_3.5'){
            Evaluation.html('不錯');
         }else if(RatingVal == 'star_4'){
            Evaluation.html('很棒 ');
         }else if(RatingVal == 'star_4.5'){
            Evaluation.html('棒透了！ ');
         }else if(RatingVal == 'star_5'){
            Evaluation.html('太好了 學到很多東西！ ');
         }

      })
      //rating function mob
      const labels = document.querySelectorAll('label');
      const getInput = val => document.getElementById(`star_${val}`);

      labels.forEach(label => {

         label.addEventListener('touchstart', e => {
            const targetInput = getInput(e.target.control.value);
            targetInput.checked = true;
            console.log(getInput)
         })

         label.addEventListener('touchmove', e => {
            const touch = e.touches[0]
            const targetLabel = document.elementFromPoint(touch.clientX, touch.clientY)

            if (!targetLabel || !targetLabel.htmlFor) {
               
               return
               
            }

            const targetInput = document.getElementById(targetLabel.htmlFor)
            targetInput.checked = true;
         })
         
      })
});
