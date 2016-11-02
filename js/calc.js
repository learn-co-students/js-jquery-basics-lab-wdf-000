$(document).ready(function() {
  let number1 = NaN;
  let number2 = NaN;
  let operator = "";
  
  doMath();
});


  let number1 = NaN;
  let number2 = NaN;
  let operator = "";

  function doMath() {
    $("#equals").on("click", function() {
      number1 = parseInt($("input#number1").val());
      number2 = parseInt($("input#number2").val());
      operator = $("input#operation").val();
      validate(operator, number1, number2);
    })
  }
  
  function contains(ary, obj) {
    for (var i = 0, l = ary.length; i < l; i++) {
      if (ary[i] === obj) {
        return true;
      }
    }
    return false;
  }

  function validate(operator, number1, number2) {
    let validOperators = ["+", "-", "*", "/"];
    if (contains(validOperators, operator) && !isNaN(number1) && !isNaN(number2)) {
      result(operator, number1, number2);
    } else if (!isNaN(number1) && !isNaN(number2)) {
      $("h2#result").text("Sorry, that is not a valid operator");
      return "Sorry, that is not a valid operator";
    } else {
      $("h2#result").text("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
    }
  }

  function result(operator, number1, number2) {
    switch (operator) {
      case "+":
        $("h2#result").text(`${number1 + number2}`);
        return number1 + number2;
      case "-":
        $("h2#result").text(`${number1 - number2}`);
        return number1 - number2;
      case "*":
        $("h2#result").text(`${number1 * number2}`);
        return number1 * number2;
      case "/":
        $("h2#result").text(`${number1 / number2}`);
        return number1 / number2;
    }
  }
