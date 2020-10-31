$(document).ready(function() {
    console.log('document works!!!');

    var owlTeste = $('.testemonials-container');
    var owlSlide = $('.slide-wrap');

    owlTeste.owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            1200: {
                items: 3
            },
            960: {
                items: 2
            },
            425: {
                items: 1
            },
            320: {
                items: 1
            },
            0: {
                items: 1,
            }
        },
    });
    owlSlide.owlCarousel({
        loop: true,
        autoplay: true,
        responsive: {
            1200: {
                items: 3
            },
            768: {
                items: 2
            },
            425: {
                items: 1
            },
            320: {
                items: 1
            },
            0: {
                items: 1,
            }
        }
    });

    $('#teste-nav-left').click(function() {
        owlTeste.trigger('prev.owl.carousel');
    });

    $('#teste-nav-right').click(function() {
        owlTeste.trigger('next.owl.carousel');
    });

    $('#slide-nav-left').click(function() {
        owlSlide.trigger('prev.owl.carousel');
    });

    $('#slide-nav-right').click(function() {
        owlSlide.trigger('next.owl.carousel');
    });
})