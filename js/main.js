$(document).ready(function () {
    const flowersSlider = new Swiper('.flowers-slider', {
        // Параметры слайдера
        loop: true,
        slidesPerView: 6,
        
      
        // Подключаем стрелки
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    
        // адаптив для слайдера
    
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              
            },
        
            992: {
             slidesPerView: 6,
              }
          }    
      });
      const ReviewsSlider = new Swiper('.reviews-slider', {
        // Параметры слайдера
        loop: true,
        slidesPerView: 1,
        
      
        // Подключаем стрелки
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },    
      });

      $("#review-1").on('click', function() {

        $.fancybox.open([
          {
            src  : 'https://source.unsplash.com/IvfoDk30JnI/1500x1000',
            opts : {
              caption : 'Первое фото',
              thumb   : 'https://source.unsplash.com/IvfoDk30JnI/240x160'
            }
          },
          {
            src  : 'https://source.unsplash.com/0JYgd2QuMfw/1500x1000',
            opts : {
              caption : 'Второе фото',
              thumb   : 'https://source.unsplash.com/0JYgd2QuMfw/240x160'
            }
          }
        ], {
          loop : true,
          thumbs : {
            autoStart : true
          }
        });
      
      });
});