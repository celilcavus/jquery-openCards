$(document).ready(() => {
    $('.mycard-body #toggle-p').hide();

    $('#toggle-icon').click(() => {
        $('.mycard-body #toggle-p').slideToggle(() => {
            if ($('#toggle-icon').hasClass("fa-sharp fa-solid fa-arrow-down")) {
                $('#toggle-icon').removeClass("fa-sharp fa-solid fa-arrow-down");
                $('#toggle-icon').addClass("fa-solid fa-arrow-up");
            }
            else if ($('#toggle-icon').hasClass("fa-solid fa-arrow-up")) {
                $('#toggle-icon').removeClass("fa-solid fa-arrow-up");
                $('#toggle-icon').addClass("fa-sharp fa-solid fa-arrow-down");
            }
        });



    })

});

$(document).ready(() => {
    $('.mycard-body #toggle-p1').hide();

    $('#toggle-icon1').click(() => {
        $('.mycard-body #toggle-p1').slideToggle(() => {
            if ($('#toggle-icon1').hasClass("fa-sharp fa-solid fa-arrow-down")) {
                $('#toggle-icon1').removeClass("fa-sharp fa-solid fa-arrow-down");
                $('#toggle-icon1').addClass("fa-solid fa-arrow-up");
            }
            else if ($('#toggle-icon1').hasClass("fa-solid fa-arrow-up")) {
                $('#toggle-icon1').removeClass("fa-solid fa-arrow-up");
                $('#toggle-icon1').addClass("fa-sharp fa-solid fa-arrow-down");
            }
        });



    })

})

$(document).ready(() => {
    $('.mycard-body #toggle-p2').hide();

    $('#toggle-icon2').click(() => {
        $('.mycard-body #toggle-p2').slideToggle(() => {
            if ($('#toggle-icon2').hasClass("fa-sharp fa-solid fa-arrow-down")) {
                $('#toggle-icon2').removeClass("fa-sharp fa-solid fa-arrow-down");
                $('#toggle-icon2').addClass("fa-solid fa-arrow-up");
            }
            else if ($('#toggle-icon2').hasClass("fa-solid fa-arrow-up")) {
                $('#toggle-icon2').removeClass("fa-solid fa-arrow-up");
                $('#toggle-icon2').addClass("fa-sharp fa-solid fa-arrow-down");
            }
        });



    })

})