// NAVBAR NAVIGATION

$(".navbar a").click(function(){
    $("body,html").animate({
        scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
});

// КНОПКА ВВЕРХ

var $btnTop = $(".btn-top")
$(window).on("scroll", function(){
    if ($(window).scrollTop() >= 400){
        $btnTop.fadeIn();
    }else{
        $btnTop.fadeOut();
    }
});

$btnTop.on("click", function(){
    $("html,body").animate({scrollTop:0}, 900)
})


// TABS on section CLEANING

$('.js-tab-trigger').on('click', function() {
    var tabName = $(this).data('tab'),
        tab = $('.js-tab-content[data-tab="'+tabName+'"]');

    $('.js-tab-trigger.active').removeClass('active');
    $(this).addClass('active');

    $('.js-tab-content.active').removeClass('active');
    tab.addClass('active');

});

// / TABS on section CLEANING

// ACCORDION on section ANSWERS

$(document).ready(function () {

    function close_accordion_section() {
        $('.accordion .title-content').removeClass('active');
        $('.accordion .section-content').slideUp(300).removeClass('open');
    }

    $('.title-content').click(function (e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Добавляем класс active
            $(this).addClass('active');
            // Открываем скрытую панель
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });

});

// / ACCORDION on section ANSWERS