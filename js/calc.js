'use strict';

function result(operate_symbol, int1, int2) {
  switch (operate_symbol) {
    case "+":
      return int1 + int2;
      break;
    case "-":
      return int1 - int2;
      break;
    case "*":
      return int1 * int2;
      break;
    case "/":
      return int1 / int2;
      break;
  }
}

function validate(operator, int1, int2) {
  if (isNaN(int1)|| isNaN(int2)) {
    return "Sorry, one of those is not a valid number!"
  }
  if("+-/*".indexOf(operator) === -1){
    return "Sorry, that is not a valid operator"
  }
}

function doMath() {
  $('#equals').click(function() {
    num1 = parseInt($('#number1').val());
    num2 = parseInt($('#number2').val());
    operator = $('#operation').val();
      if(!(validate(operator, num1, num2) === true)) {
        alert(validate(operator, num1, num2));
      }
      else {
        total = result(operator, num1, num2);
        $('h2#result').text(total);
      }
  });
}

$(document).ready(function(){

  doMath();

});
