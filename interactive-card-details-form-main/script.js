// card number print and control

$('.cardNumber').on('input', function() {
    var value = $(this).val();
    if (value.length > 16) {
      value = value.substring(0, 16);
      $(this).val(value);
    }
    if (isNaN(value)) {
      $('.cardNumberError').css('visibility', 'visible');
    } else {
      $('.cardNumberError').css('visibility', 'hidden');
    }
    var firstFour = value.substring(0, 4);
    var secondFour = value.substring(4, 8);
    var thirdFour = value.substring(8, 12);
    var fourthFour = value.substring(12);
    $('.n1').text(firstFour);
    $('.n2').text(secondFour);
    $('.n3').text(thirdFour);
    $('.n4').text(fourthFour);
  });
  
  //card name print

  $('.cardName').on('input', function() {
    $('.nameArea').text($(this).val());
  });
  
//month input
  
  $('.kisa').on('input', function() {
    $('.m1').text($(this).val());
  });

  $('.kisa').on('input', function() {
    var value = $(this).val();
    if (value.length > 2) {
      value = value.substring(0, 2);
      $(this).val(value);
    }
    if (isNaN(value)) {
      $(this).val('');
    }
  });
  
  // year input

  
  $('.kisa2').on('input', function() {
    $('.y1').text($(this).val());
  });


  $('.kisa2').on('input', function() {
    var value = $(this).val();
    if (value.length > 2) {
      value = value.substring(0, 2);
      $(this).val(value);
    }
    if (isNaN(value)) {
      $(this).val('');
    }
  });
  
  // cvc input

  $('.orta').on('input', function() {
    $('.cvcArea').text($(this).val());
  });

//   $('.cvcArea').on('input', function() {
//     var value = $(this).val();
//     if (value.length > 3) {
//       value = value.substring(0, 2);
//       $(this).val(value);
//     }
//     if (isNaN(value)) {
//       $(this).val('');
//     }
//   });

$('.orta').on('input', function() {
    var value = $(this).val();
    if (value.length > 3) {
      value = value.substring(0, 3);
      $(this).val(value);
    }
    if (isNaN(value)) {
      $(this).val('');
    }
  });
  
  