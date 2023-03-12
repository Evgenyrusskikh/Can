$(document).ready(function(){
  $('.icon-menu').click(function(event){
      $('.icon-menu, .menu__body').toggleClass('active');
      $('body').toggleClass('lock');
      
  });


  $('.header__list').click(function(event) {
    $('.icon-menu, .menu__body').removeClass('active');
    $('body').removeClass('lock');
  });


  $('.menu__link').click(function(event){
    $('menu__link').toggleClass('activepage');
    
    
});
var modal = document.getElementById('myModal');
  var btn = document.getElementById("btn");
  var span = document.getElementsByClassName("modal__close")[0];
  
  $(btn).click(function(event){
    $(modal).toggleClass('open');
    $('body').toggleClass('lock');
    
});


$(span).click(function(event) {
  $(modal).removeClass('open');
  $('body').removeClass('lock');
});
let burg = $(".icon-menu"); // указываем кнопку
let body = $(".menu__body");

$(document).click(function (e) { // событие клика по веб-документу
if ( ! burg.is(e.target) && burg.has(e.target).length === 0 &&
        ! body.is(e.target) && body.has(e.target).length === 0 
        ) {
       $('.icon-menu, .menu__body').removeClass('active');
       $('body').removeClass('lock');
    }   
});




  const swiper = new Swiper('.mySwiper', {
      direction: 'horizontal',
      loop:true,
      initialSliade: 0,
            
            
      watchOverflow: true,
      breakpoints:{
        1090.98:
        {
          slidesPerView: "auto", 
          slidesPerGroup1: 1,
          spaceBetween: 140,
        },
        650:
        {
          slidesPerView:2,
          slidesPerGroup:2,
          spaceBetween: 30
        },
        150:{
          slidesPerView:1, 
          slidesPerGroup:1,
          
        },
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });
});
