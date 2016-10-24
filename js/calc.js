
var number1 = $('#number1');
var operator = $('#operation');
var number2 = $('#number2');


function doMath() {
  $('#equals').on('click', function() {
    n1 = parseInt(number1.val(), 10);
    o = operator.val();
    n2 = parseInt(number2.val(), 10);
    validate(n1, n2, o)
  })
}

function validate(o, n1, n2) {
  if (o == "+" || o == "-" || o == "*" || o == "/"){
    if (isNaN(n1) || n1 === '' || isNaN(n2) || n2 === '' ){
      $("#result").text('Sorry, one of those is not a valid number!');
      return 'Sorry, one of those is not a valid number!'
    }
    else {
      result(n1, n2, o);
    }
  }
  else {
    $('#result').html("Sorry, that is not a valid operator");
    return "Sorry, that is not a valid operator"
  }
}

function result(o, n1, n2) {
  switch(o) {
    case '-':
      $('#result').html(n1 - n2)
      return n1 - n2;
    case '+':
      $('#result').html(n1 + n2)
      return n1 + n2;
    case '*':
      $('#result').html(n1 * n2)
      return n1 * n2;
    case '/':
      $('#result').html(n1 / n2)
      return n1 / n2;
  }
};

$(document).ready(function(){

doMath();

});
