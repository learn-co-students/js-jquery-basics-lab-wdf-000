
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

  //in this method you are first calling a function which does not take any arguments
  //you use a jQuery selector to select the values of the input fileds of id numer1 and number 2
  // along with the operator. you then pass the var = t the values to the validate function
  //remember this is a method dealing with an event handler because the user triggered an action and the
  //method is responding to that action.
  //"click" is the event handler which is binded with the selector and triggers the function with all the vars



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


  // this validates function takes in the inputed oeprator and two nums
  //we parse the strings into integer
  //if the iperator is not equal to any of the given then we return an error message
  //if the numer is not valid aka isNan is false . then we return the error
  //else we pass the parameters to the result function which calculates the sum




  function result(operator, num1, num2){
    var result = eval(num1 +  operator + num2);
    $('#result').text(result);
    return result;

  }
