  function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(30.2748069, -97.7397615),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);

//       var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
//       var marker = new google.maps.Marker({
//         position: myLatLng,
//         map: map,
//         icon: iconBase + 'schools_maps.png'
// });

