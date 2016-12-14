$(document).ready(()=>{
  doMath();
});

var firstNum = $('#number1');
var secondNum = $('#number2');
var operator = $('#operation');

function doMath() {
  $('#equals').on('click',()=>{
    validate( operator.val(), parseFloat(firstNum.val()), parseFloat(secondNum.val()) );
  })
}

function validate(op, num1, num2){
  if (!isNaN(num1) && !isNaN(num2)) {
    if (op === "+" || op === "-" || op === "/" || op === "*") {
      result(op, num1, num2);
    }else {
      $('#result').text("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator";
    }
  }else {
    $('#result').text("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  }
}

function result(op, num1, num2){
  $('#result').text(eval(num1 + op + num2));
  return eval(num1 + op + num2);
}
