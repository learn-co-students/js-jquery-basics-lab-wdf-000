$(document).ready(function(){
  doMath();
})

function doMath() {
  $('button#equals').click(function(e) {
    var operator = $('input#operation').val();
    var num1 = parseFloat($('input#number1').val());
    var num2 = parseFloat($('input#number2').val());

    validate(operator, num1, num2);
  }); 

  
}


function validate(operator, num1, num2) {
  var output;
  if (num1 == "" || num2 == "" || isNaN(num1) || isNaN(num2)) {
    $("h2#result").html("Sorry, one of those is not a valid number!")
    return "Sorry, one of those is not a valid number!";
  }
  else if (!["+", "-", "*", "/"].includes(operator)) {
    $("h2#result").html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator";
  }
  else {
    $("h2#result").html(result(operator, num1, num2));
    return result(operator, num1, num2);
  }
}


function result(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
  }
}

