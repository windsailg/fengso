
$(document).ready(function(){
   
    $('#MemberTabList li').click(function(){
        $('#MemberTabList li').removeClass('active');
        $(this).addClass('active');
    });


//-----------------

$('#EditAvatarBTN').click(function(){
  $('.lightingbox.type3').fadeToggle(150);
})

$('#AvatarImages .chooseable').click(function(){

  var getSrc = $(this).children('img').attr('src');
  var getNum = $(this).children('img').data('num');

  $('#AvatarImageCurrent').children('img').attr({
    'src':getSrc ,
    'data-current-number':getNum,
  });
  alert('個人圖片更換完成');

  $(this).addClass('active').removeClass('chooseable').siblings().removeClass('active').addClass('chooseable')
  $('.lightingbox.type3').fadeToggle(150);
});

//讀取時先判斷是否重複並禁止點選
var getStartNum = $('#AvatarImageCurrent').children('img').attr('data-current-number');
checkAvatarNumber(getStartNum);
function checkAvatarNumber(target){
  $('#AvatarImages .img_box').each(function(){

      var DefaultAvatarImage = $(this).children('img').attr('data-num');
      if( DefaultAvatarImage == target){
        console.log($(this).children('img').attr('data-num'))
        $(this).addClass('active').removeClass('chooseable');
        $('#AvatarImages .active').siblings().removeClass('active').addClass('chooseable');
      }
  });
}
//-----------------


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
