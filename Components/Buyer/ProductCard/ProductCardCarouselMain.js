// owl carousel product
$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: true,
    nav: false,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items: 2,
        },
        600:{
            items: 3,
        },
        1200:{
            items: 4,
        },
    }
});
