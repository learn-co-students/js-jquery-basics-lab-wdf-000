function doMath() {
  $('#equals').click(function (e) {
    var n1 = $('#number1').val();
    var op = $('#operation').val();
    var n2 = $('#number2').val();

    var tmp = validate(op,n1,n2);
    if (tmp == "good") {
      // $('h2#result').empty().append(result(op,n1,n2));
      $('h2#result').html(result(op,n1,n2));
    } else {
      alert(tmp);
    }
  });
  return;
}

function validate(op,n1,n2) {
   if ( !(op.match(/[*+-//]/)) ) {
    return "Sorry, that is not a valid operator";
  } else if ((n1+n2).match(/\D/)) {
    return "Sorry, one of those is not a valid number!";
  } else {
    return "good";
  }
}

function result(op,n1,n2) {
  return eval(n1 + op + n2);
}

$(function () {
  doMath();
});
