$(document).ready(function() {
  
  $(".popup__bg").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".popup__close").click(function(){
    $(".popup").removeClass("popup--show");
  });
  $(".js-popup--open").click(function(){
    $(".popup").addClass("popup--show");
  });

  $(".remont__btn").click(function(){
    $(".remont__btn").removeClass("remont__btn--active");
    $(this).addClass("remont__btn--active");
  });
});


