
$(document).ready(function() {
 // code to be executed goes here
 doMath();
});

function doMath() {
  $('#equals').on('click', function() {
    var number1 = parseInt($('input#number1').val(), 10);
    var number2 = parseInt($('input#number2').val(), 10);
    var operation = $('input#operation').val();

    validate(operation, number1, number2);
  });
}

function validate(operation, number1, number2) {
  var operators = ['+', '-', '*', '/'];

  if (isNaN(number1) === true || isNaN(number2) === true) {
    return "Sorry, one of those is not a valid number!";
  }
  else if ($.inArray(operation, operators) === -1) {
    return "Sorry, that is not a valid operator";
  }
  else {
    result(operation, number1, number2);
  }

}

function result(operation, number1, number2) {
  switch(operation) {
    case '+':
      $('#result').html(number1 + number2);
      return (number1 + number2);
      break
    case '-':
      $('#result').html(number1 - number2);
      return (number1 - number2);
      break
    case '*':
      $('#result').html(number1 * number2);
      return (number1 * number2);
      break
    case '/':
      $('#result').html(number1 / number2);
      return (number1 / number2);
      break
  }
}
