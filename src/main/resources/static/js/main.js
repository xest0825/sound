$(function(){

  //공통 팝업 닫기
  $(".btn-close, .btn-close-pop, .btn-done").click(function(){
    $(".pop-bg").css({display:"none"});
    $(".popup").stop().animate({bottom:"-100%"},200);
  });


//비밀번호 눈 끄고 켜기.
  $(".btn-password").click(function(){
    $(".icon-eye").toggleClass("on");

  if( $(".icon-eye").hasClass("on")){
    $(".btn-password").prev().attr({"type": "text"});
  } else {
  $(".btn-password").prev().attr({"type": "password"});
  }
  });

  //feed menu
  $(".btn-plus").click(function(){
    $(".feed-menu-area").toggleClass("active");
  });

  //music box select
  $(".detail-music-box").click(function(){
    $(".detail-music-box").removeClass("active");
    $(this).addClass("active");
  });

//like choose
$(".like-box , .btn-detail-like").click(function(){
  $(this).toggleClass("choose");
});

//ullike
$(".more-like").click(function(){
  if(  $(this).hasClass("choose")){
    $(".alert-pop").css({display:"block"});
  }else {
      $(this).addClass("choose");
  }


});


//nav메뉴 버튼
// $(".nav-list li").click(function(){
//   $(".nav-list li").removeClass("active");
//   $(this).toggleClass("active");
// });

//search - like choose
$(".user-like").click(function(){
  $(this).toggleClass("active");
});

//message-close
$(".btn-message-close").click(function(){
  $(".message, .result").css({display:"none"});
});

//hashtag 삭제
$(".remove-hashtag").click(function(){
  $(this).parent().css({display:"none"});
});

//트랙 삭제
$(".btn-edit").click(function(){
  $(this).parents(".edit-music-box-area").toggleClass("remove");
});
$(".btn-bin").click(function(){
  $(this).parents(".edit-music-box-area").css({display:"none"});
});


});//end



//팝업창 열기
function popupOpen(){
  $("#popup-bg").css({display:"block"});
  $("#popup").stop().animate({bottom:"0%"},200);
};
function popupOpen1(){
  $("#popup-bg-1").css({display:"block"});
  $("#popup-1").stop().animate({bottom:"0%"},200);
};
function popupOpen2(){
  $("#popup-bg-2").css({display:"block"});
  $("#popup-2").stop().animate({bottom:"0%"},200);
};


//경고 팝업창 열기
function alertPopupOpen(){
  $(".alert-pop").css({display:"block"});
};

//경고 팝업창 닫기
function alertPopupClose(){
  $(".alert-pop").css({display:"none"});
};

//unLike
function unLike(){
    $(".more-like").removeClass("choose");
    $(".alert-pop").css({display:"none"});
};

//loading
setTimeout(function(){
testEle = $('#loading');
testEle.fadeOut();
}, 2000)
