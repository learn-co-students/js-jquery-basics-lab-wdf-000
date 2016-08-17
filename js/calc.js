function doMath() {
  $('#equals').on('click', function() {
    return eval($('#number1').val() + $('#operation').val() + $('#number2').val());
  });
}

function validate(operator, num1, num2) {
  if ($.inArray(operator, ["+", "-", "/", "*"]) == -1) {
    return 'Sorry, that is not a valid operator'
  }
  if (isNaN(num1) || isNaN(num2)) {
    return "Sorry, one of those is not a valid number!"
  }
}

function result(operator, num1, num2) {
  $('#result').val = doMath();
  return eval(num1 + operator + num2)
}
