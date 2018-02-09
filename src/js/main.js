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


