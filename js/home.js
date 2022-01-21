$(function () {
    $('.slideshow').each(function () {
        let $container = $(this),
            $slideGroup = $container.find('.slideshow-slides'),
            $slides = $slideGroup.find('.slide'),
            $nav = $container.find('.slideshow-nav'),
            $indicator = $container.find('.slideshow-indicator'),
            slideCount = $slides.length,
            indicatorHTML = '',
            currentIndex = 0,
            duration = 1500,
            easing = 'easeInOutExpo',
            interval = 7500,
            timer;

        $slides.each(function (i) {
            $(this).css({ left: `${100 * i}%` });
            indicatorHTML += '<a href="#">' + (i + 1) + '</a>';
        });
        $indicator.html(indicatorHTML);

        function goToSlide (index) {
            $slideGroup.animate({ left: - 100 * index + '%' },duration, easing);
            currentIndex = index;
            updateNav();
        }
        function updateNav () {
            let $navPrev = $nav.find('.prev'),
                $navNext = $nav.find('.next');
            if (currentIndex === 0) {
                $navPrev.addClass('disabled');
            } else {
                $navPrev.removeClass('disabled');
            }
            if (currentIndex === slideCount -1) {
                $navNext.addClass('disabled');
            } else {
                $navNext.removeClass('disabled');
            }
            $indicator.find('a').removeClass('active')
                .eq(currentIndex).addClass('active');
        }

        function startTimer () {
            timer = setInterval(function () {
                let nextIndex = (currentIndex + 1) % slideCount;
                goToSlide(nextIndex);
            }, interval);
        }
        function stopTimer () {
            clearInterval(timer);
        }
        $nav.on('click', 'a', function (event) {
            event.preventDefault();
            if ($(this).hasClass('prev')) {
                goToSlide(currentIndex - 1);
            } else {
                goToSlide(currentIndex + 1);
            }
        });
        $indicator.on('click', 'a', function (event) {
            event.preventDefault();
            if (!$(this).hasClass('active')) {
                goToSlide($(this).index());
            }
        });
        $container.on({
            mouseenter: stopTimer,
            mouseleave: startTimer
        });
        goToSlide(currentIndex);
        startTimer();
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
    })
})

$(document).on('ready', function() {
    $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000
    });
});

