function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
}

let map;
const iowa = { lat: 41.878, lng: -93.097 };

//Creates a control that recenter the map on Iowa.

function createCenterControl(map) {
    const controlButton = document.createElement("button");

//Set CSS for the control.
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

//Setup the click evenet listeners: simply set the map to Iowa.
controlButton.addEventListener("click", () => {
    map.setCenter(iowa);
});
return controlButton;
}

function initMap () {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: iowa,  
    });

//Create the DIV to hold the control (return button).
const centerControlDiv = document.createElement("div");

//Create the control.
const centerControl = createCenterControl(map);

//Add the control to the DIV.
centerControlDiv.appendChild(centerControl);
map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);
}

window.initMap = initMap;