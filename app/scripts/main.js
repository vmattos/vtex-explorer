(function() {
  "use strict";

  var currentShowingDD = null;

  $('#cards dt').on('click', function() {
    currentShowingDD = $(this).next();
    currentShowingDD.toggleClass('active');
  });
})();