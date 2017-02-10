function doMath(){
	$('#equals').on('click', function(){
		var firstNumber = $('#number1');
		var secondnumber = $('#number2');
		var operator = $('#operator')
		validate(operator, firstNumber, secondNumber);
	});
}

function validate(operator, firstNumber, secondNumber){
	if(!isNaN(firstNumber) && !isNaN(secondNumber)) {
    if($.inArray(operator, ['+', '-', '*', '/']) >= 0){
      result(operator, firstNumber, secondNumber);
    } else {
        $('#result').text("Sorry, that is not a valid operator");
        return "Sorry, that is not a valid operator";
    }
  } else {
      $('#result').text("Sorry, one of those is not a valid number!");
      return "Sorry, one of those is not a valid number!";
  }

}


function result(operator, firstNumber, secondNumber){
	switch(operator){
		case'+':
			$('#result').text(firstNumber + secondNumber);
			return (firstNumber+secondNumber);
		case'-':
			$('#result').text(firstNumber-secondNumber);
			return (firstNumber-secondNumber);
		case'*':
			$('#result').text(firstNumber*secondNumber);
			return (firstNumber*secondNumber);
		case'/':
			$('#result').text(firstNumber/secondNumber);
			return (firstNumber/secondNumber);
	}
}

	
	$(document).ready(function(){
		doMath();
	});