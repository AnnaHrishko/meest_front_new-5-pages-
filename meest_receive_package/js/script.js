 $('.content').hide();
  $('.accordion_sec').click(function() {
    $(this).toggleClass('active')
    $('.accordion_sec').not(this).removeClass('active')
    $('.accordion_sec').not(this).find('.content').slideUp()
    $(this).find('.content').slideToggle()
    return false;
  });