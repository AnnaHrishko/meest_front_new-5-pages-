 $('.content').hide().eq(0).show();
  $('.accordion_sec').click(function() {
    $('.accordion_sec').removeClass('active')
    $(this).addClass('active')
    $(".content").slideUp();
    $(this).find('.content').slideDown();
    return false;
  });