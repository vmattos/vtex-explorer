(function($) {
  'use strict';

  var selectedDt = $('#cards dt.active');

  $('#cards dt').on('click', function() {

    if(selectedDt) {
      selectedDt.toggleClass('active');
      selectedDt.next().toggleClass('active');
      selectedDt.parent().toggleClass('active-row');
    }

    selectedDt = $(this);
    selectedDt.toggleClass('active');

    var dd = selectedDt.next();
    dd.toggleClass('active');

    var row = selectedDt.parent();
    row.toggleClass('active-row');
  });

})(jQuery);