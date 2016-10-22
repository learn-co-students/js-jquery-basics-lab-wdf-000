function performOperation() {
  var firstNum = $('input#number1').val();
  var operator = $('input#operation').val();
  var secondNum = $('input#number2').val();
  return eval(firstNum + operator + secondNum);
}

$(document).ready(function() {
  $('button').on('click', function(){
    var solution = performOperation();
    $('h2#result').text(solution);
  });
});
