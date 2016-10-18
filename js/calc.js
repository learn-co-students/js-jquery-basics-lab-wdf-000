$(document).ready(function() {
  doMath();
});

function doMath() {
  $('#equals').on('click', function() {
    let inputs = collectInputs(); // returns an object

    // Check if all fields are filled
    for (var key in inputs) {
      if (inputs[key] === "") {
        console.log("Please fill out the fields");
        return;
      }
    }

    let check = validate(inputs.operation, inputs.number1, inputs.number2);
    if (check === true) {
      let r = result(inputs.operation, inputs.number1, inputs.number2);
      console.log(r);
      return r;
    } else {
      console.log(check);
      return check;
    }
  });
}

function collectInputs() {
  var inputs = {};
  $.each($('div input'), function(index, element) {
    let label = $(this).prev().attr('for');
    inputs[label] = $(this).val();
  });
  return inputs;
}

function validate(operator, num1, num2) {
  const validOperators = ['+', '-', '*', '/'];
  if (!validOperators.includes(operator)) {
    return "Sorry, that is not a valid operator";
  } else if (!parseInt(num1) || !parseInt(num2)) {
    return "Sorry, one of those is not a valid number!";
  } else {
    return true;
  }
}

function result(operator, num1, num2) {
  return calculate(operator, num1, num2);
}

function calculate(operator, num1, num2) {
  switch(true) {
    case operator === "+":
      return parseInt(num1) + parseInt(num2);
    case operator === "-":
      return parseInt(num1) - parseInt(num2);
    case operator === "*":
      return parseInt(num1) * parseInt(num2);
    case operator === "/":
      return parseInt(num1) / parseInt(num2);
  }
}