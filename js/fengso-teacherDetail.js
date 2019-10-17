
$(document).ready(function(){
   

const document_width = $(document).width(); 
const resizeTimer = null;
$(window).resize(function(){
    if (resizeTimer) {
        clearTimeout(resizeTimer);
    }
    if(document_width!=$(document).width()){
        document_width=$(document).width();
        resizeTimer = setTimeout(function(){
            location.reload();
        }, 500);
    }
})

ResizerRunner();
function ResizerRunner(){
    let ww = window.innerWidth;
    if(ww <= 920){

        let SwiperItemSaver = $('#SwiperItemContainer').html();
        $('#SwiperItemContainer').hide();
        $('#TeacherDetailSwiperWrapper').append(SwiperItemSaver);

        const TeacherIntroTabSwiper = new Swiper('#TeacherIntroTabSwiper',{
            // centeredSlides:true,
            grabCursor:true,
            slidesPerView: 'auto',
        })

        const TeacherCourseBlockSwiper = new Swiper('#TeacherDetailSwiper', {
            preventInteractionOnTransition:true,
            followFinger:false,
            threshold:5,
            slidesPerView: 'auto',
            grabCursor:true,
            autoHeight:false,
            centeredSlides:true,
            speed:400, //default
            spaceBetween:40,
            autoHeight: true,
            history: false,
            breakpoints:{
                1301: {
                    noSwiping:false,
                    allowTouchMove: true,
                    slidesPerView: 1,
                    threshold : 3,
                },
                901: {
                    noSwiping:false,
                    allowTouchMove: true,
                    slidesPerView: 1,
                    threshold : 5,
                },
            },
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 1,
            },
            on:{
                transitionEnd: function(){
                    // window.scroll(0, 0)
                    $('html, body').scrollTop(0)
                },
                //  resize: function(){
                //  }, 
                lazyImageLoad: function(imageEl){
                    console.log('loading');
                    var targetImgHot = $(imageEl).find('.swiper-lazy');
                    swiperLazyfocusepointer(targetImgHot);
                },
                lazyImageReady: function(imageEl){
                    var targetFocuspointHot = $(imageEl).find('.focuspoint');
                    setTimeout(() => {
                        $(targetFocuspointHot).focusPoint();
                    }, 500);
                    $(targetFocuspointHot).addClass('lazied');
                    console.log('swiper lazy success')
                },
            },
            thumbs: {
                swiper: TeacherIntroTabSwiper,
            }
        });

    }else{
        $('#SwiperItemContainer').show();
    }
        
}


    //lazy + focuspoint
    $(".lazy").Lazy({
        scrollDirection: 'vertical',
        effect: 'fadeIn',
        effectTime:300, //duration
        throttle:1000,//delay
        //delay: 2000,
        visibleOnly: true,
        onError: function(element) {
            console.log('lazy error loading' + element.data('src'));
        },
        beforeLoad: function(element) {
            // Create virtual img to set imgs src src
            pureLazyfocusepointer(element);
        },
        afterLoad(element){
            setTimeout(() => {
                element.addClass('lazied');
                element.parent('.focuspoint').focusPoint();
            }, 300);
        },
        onFinishedAll(){
            console.log('img Complete');
        },
    });     

    function pureLazyfocusepointer(target){
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
    

});
