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
  $(".tariffs__line--open").click(function(){
    $(this).parents(".tariffs__line").toggleClass("tariffs__line--opened");
  });

  $(".remont__btn").click(function(){
    $('.remont__slider').slick('slickGoTo', $(this).attr('data-slick') - 1);
  });
  $(".chavo__item_quest").click(function(){
    $(this).parents('.chavo__item_content').find('.chavo__item_answer').toggleClass('chavo__item_answer--open');
    $(this).toggleClass('chavo__item_quest--open');
  });
  $(".remont__list--mobile_title").click(function(){
    $(this).toggleClass('remont__list--mobile_title--open');
    $(this).parents(".remont__list--mobile_item").find(".remont__list--mobile_content").toggleClass("remont__list--mobile_content--open");
  });

  $(".header__menu_arrow").click(function(){
    $(this).parents(".header__menu_item").find(".header__submenu").toggleClass("header__submenu--open");
  });
  $(".butter").click(function(){
    $(".header__menu--container").addClass("header__menu--open");
  });
  $(".menu__close").click(function(){
    $(".header__menu--container").removeClass("header__menu--open");
  });

  



  $('.remont__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 200,
    fade: true,
    cssEase: 'linear'
  });

  $('.remont__slider').on('afterChange', function(slick, currentSlide){
    $(".remont__btn").removeClass("remont__btn--active");
    $(".remont__btn:nth-child(" + (1 + $('.remont__slider').slick('slickCurrentSlide')) + ")").addClass("remont__btn--active");
  });


  $('.f-banner__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $('.arenda__slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

  $(".arenda__slider_nav-item").click(function(){
    $('.arenda__slider').slick('slickGoTo', $(this).attr('data-slick') - 1);
  });

  $('.arenda__slider').on('afterChange', function(slick, currentSlide){
    $(".arenda__slider_nav-item").removeClass("active-nav");
    $(".arenda__slider_nav-item:nth-child(" + (1 + $('.arenda__slider').slick('slickCurrentSlide')) + ")").addClass("active-nav");
  });



  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
	});
  
  $('form input[type="checkbox"]').change(function () {
    if ($(this).is(":checked"))
    {
        $(this).parents("form").find("input[type='submit']").attr("disabled", false);
    }
    else
    {
        $(this).parents("form").find("input[type='submit']").attr("disabled", true);
    }
  });
  

  if ($("#map").length > 0) {
    ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
              center: [56.288161, 43.916541],
              zoom: 17
          }, {
              searchControlProvider: 'yandex#search'
          }),

          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),

          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Собственный значок метки',
              balloonContent: 'Это красивая метка'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/marker.png',
              // Размеры метки.
              iconImageSize: [40, 40],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-20, -20]
          });

      myMap.geoObjects
          .add(myPlacemark)
    });
  }

  
});


