
$(document).ready(function(){
   
    $('#FunctionTab li').click(function(){
        $('#FunctionTab li').removeClass('active');
        $(this).addClass('active');
    });



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
          console.log('Lazy Complete');
      },
    });     

});
