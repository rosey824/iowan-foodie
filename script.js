function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

let map;
const iowa = { lat: 41.878, lng: -93.097 };

// List of places in Iowa
const places = [
    {
        name: "The Dandy Lion",
        lat: 41.65966217440525,
        lng: -91.53339966770307,
        address: "Iowa City, IA",
        googleMapLink: "https://maps.app.goo.gl/467wMMuo8f6tJuk16"
    },
    {
        name: "St Burch Tavern",
        lat: 41.661251294431594,
        lng: -91.53327938123618,
        address: "Iowa City, IA",
        googleMapLink: "https://maps.app.goo.gl/pa4kHPYebPp49WjBA"
    },
    {
        name: "New Place Name",
        lat: 40.712776,
        lng: -74.005974,
        address: "New York, NY",
        googleMapLink: "https://maps.app.goo.gl/exampleNewPlace"
    },
    {
        name: "New Place Name",
        lat: 40.712776,
        lng: -74.005974,
        address: "New York, NY",
        googleMapLink: "https://maps.app.goo.gl/exampleNewPlace"
    }
];

// Initialize and add the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: iowa,
    });

    // Add markers for each place on map
    places.forEach(function(place) {
        var marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name
        });

        // Add an info window for each marker
        var infoWindow = new google.maps.InfoWindow({
            content: `<div>
                        <h2><strong>${place.name}</strong></h2>
                        <p>${place.address}</p>
                        <a href="${place.googleMapLink}" target="_blank">View on Google Maps</a>
                      </div>`
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
            map.setZoom(13);  // Set zoom level
            map.setCenter(marker.getPosition());
        });
    });
}

window.initMap = initMap;
