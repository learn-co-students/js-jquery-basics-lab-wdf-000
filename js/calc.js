function doMath() {
  $('#equals').on('click', function() {
    collectInputs(); // returns an object
  });
}

function collectInputs() {
  var values = {};
  $.each($('div input'), function(index, element) {
    let label = $(this).prev().attr('for');
    values[label] = $(this).val();
  });
  return values;
}

$(document).ready(function() {
  doMath();
});