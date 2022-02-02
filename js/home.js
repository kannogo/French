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
        $('#nav').toggleClass('show');
    });
    $('#one').on('click', function() {
        $('#one1').toggleClass('hiddenshow');
    });
    $('#thee').on('click', function() {
        $('#thee3').toggleClass('hiddenshow');
    });
    $('#four').on('click', function() {
        $('#four4').toggleClass('hiddenshow');
    });
    $('#five').on('click', function() {
        $('#five5').toggleClass('hiddenshow');
    });
    $('#six').on('click', function() {
        $('#six6').toggleClass('hiddenshow');
    });
    $('#seven').on('click', function() {
        $('#seven7').toggleClass('hiddenshow');
    });
    $('#eight').on('click', function() {
        $('#eight8').toggleClass('hiddenshow');
    });
    $('#nine').on('click', function() {
        $('#nine9').toggleClass('hiddenshow');
    });
});
