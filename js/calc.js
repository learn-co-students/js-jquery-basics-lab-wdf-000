var num1;
var num2;
var op;

function doMath(){
  $('#equals').on("click", function() {

     num1 = parseInt($('#number1').val())
     num2 = parseInt($('#number2').val())
     op = $('#operation').val();


     if (op === "+"){
       $('#result').html(num2 + num1);
     }else if(op === "-") {
       $('#result').html(num2 - num1);
     } else if(op === "/"){
       $('#result').html(num2 / num1);
     }else {
       $('#result').html(num2 * num1);
     }

  })
}

function result(op, num1, num2){
  if (op === "+"){
    $('#result').html(num2 + num1);
  }else if(op === "-") {
    $('#result').html(num2 - num1);
  } else if(op === "/"){
    $('#result').html(num2 / num1);
  }else {
    $('#result').html(num2 * num1);
  }

  return parseInt($('#result').html());

}

function validate(op, num1, num2){
  if (op != "+" && op != "-" && op != "/" && op != "*"){
    return "Sorry, that is not a valid operator"
  } else if(isNaN(num1) || isNaN(num2)) {
      return "Sorry, one of those is not a valid number!"
  }
}


function yo(){

  validate(op, num1, num2);


}


$('#equals').on("click", yo() );
