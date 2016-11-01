$(document).ready(function() {
   doMath();
  });




function doMath(){
  $('#equals').on("click", function(){
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    var operator = $('#operation').val();
    validate(operator, num1, num2);
  });
}

function validate(operator, num1, num2){
  var num1 = parseInt(num1);
  var num2 = parseInt(num2);
  if (operator !==  "+" && operator !==  "-" && operator !==  "*" && operator !==  "/"){
    return "Sorry, that is not a valid operator";
  } else if (isNaN(num1) === false || isNaN(num2) === false){
    return "Sorry, one of those is not a valid number!";
  }
  else { result(operator, num1, num2);}

}

function result(operator, num1, num2){
  var result = eval(num1 + operator + num2);
  $('#result').text(result);
  return result;
} 
