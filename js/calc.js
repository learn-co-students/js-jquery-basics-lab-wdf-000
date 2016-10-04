var operator;
var number1;
var number2;


function result(operator, number1, number2){
  var answer;
  switch(operator){
    case '+':
      answer = number1 + number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    case '/':
      answer = number1 / number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
  }
  return answer;
}

function validate(operator, number1, number2){
  var validOperators = ['*','-','/','+']
  // if NaN, alert this:
  if (isNaN(number1) || isNaN(number2)) {
    return "Sorry, one of those is not a valid number!";
  } else if (validOperators.indexOf(operator) === -1) {
  // if not valid operator, alert this
    return "Sorry, that is not a valid operator";
  } else {
  // if validations pass, call the result-function:
    return result(operator, number1, number2);
  }
}


function doMath(){
  $('#equals').on("click", function(){
    operator = $('input#operation').val();
    number1 = parseInt($('input#number1').val());
    number2 = parseInt($('input#number2').val());
    $('#result')[0].innerHTML = validate(operator, number1, number2);
  });
}
