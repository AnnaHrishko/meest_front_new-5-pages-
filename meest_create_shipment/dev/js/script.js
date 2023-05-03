$(function() {
  $(".accordion-wrap .accordion-section").eq(0).find('.section-sub-menu').addClass('active')
  $(".section-name").click(function(e){
    e.preventDefault();
    $(".section-name").removeClass('active')
    $(this).addClass("active")
    $(".section-sub-menu").removeClass('active')
    $(this).next(".section-sub-menu").addClass('active')
     })
});

$(document).ready(function() {
    $('.select:not(.country_select)').select2();
});

// var input = document.querySelector(".phone");
//   window.intlTelInput(input, {
//     utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
//     separateDialCode: true,
// });

$('.phone').each(function(){
    window.intlTelInput(this, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js",
    separateDialCode: true,
});
})


$(".select").select2().change(function() {
    $(this).valid();
});

$(document).on('input', '.quantity_input input', function() {
   $(this).parents('form');
});

// $(document).on('.quantity_input input', function(){
//   $(this).parents('form').valid()
// })

// $(document).ready(function(){
//   $('.account_number').inputmask("9999-9999-9999-9999"); //mask with dynamic syntax
// });

$('.account_number').mask('0000 0000 0000 0000');


$(function() {
    $.validator.addMethod("emailRegex", function(value, element) {
        return this.optional(element) || /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value);
    }, "");
});


$(function() {
    $(".form_info_parcel").validate({
        rules: {
            "number_loads": {
                required: true,
                min: 1,
            },
            "cargo_weight": {
                required: true,
                min: 1,
            },
            "length": {
                required: true,
                min: 1,
            },
            "width": {
                required: true,
                min: 1,
            },
            "height": {
                required: true,
                min: 1,
            },
            "volume": {
                required: true,
                min: 1,
            },
            "length_mobile": {
                required: true,
                min: 1,
            },
            "width_mobile": {
                required: true,
                min: 1,
            },
            "height_mobile": {
                required: true,
                min: 1,
            },
            "volume_mobile": {
                required: true,
                min: 1,
            },
            "value_shipment": {
                required: true,
                min: 1,
            },
            "sender": {
                required: true,
            },
            "name_lastname": {
                required: true,
            },
            "account_number": {
                required: true,
                minlength: 19,
            },
            "postpaid_amount": {
                required: true,
                number: true,
            },
        },
        messages: {
            "number_loads": {
                required: "Required field",
                min: "Required field",
            },
            "cargo_weight": {
                required: "Required field",
                min: "Required field",
            },
            "length": {
                required: "Required field",
                min: "Required field",
            },
            "width": {
                required: "Required field",
                min: "Required field",
            },
            "height": {
                required: "Required field",
                min: "Required field",
            },
            "volume": {
                required: "Required field",
                min: "Required field",
            },
            "length_mobile": {
                required: "Required field",
                min: "Required field",
            },
            "width_mobile": {
                required: "Required field",
                min: "Required field",
            },
            "height_mobile": {
                required: "Required field",
                min: "Required field",
            },
            "volume_mobile": {
                required: "Required field",
                min: "Required field",
            },
            "value_shipment": {
                required: "Required field",
                min: "Required field",
            },
            "sender": {
                required: "Required field",
            },
            "name_lastname": {
                required: "Required field",
            },
            "account_number": {
                required: "Required field",
                minlength: "Please enter at least 16 characters."
            },
            "postpaid_amount": {
                required: "Required field",
                number: "Enter only number",
            }, 
        },
    });
});

$(function() {
    $(".form_delivery_information").validate({
        rules: {
            "name": {
                required: true,
            },
            "last_name": {
                required: true,
            },
            "phone": {
                required: true,
                number: true,
            },
            "city": {
                required: true,
            },
            "address_department": {
                required: true,
            },
            "email": {
                required: true,
                emailRegex: true,
            },
            "name_sender": {
                required: true,
            },
            "lastname_sender": {
                required: true,
            },
            "phone_sender": {
                required: true,
            },
            "delivery_city": {
                required: true,
            },
            "address_department_sender": {
                required: true,
            },
            "city_on_address": {
                required: true,
            },
            "street_on_address": {
                required: true,
            },
            "number_build": {
                required: true,
            },
            "flat": {
                required: true,
            },
            "floor": {
                required: true,
            },
            "additional_services": {
                required: true,
                min: 1,
            },
            "date": {
                required: true,
            },
            "time": {
                required: true,
            },
        },
        messages: {
            "name": {
                required: "Required field",
            },
            "last_name": {
                required: "Required field",
            },
            "phone": {
                required: "Required field",
                number: "Enter only number",
            },
            "city": {
                required: "Required field",
            },
            "address_department": {
                required: "Required field",
            },
            "email": {
                required: "Required field",
                emailRegex: "Please, enter valid email address",
            },
            "name_sender": {
                required: "Required field",
            },
            "lastname_sender": {
                required: "Required field",
            },
            "phone_sender": {
                required: "Required field",
            },
            "delivery_city": {
                required: "Required field",
            },
            "address_department_sender": {
                required: "Required field",
            },
            "city_on_address": {
                required: "Required field",
            },
            "street_on_address": {
                required: "Required field",
            },
            "number_build": {
                required: "Required field",
            },
            "flat": {
                required: "Required field",
            },
            "floor": {
                required: "Required field",
            },
            "additional_services": {
                required: "Required field",
                min: "Required field",
            },
            "date": {
                required: "Required field",
            },
            "time": {
                required: "Required field",
            },
        },
    });
});

$(document).ready(function() { 
    $(document).on('click', '.quantity_input .minus', function(){
        let total = $(this).parent().find('input');
      if (total.val() > 1) {
          total.val(+total.val() - 1);
          total.trigger('change')
        $(this).parents('form').valid()
      }
    })
})

$(document).ready(function() { 
    $(document).on('click', '.quantity_input .plus', function(){
      let total = $(this).parent().find('input');
      total.val(+total.val() + 1);
      total.trigger('change')
      $(this).parents('form').valid()
    })
})

$(document).ready(function(){
    if ($(".datepicker").length){
      $( ".datepicker" ).datepicker({
        showOn: "focus",
        dateFormat: "dd/mm/yy",
      }).change(function() {
         $(this).valid();  // triggers the validation test        
   });
    }
})



// $('.timepicker').timepicker({
//     timeFormat: 'h:mm p',
//     interval: 60,
//     minTime: '1:00am',
//     maxTime: '12:00pm',
//     defaultTime: '11',
//     startTime: '10:00',
//     dynamic: false,
//     dropdown: true,
//     scrollbar: true,
// });

$(document).ready(function(){
    if ($(".timepicker").length){
        $('.timepicker').timepicker({
            timeFormat: 'h:mm',
            interval: 60,
            minTime: '1:00am',
            maxTime: '12:00pm',
            defaultTime: '11',
            startTime: '10:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true,
        })
    }
})

