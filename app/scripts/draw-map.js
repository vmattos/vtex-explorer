(function($) {
  "use strict";

  google.maps.event.addDomListener(window, 'load', function() {
    var lat = -23.59606,
        lng = -46.6899027;

    var location = new google.maps.LatLng(lat, lng);

    var mapOptions = {
      center: location,
      zoom: 16,
      disableDefaultUI: true,
      draggable: false,
      scrollwheel: false
    };

    var marker = new google.maps.Marker({
      position: location
    });

    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
    
    marker.setMap(map);

    var service = new google.maps.places.PlacesService(map);
  });

})(jQuery);