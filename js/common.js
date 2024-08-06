$(document).ready(function () {
  $('.questions-item').on('click', function() {
  	let parents_items = $(this).closest('.questions-row');
  	parents_items = $(parents_items).find('.questions-item');
  	$(parents_items).removeClass('active');
  	$(this).addClass('active');
  })


  let counter_slides = 1;

  let slider_interval = setInterval(slider_slide, 4500);

  $('.first-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      swipe: false,
  });


  if ($(window).width() < 767) {
    $('.confidence-block--small').unwrap();

    $('.first-navigation').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      variableWidth: true,
      swipe: false,
    });
  }

  

  if ($(window).width() > 767) {
    $('.first-navigation__item').on('click', function() {
      clearInterval(slider_interval);
      let index_item = $('.first-navigation__item').index(this);
      $('.first-navigation__item').removeClass('active');
      $(this).addClass('active');

      $('.first-slider').slick('slickGoTo', index_item);

      counter_slides = index_item;

      counter_slides = counter_slides + 1;

      slider_interval = setInterval(slider_slide, 4500);
    })
  }

  function slider_slide() {
    if (counter_slides == 5) {
      counter_slides = 0;
    }
    //$('.first-slider').slick("slickNext");

    if ($(window).width() < 767) {
      //$('.first-navigation').slick("slickNext");
    }

    $('.first-navigation__item').removeClass('active');
    let current_item = $('.first-navigation__item:not(.slick-cloned)')[counter_slides];
    $(current_item).addClass('active');
    counter_slides = counter_slides + 1;
  }

  
  
  

  $('.modal-menu__close').on('click', function() {
  	$('.modal-menu').removeClass('active');
  	return false;
  })

  $('.header__burger').on('click', function() {
  	$('.modal-menu').addClass('active');
  	return false;
  })
})