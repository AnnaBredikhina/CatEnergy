// Переключение кнопок меню на главной странице
$('.header__nav-link').on('click', function () {
    if ($(this).hasClass('header__nav-link--active') == false) {
        $('.header__nav-link').removeClass('header__nav-link--active')
        $(this).addClass('header__nav-link--active')
    }
});


// Переключение кнопок меню на не главной странице
$('.header__nav-link-not-home').on('click', function () {
    if ($(this).hasClass('header__nav-link-not-home--active') == false) {
        $('.header__nav-link-not-home').removeClass('header__nav-link-not-home--active')
        $(this).addClass('header__nav-link-not-home--active')
    }
});


// Слайдер до/после с input range
$('.example__input').on('input', function () {
    $('.example__image-box--before').css('width', (100 - $('.example__input').val()) + '%')
    $('.example__image-box--after').css('clip-path', 'inset(0 0 0 ' + (100 - $('.example__input').val()) + '%)')
});


// Кнопки Было/Стало
$('.example__slider-btn').on('click', function () {
    if ($(this).hasClass('example__slider-btn--before')) {
        $('.example__image-box--before').css('width', '100%')
        $('.example__image-box--after').css('clip-path', 'inset(0 0 0 100%)')
        $('.example__input').val(0);
    } else if ($(this).hasClass('example__slider-btn--after')) {
        $('.example__image-box--before').css('width', '0%')
        $('.example__image-box--after').css('clip-path', 'inset(0 0 0 0)')
        $('.example__input').val(100);
    }
});


// Бургер-меню
$('.burger').on('click', function () {
    $('.header__nav').toggleClass('header__nav--open')
    $('.header__body').toggleClass('header__body--mobile')
    $('.main__ctlg').toggleClass('main--mobile')
    $('.main__f').toggleClass('main--mobile')
});


// Слайдер при ширине 767-320px
const breakpoint = window.matchMedia("(max-width: 767px)");

if (breakpoint.matches) {
    $('.example__input--mobile').on('input', function () {
        if($(this).val() == 0) {
            $('.example__image-box--before').css('width', '100%')
            $('.example__image-box--after').css('clip-path', 'inset(0 0 0 100%)')
        } else {
            $('.example__image-box--before').css('width', '0%')
            $('.example__image-box--after').css('clip-path', 'inset(0 0 0 0)')
        }
    })
}