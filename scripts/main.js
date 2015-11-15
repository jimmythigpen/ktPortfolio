(function(){


  window.onload = function() {
    var elevator = new Elevator({
      element: document.querySelector('.elevator-button'),
      duration: 1500
    });
  };
  $(document).on('click touchstart', function () {
    $('.navbar-collapse').collapse('hide');
  });

  $('a[href*=#]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body')
          .animate({scrollTop: targetOffset}, 1000);
         return false;
        }
      }
    });

  function init_map() {
  		var var_location = new google.maps.LatLng(38.9047,-77.0164);

          var var_mapoptions = {
            center: var_location,
            zoom: 10,
            draggable: false,
            scrollwheel: false,
            panControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            disableDefaultUI: true
          };

  		var var_marker = new google.maps.Marker({
  			position: var_location,
              map: var_map,
  			title:"College Park, MD"});

          var var_map = new google.maps.Map(document.getElementById("map-container"),
              var_mapoptions);

  		var_marker.setMap(var_map);

    }

      google.maps.event.addDomListener(window, 'load', init_map);

}());
