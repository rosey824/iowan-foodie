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

// Creates a control that recenters the map on Iowa.
function createCenterControl(map) {
    const controlButton = document.createElement("button");

    // Set CSS for the control.
    controlButton.style.backgroundColor = "#fff";
    controlButton.style.border = "2px solid #fff";
    controlButton.style.borderRadius = "3px";
    controlButton.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlButton.style.color = "rgb(25,25,25)";
    controlButton.style.cursor = "pointer";
    controlButton.style.fontFamily = "Roboto,Arial,sans-serif";
    controlButton.style.fontSize = "16px";
    controlButton.style.lineHeight = "38px";
    controlButton.style.margin = "8px 0 22px";
    controlButton.style.padding = "0 5px";
    controlButton.style.textAlign = "center";
    controlButton.textContent = "Center Map";
    controlButton.title = "Click to recenter the map";
    controlButton.type = "button";

    // Setup the click event listeners: simply set the map to Iowa.
    controlButton.addEventListener("click", () => {
        map.setCenter(iowa);
    });

    return controlButton;
}

// Initialize and add the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: iowa,
    });

    // Create the DIV to hold the control (return button).
    const centerControlDiv = document.createElement("div");

    // Create the control.
    const centerControl = createCenterControl(map);

    // Add the control to the DIV.
    centerControlDiv.appendChild(centerControl);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

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
