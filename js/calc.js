var firstNum;
var secondNum;
var operator;

function validate(operator, firstNum, secondNum) {
  if (isNaN(firstNum) || isNaN(secondNum)){
    return "Sorry, one of those is not a valid number!"
  }
  else if (operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*"){
    return "Sorry, that is not a valid operator"
  }
  else {
    result(operator, firstNum, secondNum);
  }
}

function result(operator, firstNum, secondNum) {
  var solution = eval(firstNum + operator + secondNum);
  $('h2#result').text(solution);
  return solution;
}

function doMath() {
  $('button').on('click', function(){
    operator = $('input#operation').val();
    firstNum = $('input#number1').val();
    secondNum = $('input#number2').val();
    validate(operator, firstNum, secondNum);
  });
}

$(document).ready(function() {
  doMath()
});

// function performOperation() {
//   var firstNum = $('input#number1').val();
//   var operator = $('input#operation').val();
//   var secondNum = $('input#number2').val();
//   return eval(firstNum + operator + secondNum);
// }
//
// $(document).ready(function() {
//   $('button').on('click', function(){
//     var solution = performOperation();
//     $('h2#result').text(solution);
//   });
// });
