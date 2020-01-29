// function initMap() {
//   var kenmare = {lat: 51.880097,
//             lng: -9.583517};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: kenmare
//   });

//   var contentString = 
//       '<h3>Kenmare</h3>';

//   var infowindow = new google.maps.InfoWindow({
//     content: contentString
//   });

//   var marker = new google.maps.Marker({
//     position: kenmare,
//     map: map,
//     title: 'Kenmare'
//   });
//   marker.addListener('click', function() {
//     infowindow.open(map, marker);
//   });
// }
// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
//   var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
//       '<div id="bodyContent">'+
//       '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
//       'sandstone rock formation in the southern part of the '+
//       'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
//       'south west of the nearest large town, Alice Springs; 450&#160;km '+
//       '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
//       'features of the Uluru - Kata Tjuta National Park. Uluru is '+
//       'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
//       'Aboriginal people of the area. It has many springs, waterholes, '+
//       'rock caves and ancient paintings. Uluru is listed as a World '+
//       'Heritage Site.</p>'+
//       '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
//       'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
//       '(last visited June 22, 2009).</p>'+
//       '</div>'+
//       '</div>';
function initMap() {
      var kenmare = {lat: 51.880097,
            lng: -9.583517};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: kenmare
    });
     var contentString = 
     
    '<h3>Kenmare</h3>' +
    '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' +'</div>'
	

   var infowindow = new google.maps.InfoWindow({
    content: contentString
   });

   var marker = new google.maps.Marker({
    position: kenmare,
    map: map,
    title: 'Kenmare'
   });
   marker.addListener('click', function() {
    infowindow.open(map, marker);
   });
    //  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

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