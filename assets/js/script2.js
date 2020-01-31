
jQuery(function ($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCfTkG2Fgjlc5XB2Ak4qjhmM6TS0RwiGUg&amp;callback=initialize";
    document.body.appendChild(script);
});

function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };

    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    map.setTilt(45);

    // Multiple Markers
    var markers = [
        ["Kenmare", 51.880097, -9.583517],
        ["BlackWater Harbour", 51.8501559, -9.7464887],
        ["Oysterbed Pier", 51.8125, -9.8963],
        ["Gleesk Harbour", 51.8012, -9.9372],
        ["Lamb's Head", 51.7452778, -10.1327778],
        ["Derrynane", 51.7595812, -10.1254581]
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
            '<h3>Kenmare</h3>' +
            '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>BlackWater Harbour</h3>' +
            '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Oysterbed Pier</h3>' +
            '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
        ['<div class="info_content">' +
            '<h3>Gleesk Harbour</h3>' +
            '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
        ['<div class="info_content">' +
            "<h3>Lamb's Head</h3>" +
            '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
        ['<div class="info_content">' +
            "<h3>Derrynane</h3>" +
            '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>']
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;

    // Loop through our array of markers &amp; place each one on the map  
    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        // Each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function (event) {
        this.setZoom(5)
        google.maps.event.removeListener(boundsListener);
    });

}
