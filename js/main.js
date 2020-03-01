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

// PHONE MASKS

$(document).ready(function () {
    $("#phone_msk").mask("+7 (999) 999-99-99");
    $("#phone_modal_msk").mask("+7 (999) 999-99-99");
    $("#phone_clean_msk").mask("+7 (999) 999-99-99");
});

// / PHONE MASKS

// CALCULATOR

$(document).ready(function () {
    $('#calc select').change(function() {
        $type = $('select#clean_type').val();
        $place = $('select#work_place').val();
        $windows = $('select#windows').val();
        $clean_ratio = $('select#clean_type option:selected').attr('data-clean-ratio');
        $place_ratio = $('select#work_place option:selected').attr('data-place-ratio');
        $windows_ratio = $('select#windows option:selected').attr('data-windows-ratio');
        $price = parseInt($clean_ratio) + parseInt($place_ratio) + parseInt($windows_ratio);
        return $price;
    });
    $('#metres').keyup(function () {
        $metr = $('#metres').val();
        $metr_multipler = 8;
        $price_metr = parseInt($metr) * parseInt($metr_multipler);
        return $price_metr;
    });

    $('#btn-raschet').on('click', function() {
        console.log($price + $price_metr);
        $('span#final_price').text(parseInt($price) + parseInt($price_metr));
    });
});

// / CALCULATOR

// Разворачиваем калькулятор

$(document).ready(function () {
    $(".hider_calc").click(function () {
        $("#hidden").slideToggle("slow");
        return false;
    });
});

// / Разворачиваем калькулятор

// Разворачиваем таблицу

$(document).ready(function () {
    $(".hider_table").click(function () {
        $("#hidden_tabl").slideToggle("slow");
        return false;
    });
});

// / Разворачиваем таблицу

// Обратная связь

$(document).ready(function () {

    //E-mail Ajax Send
    $("form").submit(function () { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            alert("Thank you!");
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});

// / Обратная связь