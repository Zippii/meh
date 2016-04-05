$(function(){
      $('.slideshow > :gt(0)').hide();
  setInterval(function(){
    var rand = Math.floor(Math.random() * ($('.slideshow').children().length-1));
    $('.slideshow > :first-child').appendTo('.slideshow').fadeOut(1000);
    $('.slideshow > *').eq(rand).prependTo('.slideshow').fadeIn(1000);
  }, 4000);
});