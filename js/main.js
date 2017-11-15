/*$('.on-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 2000);

    return false;
});*/

$('a[href="#"]').on('click', function() {
    return false;
});

$('.pickup__carousel').slick({
    prevArrow: "",
    nextArrow: "<a class='arrow' href='#'><img src='/img/svg/arrow.svg'></a>",
    slidesToShow: 3
});

$('.reviews__wrapper').slick({
    prevArrow: "<a class='arrow--left' href='#'><img src='/img/svg/arrow.svg'></a>",
    nextArrow: "<a class='arrow' href='#'><img src='/img/svg/arrow.svg'></a>",
    slidesToShow: 2
});