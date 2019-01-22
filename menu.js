$(function(){
  $('.menu-icon').on('click touched',function(){
    $("header").toggleClass('open');
    $("nav").slideToggle(500);
  });
 });
