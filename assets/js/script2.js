<script>
jQuery(function($) {
// Asynchronously Load the map API 
var script = document.createElement('script');
script.src = "https://maps.googleapis.com/maps/api/js?sensor=false&amp;callback=initialize";
document.body.appendChild(script);
});
 
function initialize() {
var map;
var bounds = new google.maps.LatLngBounds();
var mapOptions = {
     mapTypeId: 'roadmap'
};
                 
// Display a map on the page
map = new google.maps.Map(document.getElementById("map_tuts"), mapOptions);
map.setTilt(45);
     
// Multiple Markers
var markers = [
  ['Mumbai', 19.0760,72.8777],
  ['Pune', 18.5204,73.8567],
  ['Bhopal ', 23.2599,77.4126],
  ['Agra', 27.1767,78.0081],
  ['Delhi', 28.7041,77.1025],
];
                     
// Info Window Content
var infoWindowContent = [
    ['<div class="info_content">' +
    '<h3>Mumbai</h3>' +
    '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
    ['<div class="info_content">' +
    '<h3>Pune</h3>' +
    '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
    ['<div class="info_content">' +
    '<h3>Bhopal</h3>' +
    '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],  
    ['<div class="info_content">' +
    '<h3>Agra</h3>' +
    '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
    ['<div class="info_content">' +
    '<h3>Delhi</h3>' +
    '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'],
];
     
// Display multiple markers on a map
var infoWindow = new google.maps.InfoWindow(), marker, i;
 
// Loop through our array of markers &amp; place each one on the map  
for( i = 0; i < markers.length; i++ ) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i][0]
    });
     
    // Each marker to have an info window    
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker);
        }
    })(marker, i));
 
    // Automatically center the map fitting all markers on the screen
    map.fitBounds(bounds);
}
 
// Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
    this.setZoom(5)
    google.maps.event.removeListener(boundsListener);
});
 
}
</script>