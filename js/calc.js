function doMath() {
  $('#equals').on('click', function() {
    var operator = $('#operation').val();
    var firstNum = parseInt($('#number1').val())
    var secondNum = parseInt($('#number2').val())
    validate(operator, firstNum, secondNum)
  })
}

// function validate(operator, firstNum, secondNum) {
//   if(!isNaN(firstNum) && !isNaN(secondNum)) {
//     if(operator === "+" || "-" || "*" || "/") {
//       result(operator, firstNum, secondNum);
//     } else {
//       $('#result').text("Sorry, that is not a valid operator")
//       return "Sorry, that is not a valid operator"
//       }
//   } else {
//       $('#result').text("Sorry, one of those is not a valid number!")
//       return "Sorry, one of those is not a valid number!"
//   }
// }


function validate(oper, num1, num2) {
  if(!isNaN(num1) && !isNaN(num2)) {
    if($.inArray(oper, ['+', '-', '*', '/']) >= 0){
      result(oper, num1, num2);
    } else {
        $('#result').text("Sorry, that is not a valid operator");
        return "Sorry, that is not a valid operator";
    }
  } else {
      $('#result').text("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
  }
}

function result(operator, firstNum, secondNum) {
  switch(operator){
    case '+':
      $('#result').text(firstNum+secondNum)
      return (firstNum+secondNum)
    case '-':
      $('#result').text(firstNum-secondNum)
      return (firstNum+secondNum)
    case '/':
      $('#result').text(firstNum/secondNum)
      return (firstNum/secondNum)
    case '*':
      $('#result').text(firstNum*secondNum)
      return (firstNum*secondNum)
  }
}

$(document).ready(function(){
  doMath()
})
