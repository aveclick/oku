$(function(){
  $('.header__burger').click(function(event){
  $('.header__burger, .header__menu').toggleClass('active');
  $('body').toggleClass('lock');
  });
  $('.header__menu__list a').click(function(event){
    $('.header__burger, .header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
