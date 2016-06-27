//ids: number1, number2, operation

var number1, number2, operation;

function doMath(){
  $('#equals').on('click', function(){
    number1 = $('#number1').val();
    number2 = $('#number2').val();
    operation = $('#operation').val();
  });
}

function validate(op,num1,num2){
  if (isNaN(num1) || isNaN(num2)){
    return "Sorry, one of those is not a valid number!"; 
  } else if (['+','-','*','/'].indexOf(op) == -1){
    return "Sorry, that is not a valid operator";
  } else {
    result();
  }
}

function result(op,num1,num2){
  var result, 
      n1 = Number(num1),
      n2 = Number(num2);
  
  switch(op){
    case '+':
      result = n1 + n2;
      break;
    case '-':
      result = n1 - n2;
      break;
    case '*':
      result = n1 * n2;
      break;
    case '/':
      result = n1 / n2;
      break;
  }

  $('#result').val(result);
  return result;
}

$( document ).ready(function() {
  var number1, number2, operation;
  doMath();
});
