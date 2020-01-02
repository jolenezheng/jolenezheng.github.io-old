$(window).scroll(function() {
  $(".content").css("opacity", 1 - $(window).scrollTop() / 250);
});