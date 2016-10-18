$(document).ready(function(){
  doMath();
});

var number1;
var number2;
var operation;

function doMath() {
  $('#equals').on('click', function() {
    number1 = parseInt($('#number1').val());
    number2 = parseInt($('#number2').val());
    operation = $('#operation').val();

    // I don't specify return here because we're invoking validate
    // which returns either errors or the actual result
    validate(operation, number1, number2);
  });
}

function validate(operator, num1, num2) {
  const allowedOperators = ['+', '-', '/', '*'];

  if (!allowedOperators.includes(operator)) {
    return 'Sorry, that is not a valid operator';
  } else if (isNaN(num1) || isNaN(num2)) {
    return 'Sorry, one of those is not a valid number!';
  } else {
    return result(operation, num1, num2);
  }
}

function result(operator, num1, num2) {
  switch(operator) {
    case '+':
      $('#result').html(num1 + num2);
      return num1 + num2;
    case '-':
      $('#result').html(num1 - num2);
      return num1 - num2;
    case '/':
      $('#result').html(num1 / num2);
      return num1 / num2;
    case '*':
      $('#result').html(num1 * num2);
      return num1 * num2;
  }
}
