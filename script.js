function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle
    ("active");
}

document.getElementById('resetButton').addEventListener('click', function() {
    map.setZoom(7);
    map.setCenter(iowa);
});