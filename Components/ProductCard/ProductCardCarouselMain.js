// owl carousel product
$(".carousel").owlCarousel({
    margin: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    nav: false,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 1,
        },
        600:{
            items: 2,
        },
        800: {
            items: 2,
        },
        1000:{
            items: 3,
        },
        1200:{
            items: 4,
        },
    }
});
