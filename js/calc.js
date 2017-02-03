var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath(operator, num1, num2) {
  $('#equals').on('click', function() {
    num1 = parseInt($('#number1').val(), 10);
    num2 = parseInt($('#number2').val(), 10);
    operator = parseInt($('#operation').val(), 10);
    validate()
  });
}

function validate(operator, num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return 'Sorry, one of those is not a valid number!';
  }
  else if (operator != '+' || operator != '-' || operator != '*' || operator != '/') {
    return 'Sorry, that is not a valid operator';
  }
  else {
    result()
  }
}

function result(operator, num1, num2) {
  $('#result').text(eval(num1 + operator + num2));
  return eval(num1 + operator + num2);
}

$(document).ready(function() {
doMath()
});
