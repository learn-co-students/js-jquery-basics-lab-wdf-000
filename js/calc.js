$(document).ready(function() {
  doMath()
});

  var number1 = $('#number1');
  var number2 = $('#number2');
  var operator = $('#operation');
  var num1 = NaN,
      num2 = NaN,
      op = null;

  function doMath() {
      $('#equals').click(function() {
        num1 = parseFloat(number1.val());
        num2 = parseFloat(number2.val());
        op = operator.val();
        validate(op, num1, num2);
      })
  }

  function validate(operator, num1, num2) {
    if (isNaN(num1) || num1 === '' || isNaN(num2) || num2 === '' ) {
      $('#result').html("Sorry, one of those is not a valid number!")
      return 'Sorry, one of those is not a valid number!';
    } else if (operator) {
        switch (operator) {
          case '+':
          case '/':
          case '*':
          case '-':
            result(operator, num1, num2)
            break;
          default:
            $('#result').html("Sorry, that is not a valid operator")
            return "Sorry, that is not a valid operator" 
        }
    } 
  }

  function result(operator, num1, num2) {
    var result;
    switch (operator) {
      case '+':
        result = num1 + num2 
        break;
      case '-':
        result = num1 - num2 
        break;
      case '/':
        result = num1 / num2 
        break;
      case '*':
        result = num1 * num2 
        break;
    }
    $('#result').html(result)
    return result
 }

