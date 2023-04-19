 $('.content').hide();
  $('.accordion_sec').click(function() {
    $(this).toggleClass('active')
    $('.accordion_sec').not(this).removeClass('active')
    $('.accordion_sec').not(this).find('.content').slideUp()
    $(this).find('.content').slideToggle()
    return false;
  });


$('.item_menu_navigations').click(function(){
   let index = $(this).attr("menu-tag") 
   $(".faq_wrap").fadeOut(0)
   $('.wrap' + index).fadeIn(200);
    if (index == 1) {
      $(".faq_wrap").fadeIn(200)
    }
   return false
})
