function toggleMobileMenu() {
    document.getElementById("menu").classList.toggle("active");
}

let map;
const iowa = { lat: 41.878, lng: -93.097 };

// Initialize and add the map
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: iowa,
    });

    //Custom marker icon URL
    const customIcon = {
        url: './imgs/custom-icon.png', // Relative path to your custom icon
        scaledSize: new google.maps.Size(60, 60), // Size of the icon
        origin: new google.maps.Point(0, 0), // Origin of the icon (0, 0)
        anchor: new google.maps.Point(30, 60) // Anchor of the icon (base of the icon)
    };

    // Add markers for each place on map and create legend/list
    const markers= [];
    const legendDiv = document.getElementById('legend');
    places.forEach((place, index) => {
        const marker = new google.maps.Marker({
            position: { lat: place.lat, lng: place.lng },
            map: map,
            title: place.name,
            icon: customIcon
        });

    // Add an info window for each marker
    const infoWindow = new google.maps.InfoWindow({
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

        

        //Create entry for legend
        const listItem = document.createElement('div');
        listItem.innerHTML = `<a href="#">${place.name}</a>`;
        listItem.addEventListener('click', () => {
            map.setCenter(marker.getPosition());
            map.setZoom(13);
            infowindow.open(map, marker);
        });
        placesUl.appendChild(listItem);

        markers.push(marker);
    });
}

window.initMap = initMap;