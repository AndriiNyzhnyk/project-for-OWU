window.onload = function () {
// Button Run in index.html
    function showText(el) {
        if (el.previousElementSibling.clientHeight === 185) {
            el.previousElementSibling.style.height = "100%";
            el.innerHTML = "Сховати текст";
        } else {
            el.previousElementSibling.style.height = "185px";
            el.innerHTML = "Читати далі ...";
        }
    }

// Google Map
    var map;

    function initMap() {
        navigator.geolocation.getCurrentPosition(function (pos) {
            var myLatLng = {lat: pos.coords.latitude, lng: pos.coords.longitude};

            map = new google.maps.Map(document.getElementById('map'), {
                center: myLatLng,
                zoom: 15,
                backgroundColor: "silver"
            });

            var marker = new google.maps.Marker({
                position: myLatLng,
                map: map,
                title: 'Hello World!',
                scrollwheel: false
            });

        });
    }
}