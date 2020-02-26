$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

// MAIN SLIDER
$('.carousel-main').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    },
    dots:false,
    mouseDrag:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
})

// REVIEW-SECTION SLIDER
$('.carousel-review').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    },
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
});