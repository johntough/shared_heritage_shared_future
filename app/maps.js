// Create an array of styles.
var styles = [{
    featureType: "water",
    elementType: "all",
    stylers: [
        { hue: '#ffff00' },
        { saturation: '100' },
        { lightness: '-10' },
        { visibility: "on" }
    ]
},{
    featureType: "landscape",
    elementType: "all",
    stylers: [
        { hue: '#ff3300' },
        { saturation: '100' },
        { lightness: '-10' },
    ]
},{
    featureType: "road",
    elementType: "geometry",
    stylers: [
        { visibility: "off" }
    ]
},{
    featureType: "road",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
},{
    featureType: "poi",
    stylers: [
        { hue: '#ff0000' },
        { saturation: '100' },
        { lightness: '-10' },
    ]
},{
    featureType: "poi",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
},{
    featureType: "transit",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
},{
    featureType: "landscape",
    "elementType": "labels",
    stylers: [
        { visibility: "off" }
    ]
},{
    featureType: "transit",
    "elementType": "geometry",
    stylers: [
        { visibility: "off" }
    ]
},{
    featureType: "administrative.neighborhood",
    elementType: "labels",
    stylers: [
        { visibility: "off" }
    ]
}];

var infoWindowsArray = [];

function initialize() {
    'use strict';

    var myOptions = {
        zoom: 6,
        // Dosbarrios, Toledo, Spain (not far south of Madrid)
        center: new google.maps.LatLng(39.873078, -3.425662),
        disableDefaultUI: true,
        zoomControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    

    // *****************************************************
    // Hinojares
    // *****************************************************
    var hinojaresMarker = generateMarker(map, 37.715497, -2.998969, 'Hinojares');

    var hinojaresContentString = 
        '<div id="content">'+
            '<IMG BORDER="0" height="40" width="60" ALIGN="Left" SRC="resources/images/flag_of_jaén.png"/>'+
            '<h1 id="firstHeading" class="firstHeading">&nbsp;&nbsp;&nbsp; Hinojares - Province of Jaén</h1>'+
            '<div id="bodyContent">'+
                '<br>'+
                '<iframe width="560" height="315" src="https://www.youtube.com/embed/4xUL1GpR2lU" frameborder="0" allowfullscreen></iframe>'+
                '<br>'+
                '<p>Hinojares is a town located in the province of Jaén, Spain. According to the 2014 census the municipality has a population of 370 inhabitants.'+
                '<br>'+
                '<br>'+
                'Jaén is a province of southern Spain, in the eastern part of the autonomous community of Andalusia. It is bordered by the provinces of Ciudad Real, '+
                'Albacete, Granada and Córdoba. Its capital is Jaén city.'+
                '<br>'+
                '<br>'+
                'Its area is 13,484 km². Its population is 657,387 (2003), of whom just about one-sixth live in the capital. It contains 97 municipalities.'+
                'The highest point of the province is Pico Mágina (2165 m).'+
                '</p>'+
            '</div>'+
        '</div>';

    var hinojaresInfowindow = new google.maps.InfoWindow({
        content: hinojaresContentString
    });
    infoWindowsArray.push(hinojaresInfowindow);

    // *****************************************************
    // Granada
    // *****************************************************
    var granadaMarker = generateMarker(map, 37.1773, -3.5986, 'Granada');

    var granadaContentString = 
        '<div id="content">'+
            '<h1 id="firstHeading" class="firstHeading">Granada</h1>'+
            '<div id="bodyContent">'+
                '<div id="sliderFrame">'+
                '    <div id="slider">'+
                '        <img src="http://www.dronestagr.am/wp-content/uploads/2014/06/Alhambra-de-Granada2-640x360.jpg" alt="Granada" />'+
                '        <img src="http://www.pinkpangea.com/wp-content/uploads/2015/01/8873025734_241c7d1bed_z-640x360.jpg" />'+
                '        <img src="http://www.pinkpangea.com/wp-content/uploads/2015/10/5046076301_f93e87f5aa_z-640x360.jpg" />'+
                '    </div>'+
                '</div> '+
                '<br>'+
                '<p>Granada is a city and the capital of the province of Granada, in the autonomous community of Andalusia, Spain.'+
                '</p>'+
            '</div>'+
        '</div>';

    var granadaInfowindow = new google.maps.InfoWindow({
        content: granadaContentString
    })
    infoWindowsArray.push(granadaInfowindow);

    // *****************************************************
    // Jaén
    // *****************************************************
    var jaenMarker = generateMarker(map, 37.7796, -3.7849, 'Ciudad de Jaén');

    var jaenContentString = 
        '<div id="content">'+
            '<IMG BORDER="0" height="40" width="60" ALIGN="Left" SRC="resources/images/flag_of_jaén_city.png"/>'+
            '<h1 id="firstHeading" class="firstHeading">&nbsp;&nbsp;&nbsp; Jaén</h1>'+
            '<div id="bodyContent">'+
                '<br>'+
                '<p>Jaén is a city in south-central Spain. The name is derived from the Arabic word khayyān (\'crossroads of caravans\').'+
                '<br>'+
                '<br>'+
                'It is the capital of the province of Jaén. It is located in the autonomous community of Andalusia.'+
                '<br>'+
                '<br>'+
                'The inhabitants of the city are known as Jiennenses. Its population is 116,731 (2012), about one-sixth of the population of the province.'+
                '</p>'+
            '</div>'+
        '</div>';

    var jaenInfowindow = new google.maps.InfoWindow({
        content: jaenContentString
    });
    infoWindowsArray.push(jaenInfowindow);

    // *****************************************************
    // Pico Mágina
    // *****************************************************
    var picoMaginaMarker = generateMarker(map, 37.7250, -3.4667, 'Pico Mágina');

    var picoMaginaContentString = 
        '<div id="content">'+
            '<h1 id="firstHeading" class="firstHeading">Pico Mágina</h1>'+
            '<div id="bodyContent">'+
                '<p>Pico Mágina is a 2,165-metre (7,103 ft) high mountain in Spain.'+
                '<br>'+
                '<br>'+
                'The mountain is located in Jaén Province, in the northern part of the autonomous community of Andalusia.'+
                '<br>'+
                '<br>'+
                'It\'s the highest peak of the province and also of Sierra Mágina, and is located on the border between the municipalities of Albanchez de Mágina and Huelma.'+
                '</p>'+
            '</div>'+
        '</div>';

    var picoMaginaInfowindow = new google.maps.InfoWindow({
        content: picoMaginaContentString
    });
    infoWindowsArray.push(picoMaginaInfowindow);

    addMarkerListener(map, hinojaresMarker, hinojaresInfowindow);
    addMarkerListener(map, granadaMarker, granadaInfowindow);
    addMarkerListener(map, jaenMarker, jaenInfowindow);
    addMarkerListener(map, picoMaginaMarker, picoMaginaInfowindow);

    // close info windows when map is clicked
    google.maps.event.addListener(map, "click", function(event) {
        closeInfoWindows();
    });

    var markerArray = [];
    markerArray.push(hinojaresMarker, granadaMarker, jaenMarker, picoMaginaMarker);
    configureMarkerClusterer(map, markerArray);
};

/**
 * Generates a marker and places it at the given coordinates.
 *
 * @param {google.maps.Map} map - the google map object
 * @param {Number} latitude - the latitude value for the marker
 * @param {Number} longitude - the longitude value for the marker
 * @param {String} title - the title to be displayed for the marker
 * @return {google.maps.Marker} marker - the generated marker
 */
function generateMarker(map, latitude, longitude, title) {
    'use strict';

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        title: title,
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png'
    });

    return marker;
};

/**
 * Ensures multiple info windows are not open at the same time.
 */
function closeInfoWindows() {
    'use strict';
  
    for (var infoWindow in infoWindowsArray) {
        if (infoWindowsArray.hasOwnProperty(infoWindow)) {
            infoWindowsArray[infoWindow].close();
        }
    }
};

/**
 * Adds a 'click' listener to the given marker to open the given info window.
 *
 * @param {google.maps.Map} map - the google map object
 * @param {google.maps.Marker} marker - the marker that the listener should be added to
 * @param {google.maps.InfoWindow} infoWindow - the info window hat should be opened when the listener is called
 */
function addMarkerListener(map, marker, infowindow) {
    'use strict';

    marker.addListener('click', function() {
        closeInfoWindows();
        infowindow.open(map, marker);
    });
};

/**
 * Configures MarkerClusterer object for passed in array of google.maps.Marker
 *
 * @param {google.maps.Map} map - the google map object
 * @param {Array} markerArray - array of google.maps.Marker
 */
function configureMarkerClusterer(map, markerArray) {
    'use strict';

    var markerClustererOptions = {
        gridSize: 50,
        zoomOnClick: false,
        styles: [{
            height: 56,
            // yellow marker
            url: 'http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m2.png',
            width: 55
        }]
    };

    new MarkerClusterer(map, markerArray, markerClustererOptions);
}