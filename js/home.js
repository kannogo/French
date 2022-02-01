$(document).on('ready', function() {
    $(".slideshow").slick({
        arrows: false,
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000
    });
});

$(function () {
    /*
     * Sticky header
     */
    $('.page-header').each(function () {
        let $window = $(window),
            $header = $(this),
            headerOffsetTop = $header.offset().top;

        $window.on('scroll', function () {
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
            } else {
                $header.removeClass('sticky')
            }
        });
        $window.trigger('scroll');
    });
});

$(document).on('ready', function() {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow:3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 361,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

document.querySelectorAll('*').forEach(el => el.clientWidth > document.body.clientWidth ? console.log(el) : null);

$(document).ready(function() {
    $('#open_nav').on('click', function() {
        $('#wrapper, #nav').toggleClass('show');
    });
});
