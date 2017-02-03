var num1 = $('#number1');
var num2 = $('#number2');
var operator = $('#operation');

function doMath(operator, num1, num2) {
  $('#equals').on('click', function() {
    num1 = parseInt($('#number1').val(), 10);
    num2 = parseInt($('#number2').val(), 10);
    operator = $('#operation').val();
    validate(operator, num1, num2)
  });
}

function result(operator, num1, num2) {
  $('#result').text(eval(num1 + operator + num2));
  return eval(num1 + operator + num2);
}

function validate(operator, num1, num2) {

  if (isNaN(num1) || isNaN(num2)) {
    $('#result').text('Sorry, one of those is not a valid number!')
    return 'Sorry, one of those is not a valid number!';
  }
  else if (operator != '+' && operator != '-' && operator != '*' && operator != '/') {
    $('#result').text('Sorry, that is not a valid operator')
    return 'Sorry, that is not a valid operator';
  }
  else {
    result(operator, num1, num2);
  }
}

$(document).ready(function() {
doMath();
});
