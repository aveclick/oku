$(function(){
  $('.header__burger').click(function(event){
  $('.header__burger, .header__menu').toggleClass('active');
  $('html').toggleClass('lock');
  });
  $('.header__menu__list a').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('html').toggleClass('lock');
  });
});
