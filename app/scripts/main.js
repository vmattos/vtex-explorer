(function($) {
  "use strict";

  var selectedDt = $('#cards dt.active')

  $('#cards dt').on('click', function() {
    console.log(selectedDt)

    if(selectedDt) {
      selectedDt.toggleClass('active').next().toggleClass('active');
    }

    selectedDt = $(this);
    selectedDt.toggleClass('active');

    var dd = selectedDt.next();
    dd = $(this).next();
    dd.toggleClass('active');
  });

})(jQuery);