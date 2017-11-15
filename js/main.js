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
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1139,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        }
    ]
});

$('.reviews__wrapper').slick({
    prevArrow: "<a class='arrow--left' href='#'><img src='/img/svg/arrow.svg'></a>",
    nextArrow: "<a class='arrow' href='#'><img src='/img/svg/arrow.svg'></a>",
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: false
            }
        }
    ]
});