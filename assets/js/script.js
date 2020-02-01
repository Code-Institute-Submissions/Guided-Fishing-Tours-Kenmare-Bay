function initMap() {
    // Map options

    var options = {
        zoom: 10,
        center: {
            lat: 51.880097,
            lng: -9.583517
        }
    }
    // New Map
    var map = new google.maps.Map(document.getElementById("map"), options);

    // Array of Markers
    var markers = [
        {
            coords: { lat: 51.880097, lng: -9.583517 },
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h3 id="firstHeading" class="firstHeading">Kenmare</h3>' +
                '<div id="bodyContent">' + '<p> is a small quiet town placed on Wild Atlantic Way</p>' +
                '</div>' +
                '</div>'
        },
        {
            coords: { lat: 51.8501559, lng: -9.7464887 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h3 id="firstHeading" class="firstHeading">Blackwater Harbour</h3>' +
                '<div id="bodyContent">' +
                '<p>You can fish from both the harbour itself and the rocks to the west of the harbour,' +
                ' provided you check the swells. <br><strong>Species & Techniques:</strong> Spinning will take Mackerel' +
                ' in season, small Pollack, and there is even the possibility of a Sea-Trout.' +
                ' Ray and smaller Conger have both been caught here with bottom fished rigs.</p>' +
                '</div>' +
                '</div>'
        },
        {
            coords: { lat: 51.8125, lng: -9.8963 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h3 id="firstHeading" class="firstHeading">Oysterbed Pier</h3>' +
                '<div id="bodyContent">' +
                '<p>A small pier, almost lost in time, but sheltered, quiet and tranquil...' +
                " Mind you don't nod off! Access is on the shore road - take directions from the locals in Sneem." +
                '<br><strong>Species & Techniques:</strong> Pier fishing for Conger on the bottom, Wrasse on a' +
                ' float, Mullet on both, and the chance of an odd Ray and Flatfish.</p>' +
                '</div>' +
                '</div>'
        },
        {
            coords: { lat: 51.8012, lng: -9.9372 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                '<h3 id="firstHeading" class="firstHeading">Gleesk Harbour</h3>' +
                '<div id="bodyContent">' +
                '<p>The handy thing about this mark, and the remaining two marks is that they face onto the Kenmare River -' +
                ' we know it is not a river, but read the postscript and prepare to be amazed. ' +
                'Facing due south, even south east, these marks offer good fishing out of any cold northern winds.' +
                'A word of warning - there is a dangerously blind bend on this remarkably busy but terribly narrow road' +
                'that requires careful navigation. You can avail of limited parking at the pier itself, but that said, it is a lovely spot.' +
                '<br><strong>Species & Techniques:</strong> The fishing is surprisingly mixed with Wrasse, Triggerfish and Pollack ' +
                'falling to float fished worms, Pollack and Mackerel taken on spinners, and finally Dogfish, Conger and ' +
                'an odd Ray apparently falling to bottom fishing onto the sandy patches... No reports of winter fishing here.</p>' +
                '</div>' +
                '</div>'
        },
        {
            coords: { lat: 51.7452778, lng: -10.1327778 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                "<h3 id='firstHeading' class='firstHeading'>Lamb's Head</h3>" +
                '<div id="bodyContent">' +
                '<p>Another rock platform mark, this is on a spectacular piece of coastline.' +
                '<br><strong>Species & Techniques:</strong>You will encounter all the ususal suspects including Pollack, Conger, Wrasse and Mackerel.' +
                ' We have reliable reports of substantial numbers of Bass arriving inshore around here in the early Autumn.' +
                ' Fly fishing has been shown to produce Pollack, Wrasse and even Triggerfish in the summer.</p>' +
                '</div>' +
                '</div>'
        },
        {
            coords: { lat: 51.7595812, lng: -10.1254581 },
            iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
            content: '<div id="content">' +
                '<div id="siteNotice">' +
                '</div>' +
                "<h3 id='firstHeading' class='firstHeading'>Derrynane</h3>" +
                '<div id="bodyContent">' +
                "<p>Another beach, tucked into a bay protected by Lamb's Head" +
                " and Hog's Head - do you reckon there are many vegetarians in Kerry!?!" +
                ' - this beach is accessed from the village and most of the way by road.' +
                ' Quietly popular in the summer, it fishes best on the flood and near dusk.' +
                '<br><strong>Species & Techniques:</strong> Bass and Flounder are the main quarry taken here,' +
                ' with Mullet in the estuary.<br><strong>Warning:  Tim Hoy</strong> has reported a lot ' +
                ' of poisonous Lesser Weaverfish caught off the beach using legering techniques;' +
                ' check the species guide to see how to avoid their spines!</p>' +
                '</div>' +
                '</div>'
        }
    ];

    // loop through markers
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });

        // check for custom icon
        if (props.iconImage) {
            // set icon image
            marker.setIcon(props.iconImage);
        }

        if (props.content) {
            var infowindow = new google.maps.InfoWindow({
                content: props.content
            });

            marker.addListener('click', function () {
                infowindow.open(map, marker);
            });
        }
    }

}



// function initMap() {
//     var map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 10,
//         center: centerCoords,
//         title: 'Kenmare'
//     });
//     addMarkerInfo();
// }

//     function addMarkerInfo(){
//         for(var i = 0; i < markersOnMap.length; i++){
//             var contentString = '<h3>' + markersOnMap[i].placeName + '</h3>';
//             const marker = new google.maps.Marker({
//                 position: markersOnMap[i].LatLng[0],
//                 // icon: icons[markersOnMap[i].type].icon,
//                 map: map
//             });
//             const infowindow = new google.maps.InfoWindow({
//                 content: contentString
//             });
//             marker.addListener('click', function() {
//                 closeOtherInfo();
//                 infowindow.open(map, marker);
//                 InfoObj[0] = infowindow;
//             });
//         }
//     }

//     function closeOtherInfo() {
//         if(InfoObj.length > 0) {
//             InfoObj[0].set("marker", null);
//             InfoObj[0].close();
//             InfoObj[0].length = 0;
//         } 
//     }



// var labels = ["Kenmare", "Blackwater Harbour", "Oysterbed Pier", "Gleesk Harbour", "Lamb's Head", "Derrynane"];

// var markers = [
//     ["Kenmare", 51.880097, -9.583517],
//     ["BlackWater Harbour", 51.8501559, -9.7464887],
//     ["Oysterbed Pier", 51.8125, -9.8963],
//     ["Gleesk Harbour", 51.8012, -9.9372],
//     ["Lamb's Head", 51.7452778, -10.1327778],
//     ["Derrynane", 51.7595812, -10.1254581]
// ];


// var contentString = [
//     ['<div class="info_content">' +
//         '<h3>Kenmare</h3>' +
//         '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
//     ['<div class="info_content">' +
//         '<h3>BlackWater Harbour</h3>' +
//         '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
//     ['<div class="info_content">' +
//         '<h3>Oysterbed Pier</h3>' +
//         '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
//     ['<div class="info_content">' +
//         '<h3>Gleesk Harbour</h3>' +
//         '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
//     ['<div class="info_content">' +
//         "<h3>Lamb's Head</h3>" +
//         '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>'],
//     ['<div class="info_content">' +
//         "<h3>Derrynane</h3>" +
//         '<p>Lorem Ipsum  Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum</p>' + '</div>']
// ];


// var infowindow = new google.maps.InfoWindow(), marker, i;

// for (var i = 0; i < markers.length; i++) {
//     var marker = new google.maps.Marker({
//         position: markers[i][1], markers[i][2],
//         map: map,
//         title: markers[i][0];
//     });
//     marker.addListener('click', function () {
//         infowindow.open(map, marker);
//     });
// }

// var markerCluster = new MarkerClusterer(map, markersOnMap,
//     { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });



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


