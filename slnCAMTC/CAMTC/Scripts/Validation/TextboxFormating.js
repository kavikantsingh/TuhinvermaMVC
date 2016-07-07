$(document).ready(function () {
    $('.OnlyNumeric').keydown(function (e) {
        if (e.keyCode != 9 && e.keyCode != 8 && e.keyCode != 16 && e.keyCode != 17 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40 && e.keyCode != 46 && e.keyCode != 127) {

            var key = e.keyCode;
            if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {

            }
            else {
                e.preventDefault();
            }

        }
    });

    $('.OnlyAlphabet').keydown(function (e) {
        if (e.keyCode != 9) {

            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });
    //autocomplete off
    $('.inputTextbox').attr('autocomplete', 'off');
    $('.calWidth').attr('autocomplete', 'off');
    $('input[type="text"]').attr('autocomplete', 'off');
    $('select').attr('autocomplete', 'off');
    $('textarea').attr('autocomplete', 'off');

    //Masking
    $('.phone_us').mask('(000) 000-0000');
    $('.ssn').mask('999-99-9999');
    $('.zip_us').mask("99999-9999");
    $('.calender').mask("99/99/9999");
    $('.calenderPAST').mask("99/99/9999");
    $('.calenderFuture').mask("99/99/9999");
    $('.calenderDOB').mask("99/99/9999");


    //For Past Date jquery calender
    $('.calenderPAST').datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true, minDate: "-100Y", maxDate: "-1D",
        yearRange: "1950:+nn"

    });

    //For Future Date jquery calender
    $('.calenderFuture').datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true, minDate: "+1D", maxDate: "+100Y",
        yearRange: "+nn:2050"

    });

    //For Date of Birth jquery calender
    $('.calenderDOB').datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true, minDate: "-100Y", maxDate: "-18Y",
        yearRange: "1950:+nn"

    });
    $('.calender').datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true, minDate: "-100Y"

    });

    AutoHideMessageAlert();
//    //tooltip start
//    $(".tooltip").tooltip({
//        position: {
//            my: "left top",
//            at: "right+5 top-5"
//        }
//    }).off("mouseover mouseout");
});

function InitiateOnlyAlphabet() {
    $('.OnlyAlphabet').keydown(function (e) {
        if (e.keyCode != 9) {

            var key = e.keyCode;
            if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
                e.preventDefault();
            }
        }
    });
    //autocomplete off
    $('.inputTextbox').attr('autocomplete', 'off');
    $('.calWidth').attr('autocomplete', 'off');
    $('input[type="text"]').attr('autocomplete', 'off');
    $('select').attr('autocomplete', 'off');
    $('textarea').attr('autocomplete', 'off');

}
function InitiateOnlyNumeric() {
    $('.OnlyNumeric').keydown(function (e) {
        if (e.keyCode != 9 && e.keyCode != 8 && e.keyCode != 16 && e.keyCode != 17 && e.keyCode != 37 && e.keyCode != 38 && e.keyCode != 39 && e.keyCode != 40 && e.keyCode != 46 && e.keyCode != 127) {

            var key = e.keyCode;
            if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105)) {

            }
            else {
                e.preventDefault();
            }

        }
    });
}

function InitiateCalender() {


    //For Past Date jquery calender
    $('.calenderPAST').datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true, minDate: "-100Y", maxDate: "-1D",
        yearRange: "1950:+nn"

    });

    //For Future Date jquery calender
    $('.calenderFuture').datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true, minDate: "+1D", maxDate: "+100Y",
        yearRange: "+nn:2050"

    });
    //For Date of Birth jquery calender
    $('.calenderDOB').datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true, minDate: "-100Y", maxDate: "-18Y",
        yearRange: "1950:+nn"

    });
    $('.calender').datepicker({
        inline: true,
        changeMonth: true,
        changeYear: true, minDate: "-100Y"

    });

}

function InitiateMasking() {

    //Masking
    $('.phone_us').mask('(000) 000-0000');
    $('.ssn').mask('999-99-9999');
    $('.zip_us').mask("99999-9999");
    $('.calender').mask("99/99/9999");
    $('.calenderPAST').mask("99/99/9999");
    $('.calenderFuture').mask("99/99/9999");
    $('.calenderDOB').mask("99/99/9999");
    AutoHideMessageAlert();

    $("input.us_street").blur(function () {
        OnStreetChange(this);
    });
    function OnStreetChange(e) {
        $.ajax({
            type: 'POST',
            url: '../../Ajax_Handler/Address.ashx?AddressStreet=' + $(e).val(),
            dataType: 'text',

            success: function (result) {
                $(e).val(result);
            }
        });

    }
}
function InitiateTooltip() {


//    //tooltip start
//    $(".tooltip").tooltip({
//        position: {
//            my: "left top",
//            at: "right+5 top-5"
//        }
//    }).off("mouseover mouseout");

}


function AutoHideMessageAlert() {
    setTimeout(function () {
       // $('.alertMessageCustom').slideUp();
    }, 83000);
}