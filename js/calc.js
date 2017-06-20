$(document).ready(function(){
  doMath();
})

var number1;
var number2;
var operation;

function doMath() {
  $('#equals').on('click', function(){
    number1 = parseInt($('#number1').val());
    number2 = parseInt($('#number2').val());
    operation = $('#operation').val();

    validate(operation, number1, number2)
  })
}

function validate(op, num1, num2){
  if (isNaN(num1) || isNaN(num2) ){
    $('#result').empty().append("Sorry, one of those is not a valid number!");
    return "Sorry, one of those is not a valid number!";
  } else if (op != "+" && op != "-" && op != "*" && op != "/"){
    $('#result').empty().append("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  } else {
  return result(op, num1, num2);
  }
}

function result(op, num1, num2){
  var result;
  switch(op) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          result = num1 / num2;
          break;
  }
  $('#result').empty().append(result);
  return result;
}
