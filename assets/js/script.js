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



/*-----------------------Back to top button---------*/
//Get the button element
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*----------------------Weather API-------------------*/
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Kenmare&units=metric&appid=d17999dddb25e373cdd4d9bd55b6359e", function(data){
    console.log(data);

    var icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

    var temp = data.main.temp;

    $('.icon').attr('src', icon);
    $(".temp").append(temp);
});