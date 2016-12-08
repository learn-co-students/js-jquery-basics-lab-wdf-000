function doMath(){
	$('#equals').on('click', function() {
		var oper = $('#operation').val();
		var num1 = parseInt($('#number1').val());
		var num2 = parseInt($('#number2').val());
		validate(oper, num1, num2);
  })
}

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

function result(oper, num1, num2) {

  switch(oper){
    case '+':
      $('#result').text(num1+num2);
      return (num1+num2);
    case '-':
       $('#result').text(num1-num2);
      return(num1-num2);
    case '*':
      $('#result').text(num1*num2);
      return (num1*num2);
    case '/':
      $('#result').text(num1/num2);
      return (num1/num2);
  }

}

$(document).ready(function() {
  doMath();
});