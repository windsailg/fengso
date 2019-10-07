
$(document).ready(function(){
   
    //slide 功能切換
    $('.course_information_controls .item').click(function(){

        // var targetID = '#' + $(this).data('target'); 
        if($(this).hasClass('active')){　　//如果node是隱藏的則顯示node元素，否則隱藏

        }else{
            var targetID = '#' + $(this).data('target'); 
            $('.teacher_page_item').hide();
            $(targetID).fadeIn(260);
            $('.course_information_controls .item').removeClass('active')
            $(this).addClass('active');
        }

    })

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

    TabsInit();
    function TabsInit(){
        $('#QATagsItem-NormalQA , #TeacherPageRateItem , #TeacherPageHomeworkItem').hide();
    }

    $('#QATags .tag').click(function(){

        if($(this).hasClass('active')){　　//如果node是隱藏的則顯示node元素，否則隱藏

        }else{
            var targetID = '#' + $(this).data('target'); 
            $('.tag_tabs_item').hide();
            $(targetID).fadeIn(260);
            $('#QATags .tag').removeClass('active');
            $(this).addClass('active');
        }
    })



    var TeacherCourseInfoSwiper = new Swiper('#TeacherCourseInformationSwiperSlider', {
        autoplay: false,
        navigation: {
            prevEl: '.teacher_course_prev',
            nextEl: '.teacher_course_next',
        },
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 3,
        },
        on:{
            lazyImageLoad: function(imageEl){
                var targetArticleImg = $(imageEl).find('.swiper-lazy');
                swiperLazyfocusepointer(targetArticleImg);
            },
            lazyImageReady: function(imageEl){
                var targetArticleFocuspoint = $(imageEl).find('.focuspoint');
                setTimeout(() => {
                    $(targetArticleFocuspoint).focusPoint();
                }, 100);
                $(targetArticleFocuspoint).addClass('lazied');
            },
        },
        direction : 'vertical',
        allowTouchMove: true,
        grabCursor : true,
        autoHeight: true,
        centeredSlides: true,
        speed:460, //default
        slidesPerView: 'auto',
        spaceBetween: 00,
        loop:false,
        followFinger : false,
        threshold : 5,
        breakpoints: {
            781: {
                direction : 'horizontal',
            },

        },
        // breakpoints: {
        //     1301: {
        //         // slidesPerView: 3,
        //         slidesPerView: 'auto',
        //         lazy: {
        //             loadPrevNext: true,
        //             loadPrevNextAmount: 2,
        //         },
        //     },
        //     401: {
        //         slidesPerView: 1,
        //         spaceBetween: 0,
        //         lazy: {
        //             loadPrevNext: true,
        //             loadPrevNextAmount: 1,
        //         },
        //     },
        // },
    });

    function swiperLazyfocusepointer(target){
    var img = new Image();
    img.src = target.data('src');
    var target_focuspoint = target.parent('.focuspoint');
        $(target_focuspoint).attr({
            'data-focus-x':"0.00",
            'data-focus-y':"0.00",
            'data-image-w':img.width,
            'data-image-h':img.height,
        });
    }

   //lazy + focuspoint
    $(".lazy").Lazy({ 
      scrollDirection: 'vertical',
      effect: 'fadeIn',
      effectTime:300, //duration
    //   throttle:1000,//delay
      visibleOnly: true,
      onError: function(element) {
          console.log('lazy error loading' + element.data('src'));
      },
      beforeLoad: function(element) {
          // Create virtual img to set imgs src src
          var img = new Image();
          img.src = element.data('src');
          //set every attribute
          element.parent('.focuspoint').attr({
              'data-focus-x':"0.00",
              'data-focus-y':"0.00",
              'data-image-w':img.width,
              'data-image-h':img.height,
          });
      },
      afterLoad(element){
        element.parent('.focuspoint').focusPoint();
        element.addClass('lazied');
        },
      onFinishedAll(){
        //   console.log('.');
      },
    });     

});
