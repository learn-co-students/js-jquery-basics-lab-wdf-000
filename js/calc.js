$(document).ready(function(){


  doMath();

});

  var num1 = $('#number1').val();
  var num2 = $('#number2').val();
  var operator = $('#operation').val();

function doMath(){
  $('#equals').on('click', function() {
    return eval(num1 + operator + num2);
  });
};

function validate(o, number1, number2){
  if (isNaN(number1) || isNaN(number2)){
    return "Sorry, one of those is not a valid number!"
  }
  if (o != '+' || o != '-' || o != '*' || o != '/'){
    return "Sorry, that is not a valid operator"
  }
};

function result(operator, number1, number2){
  $('#result').html = eval(number1 + operator + number2)
   return eval(number1 + operator + number2);
};
