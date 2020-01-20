function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: {
            lat: 51.880097,
            lng: -9.583517
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 51.8501559, lng: -9.7464887},
        { lat: 51.8125,    lng: -9.8963},
        { lat: 51.8012,     lng: -9.9372},
        { lat: 51.7452778, lng: -10.1327778},
        { lat: 51.7595812, lng: -10.1254581}
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}