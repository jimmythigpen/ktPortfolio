(function(){

  var Elevator=function(){"use strict";function n(n,e){for(var t in e)t in n||(n[t]=e[t]);return n}function e(n,e,t,u){return n/=u/2,1>n?t/2*n*n+e:(n--,-t/2*(n*(n-2)-1)+e)}function t(n){p||(p=n);var u=n-p,o=e(u,v,-v,A);window.scrollTo(0,o),A>u?s=requestAnimationFrame(t):i()}function u(){w||(w=!0,v=document.documentElement.scrollTop||m.scrollTop,f||(A=1.5*v),requestAnimationFrame(t),c&&c.play())}function o(){p=null,v=null,w=!1}function i(){o(),c&&(c.pause(),c.currentTime=0),d&&d.play()}function r(){w&&(cancelAnimationFrame(s),o(),c&&(c.pause(),c.currentTime=0),window.scrollTo(0,0))}function l(n){n.addEventListener("click",u,!1)}function a(n){m=document.body,n.element&&l(n.element),n.duration&&(f=!0,A=n.duration),n.mainAudio&&(c=new Audio(n.mainAudio),c.setAttribute("preload","true"),c.setAttribute("loop","true")),n.endAudio&&(d=new Audio(n.endAudio),d.setAttribute("preload","true")),window.addEventListener("blur",r,!1)}var c,d,m=null,s=null,A=null,f=!1,p=null,v=null,w=!1;return n(a,{elevate:u})}();

  window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    duration: 1000
  });
};

$('a[href*=#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname) {
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      if ($target.length) {
        var targetOffset = $target.offset().top;
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
       return false;
      }
    }
  });

function init_map() {
		var var_location = new google.maps.LatLng(38.994752,-76.934697);

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
