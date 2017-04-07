// Leaflet
//
App.showMap = function() {
    var map = L.map('event-map').setView([20, -5], 1.5);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGhpbGxpcGFkc21pdGgiLCJhIjoiY2oxNzljZ3lwMDR2dTMycDk0NzEzNTFqaiJ9.WZc7-mgR4pUkgJ9yTr2suQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
    }).addTo(map);


    var markers = App.events;
    for ( var i=0; i < markers.length; ++i ) 
    {
        // TODO Swap out below with handlebars template
       L.marker( [markers[i].geolat, markers[i].geolong] )
          .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].event + '</a>' +
                      '<br />' + markers[i]["start-nice"] + '&mdash;' + markers[i]["end-nice"] +
                      '<br />' + markers[i].city + ', ' + markers[i].country
                    )
          .addTo( map );
    }
}
