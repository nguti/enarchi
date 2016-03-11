var map;
function initializeBigMap() {
    // Create an array of styles.
    var styles = [
        {
            stylers: [
                {hue: "#686868"},
                {saturation: -100},
                {lightness: -40}
            ]
        }
    ];
    var myLatLng = new google.maps.LatLng(-29.923202, -71.213296);
    var styledMap = new google.maps.StyledMapType(styles,
            {name: "Styled Map"});
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        center: myLatLng,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };
    var map = new google.maps.Map(document.getElementById('bigMap'),
            mapOptions);
    var image = 'img/google-marker.png';

    var myMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
}
google.maps.event.addDomListener(window, 'load', initializeBigMap);
