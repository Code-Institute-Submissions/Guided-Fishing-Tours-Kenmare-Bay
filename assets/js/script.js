function initMap() {
      var kenmare = {lat: 51.880097,
            lng: -9.583517};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: kenmare
    });
     // var labels = ["Kenmare", "Blackwater Harbour", "Oysterbed Pier", "Gleesk Harbour", "Lamb's Head", "Derrynane"];

     var markers= [
        ["Kenmare", 51.880097, -9.583517],
        ["BlackWater Harbour", 51.8501559, -9.7464887],
        ["Oysterbed Pier", 51.8125, -9.8963],
        ["Gleesk Harbour", 51.8012, -9.9372],
        ["Lamb's Head", 51.7452778, -10.1327778],
        ["Derrynane", 51.7595812, -10.1254581]
    ];


   var contentString =[
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
      

  var infowindow = new google.maps.InfoWindow(), marker, i;

    for(var i =0; i < markers.length; i++){
  var marker = new google.maps.Marker({
    position: markers[i][1],markers[i][2],
    map: map,
    title: markers[i][0];
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

    var markerCluster = new MarkerClusterer(map, markers,
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

            

/*-----------------------Back to top button---------*/
//Get the button element
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

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
// API key = d17999dddb25e373cdd4d9bd55b6359e;

var city;

window.onload = function () {
    city = "Kenmare";
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=d17999dddb25e373cdd4d9bd55b6359e", function (data) {
        console.log(data);

        var icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

        var temp = Math.floor(data.main.temp);
        var weather = data.weather[0].main;
        var wind = data.wind.speed;

        $('.city').append(city)
        $('.icon').attr('src', icon);
        $('.weather').append(weather);
        $(".temp").append(temp);
        $(".wind").append(wind);
    });

}

function sendToPage() {
    if (city == null) {
        city = "";
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=d17999dddb25e373cdd4d9bd55b6359e", function (data) {
            console.log(data);

            var icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

            var temp = Math.floor(data.main.temp);
            var weather = data.weather[0].main;
            var wind = data.wind.speed;

            $('.city').append(city)
            $('.icon').attr('src', icon);
            $('.weather').append(weather);
            $(".temp").append(temp);
            $(".wind").append(wind);
        });
    } else {

        city = document.getElementById("search").value;
        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=d17999dddb25e373cdd4d9bd55b6359e", function (data) {
            console.log(data);

            var icon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";

            var temp = Math.floor(data.main.temp);
            var weather = data.weather[0].main;
            var wind = data.wind.speed;

            $('.city').append(city)
            $('.icon').attr('src', icon);
            $('.weather').append(weather);
            $(".temp").append(temp);
            $(".wind").append(wind);
        });
    }
}


