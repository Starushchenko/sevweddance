jQuery(document).ready(function($){
     $nav = $(".main-nav");
     $window = $(window);
    // Определяем координаты верха блока навигации
    $h = $nav.offset().top;
    $window.scroll(function(){
        // Если прокрутили скролл ниже макушки блока, включаем фиксацию
        if ( $window.scrollTop() > $h) {
               $nav.addClass("main-nav-fixed");
        }else{
            //Иначе возвращаем всё назад
            $nav.removeClass("main-nav-fixed");
        }
  });
});