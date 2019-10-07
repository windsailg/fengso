
$(document).ready(function(){
   

$('.delet_box').click(function(){
    // $(this).parents('.cart_course_container').addClass('deleted').delay(300).slideUp(500);
    var target = $(this).parents('.cart_course_container');
    target.delay(300).addClass('deleted').animate({'height':'0','padding-top':'0 ','padding-bottom':'0 ','opacity':'0'},500, 'easeOutQuart' ,function() {
        setTimeout(() => {
            
            target.remove();
        }, 500);
    });
})


//Step-4 Print Function
$('#PrintStartBTN').click(function(){

    //去除超連結設置
    // $('a').each(function(index) {
    //     $(this).replaceWith($(this).html());
    // });

    //指定要列印的區塊
    var PrintTarget = $("#PrintThis").html();
    var bodyHtml = document.body.innerHTML;
    document.body.innerHTML = PrintTarget;
    window.print();
    document.body.innerHTML = bodyHtml;
    window.location.reload(); //列印輸出後更新頁面
});




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

});
