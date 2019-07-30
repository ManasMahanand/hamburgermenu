$(document).ready(function() {
  $('.bars').click(function() {
    if (!$(this).hasClass('active')) {
      $(this).addClass('active');
      $('.menu').addClass('visible');
      $('.menu div').addClass('scale');
    } else {
      $(this).removeClass('active');
    }
  });
});
