let burger = $('.burger');
let nav = $('.header__navbar');

burger.on('click', function () {
    nav. toggleClass('active');
    burger. toggleClass('active');
});