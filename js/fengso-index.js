


$(document).ready(function(){
   

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
        element.parent('.focuspoint').delay(500).focusPoint();
        element.addClass('lazied');
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

var BannerSwiper = new Swiper('#BannerSwiperBlock', {
    allowTouchMove: true,
    slidesPerView: 1,
    effect: 'fade',
    spaceBetween: 0,
    loop: true,
    autoHeight: false,
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
    },
    autoplay: {
        delay: 5000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

});

var CourseHotSwiper = new Swiper('#CourseListBlockHot', {
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: '.pager_number.hot_prev',
        nextEl: '.pager_number.hot_next',
    },
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 1,
    },
    on:{
        // resize: function(){
        //     // CourseHotSwiper.init();
        // }, 
        lazyImageLoad: function(imageEl){
            var targetImgHot = $(imageEl).find('.swiper-lazy');
            swiperLazyfocusepointer(targetImgHot);
        },
        lazyImageReady: function(imageEl){
            var targetFocuspointHot = $(imageEl).find('.focuspoint');
            setTimeout(() => {
                $(targetFocuspointHot).focusPoint();
            }, 100);
            $(targetFocuspointHot).addClass('lazied');
        },
    },
    allowTouchMove: true,
    grabCursor : true,
    autoHeight: false,
    centeredSlides: false,
    speed:400, //default
    spaceBetween: 0,
    slidesPerView: 4,
    breakpoints: {
        1301: {
            // slidesPerView: 3,
            slidesPerView: 'auto',
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 4,
            },
        },
        701: {
            slidesPerView: 2,
            slidesPerColumn: 2,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 6,
            },
        },
    },
});

var CoursePreorderSwiper = new Swiper('#CourseListBlockPreorder', {
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: '.pager_number.pre_prev',
        nextEl: '.pager_number.pre_next',
    },
    lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 10,
    },
    on:{
        // resize: function(){
        //     CourseHotSwiper.init();
        // }, 
        lazyImageLoad: function(imageEl){
            var targetImg = $(imageEl).find('.swiper-lazy');
            swiperLazyfocusepointer(targetImg);
        },
        lazyImageReady: function(imageEl){
            var targetFocuspoint = $(imageEl).find('.focuspoint');
            setTimeout(() => {
                $(targetFocuspoint).focusPoint();
            }, 100);
            $(targetFocuspoint).addClass('lazied');
        },
    },
    allowTouchMove: true,
    grabCursor : true,
    autoHeight: false,
    centeredSlides: false,
    speed:400, //default
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerColumn: 2,
    breakpoints: {
        1301: {
           slidesPerView: 'auto',
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 15,
            },
        },
        701: {
            slidesPerColumn: 3,
            slidesPerView: 2,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 15,
            },
        },
    },
});

var TeacherIntroSwiper = new Swiper('#TeacherListBlock', {
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: '.pager_number.teacher_prev',
        nextEl: '.pager_number.teacher_next',
    },
    allowTouchMove: true,
    grabCursor : true,
    autoHeight: false,
    centeredSlides: false,
    speed:400, //default
    slidesPerView: 3,
    spaceBetween: 0,
    breakpoints: {
        1301: {
           // slidesPerView: 3,
           slidesPerView: 'auto',
           centeredSlides: true,
        },
        401: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
    },
});

var ArticleListSwiper = new Swiper('#ArticleListIndex', {
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
    navigation: {
        prevEl: '.pager_number.article_prev',
        nextEl: '.pager_number.article_next',
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

    allowTouchMove: true,
    grabCursor : true,
    autoHeight: false,
    centeredSlides: true,
    speed:400, //default
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop:true,
    breakpoints: {
        1301: {
            // slidesPerView: 3,
            slidesPerView: 'auto',
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 2,
            },
        },
        401: {
            slidesPerView: 1,
            spaceBetween: 0,
            lazy: {
                loadPrevNext: true,
                loadPrevNextAmount: 1,
            },
        },
    },
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


//推薦課程字數限制
wrap_ellipsis('#CourseListBlockHot .content',40);

//推薦預購字數限制
wrap_ellipsis('#CourseListBlockPreorder .content',40);

//推薦名師字數限制
wrap_ellipsis('#TeacherListBlock .teacher_intro',50);

//推薦文章字數限制
wrap_ellipsis('#ArticleListIndex .article',145);

//換行Ellipsis
function wrap_ellipsis(article_target,article_length){
    var target = article_target;
    var length = article_length;
    $(article_target).each(function(i){
        if($(this).text().length>article_length){
            $(this).attr("title",$(this).text());
            var thistext=$(this).text().substring(0,article_length-1)+"...";
            $(this).text(thistext);
        };
    });
};



$('#IWantToTeach').LightingBox();



// setTimeout(() => {
//     CourseHotSwiper.init();
//     console.log('init complete')
// }, 3000);
    

});


    var player;

    function onYouTubePlayerAPIReady() {
        player = new YT.Player('player', {
        //   height: '390',
        //   width: '640',
          videoId: 'MOVJYGeu93M',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
    }

    // autoplay video
    function onPlayerReady(event) {
       event.target.playVideo();
    }

    // when video ends
    function onPlayerStateChange(event) {        
        if(event.data === 0) {            
            // alert('completed');
        }
    }
 