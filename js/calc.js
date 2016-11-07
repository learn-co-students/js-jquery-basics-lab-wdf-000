function maff(){


  // var result = '';


  function result(no1, no2, op){
    if (op === '+'){
      return no1 + no2;
    }else if (op === '-'){
      return no1 - no2;
    }else if (op === '/'){
      return no1/no2;
    }else if (op === '*'){
      return no1 * no2;
    }
  }

  function validate(no1, no2, op){
    if( isNaN(no1) || no1 === '' || isNaN(no2) || no2 === ''){
       $('h2#result').text('Sorry, one of those is not a valid number!');
    }else{
       $('h2#result').text(result(no1, no2, op));
    }
  }

  $("button#equals").on('click',function(){
     var number1 = parseFloat($('#number1').val());
     var number2 = parseFloat($('#number2').val());
     var operation = $('#operation').val();
     validate(number1, number2, operation);
   });

}

$(document).ready(function(){
  maff();

})



// switch(operation){
//    case '+': $('result').text(number1 + number2);
//     break;
//    case '-': $('result').text(number1 - number2);
//    break;
//    case '/': $('result').text(number1 / number2);
//    break;
//    case '*': $('result').text(number1 * number2);
//    break;
//    default : $('result').text('Sorry, not a valid operation!');
// }
