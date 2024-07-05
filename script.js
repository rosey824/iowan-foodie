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
        name: "Armored Gardens",
        lat: 41.52324136074508, 
        lng:-90.57091192890194,
        address: "Davenport, IA",
        googleMapLink: "https://maps.app.goo.gl/qYidoEwCribaMMEd9"
    },
    {
        name: "La Casa Maya",
        lat: 42.166369688999325, 
        lng: -93.63601953847346,
        address: "Ames, IA",
        googleMapLink: "https://maps.app.goo.gl/7gKJxu8gVYPvnmJq7"
    },
    { 
        name: "Boulder Tap House",
        lat:42.022522601286745, 
        lng:-93.61000436629713,
        address: "Ames, IA",
        googleMapLink: "https://maps.app.goo.gl/5Xb83yLdRGheQ7QA8"
    },
    { 
        name:"Vinyl Cafe",
        lat:42.024939614271645, 
        lng:-93.61385139328148,
        address:"Ames, IA",
        googleMapLink: "https://maps.app.goo.gl/QetZLFJL4f3cx4hN6"
    },
    { 
        name:"Macubana",
        lat:42.02227817232284, 
        lng:-93.65000246630939,
        address:"Ames, IA",
        googleMapLink: "https://maps.app.goo.gl/WfN2FPjc49FTsynJ6"
    },
    { 
        name:"The Royal Mile",
        lat:41.58578201640443, 
        lng:-93.62189185586462,
        address:"Des Moines, IA",
        googleMapLink: "https://maps.app.goo.gl/WkW2Tq99zdrvKGGi6"
    },
    { 
        name:"The Som",
        lat:40.81148766573086, 
        lng:-91.11061746260702, 
        address:"Burlington, IA",
        googleMapLink: "https://maps.app.goo.gl/Twy6Qwnw31b5ZnKy7"
    },
    { 
        name:"Uppers",
        lat:40.8114941845677, 
        lng:-91.11114633560219,
        address:"Burlington, IA",
        googleMapLink: "https://maps.app.goo.gl/z4EpE4AwkJjy7Mjr8"
    },
    { 
        name:"Good Restaurant + Lounge",
        lat:40.811680084200944, 
        lng:-91.10230866076174,
        address:"Burlington, IA",
        googleMapLink: "https://maps.app.goo.gl/QJ1hb8R1nDxVZca4A"
    },
    { 
        name:"eat.",
        lat:36.16706849718069,
        lng:-115.13899359327748,
        address:"Las Vegas, NV",
        googleMapLink: "https://maps.app.goo.gl/XTcc5928DcLAMRUTA"
    },
    {
        name: "Jethro's BBQ",
        lat:42.0122755122152, 
        lng:-93.61304058424858,
        address: "Ames, IA",
        googleMapLink:"https://maps.app.goo.gl/hBNTB39oiyZ4sG7fA"
    },
    {
        name:"Carlos Quesadillas Food Truck",
        lat:42.029444368971994, 
        lng:-93.64449794156465,
        address:"Ames, IA",
        googleMapLink:"https://maps.app.goo.gl/xCvEbfDE7zmcVUKA7"
    },
    {
        name:"Humble Donuts",
        lat:42.02376716687428, 
        lng:-93.61937561545824,
        address:"Ames, IA",
        googleMapLink:"https://maps.app.goo.gl/f9B7YXDCfX6Yed4L8"
    },
    {
        name:"The Grove Cafe",
        lat:42.02554015330304, 
        lng:-93.61131512286342,
        address:"Ames, IA",
        googleMapLink:"https://maps.app.goo.gl/zRW9rjxbdUsEWNLb8"
    },
    {
        name:"Magoo's Pizza",
        lat:42.84833454033085, 
        lng:-90.74281273387788,
        address:"Dubuque, IA",
        googleMapLink:"https://maps.app.goo.gl/eop9wjto7zXyoMXY7"
    },
    {
        name:"Cle's Chicago Treats",
        lat:42.02982824550808, 
        lng:-93.6441168001101,
        address:"Ames, IA",
        googleMapLink:"https://maps.app.goo.gl/mSoBjPRiRxQe4m6T7"
    },
    {
        name:"Harvestville Farm",
        lat:40.65773105641815, 
        lng:-91.53478977088223,
        address:"Donnellson, IA",
        googleMapLink:"https://maps.app.goo.gl/HX4WQ6FM9F1Vs1Us7"
    },
    {
        name:"Fat Jimmy's Smokehouse and Spirits",
        lat:40.51331561689469, 
        lng:-91.38304423932715,
        address:"Montrose, IA",
        googleMapLink:"https://maps.app.goo.gl/tfXrqes8LqkhmP7t9"
    },
    {
        name:"Le's Restaurant",
        lat:42.023716767901796, 
        lng:-93.66370611535174,
        address:"Ames, IA",
        googleMapLink:"https://maps.app.goo.gl/aXmiRL9CHMben5gw7"
    },
    {
        name:"WineStyles",
        lat:41.56136294504824, 
        lng:-93.78261279252366,
        address:"West Des Moines, IA",
        googleMapLink:"https://maps.app.goo.gl/jBBT82FaGMhH2ew46"
    },

];

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

// Load the Google Maps script dynamically
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.async = true;
script.defer = true;
document.head.appendChild(script);