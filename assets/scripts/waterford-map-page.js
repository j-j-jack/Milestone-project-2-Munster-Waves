var waterfordMap = L.map('waterford-map').setView([52.1944, -7.6228], 7);
// code taken from the leaflet provider tool 
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 20,
    ext: 'jpg'
}).addTo(waterfordMap); 

 var myIcon = L.icon({
    iconUrl: 'assets/images/surfboard.png',
    iconSize: [96, 38],
    iconAnchor: [48, 19],
    popupAnchor: [0, 0]
});

var ardmoreMarker = L.marker([51.945847, -7.779053],{ 
    icon: myIcon, 
    title: 'Ardmore',
    alt: 'surfboard icon showing Ardmore', 
    opacity: 1.0
    });
    ardmoreMarker.addTo(waterfordMap); 

var bunmahonMarker = L.marker([52.135120, -7.366740],{ 
    icon: myIcon, 
    title: 'Bunmahon',
    alt: 'surfboard icon showing Bunmahon', 
    opacity: 1.0}
);
bunmahonMarker.addTo(waterfordMap); 

var perfectWaveMarker = L.marker([52.127357, -7.259639],{ 
    icon: myIcon, 
    title: 'Perfect Wave',
    alt: 'surfboard icon showing Perfect Wave', 
    opacity: 1.0}
);
perfectWaveMarker.addTo(waterfordMap); 

var annestownMarker = L.marker([52.129254, -7.294315],{ 
    icon: myIcon, 
    title: 'Annestown',
    alt: 'surfboard icon showing Annestown', 
    opacity: 1.0}
);
annestownMarker.addTo(waterfordMap); 
    
var tramoreMarker = L.marker([52.148639, -7.131580],{ 
    icon: myIcon, 
    title: 'Tramore',
    alt: 'surfboard icon showing Tramore', 
    opacity: 1.0}
    );
    tramoreMarker.addTo(waterfordMap); 

var ardmorePopup = L.popup();
ardmorePopup.setContent("<p>Gentler breaks for the whole family here most of the time</p><a href='ardmore.html'>View surf forecast for Ardmore</a>");
ardmoreMarker.bindPopup(ardmorePopup);

var bunmahonPopup = L.popup();
bunmahonPopup.setContent("<p>Hollow powerful waves with strong rips when conditions are right</p><a href='bunmahon.html'>View surf forecast for Bunmahon</a>");
bunmahonMarker.bindPopup(bunmahonPopup);

var perfectWavePopup = L.popup();
perfectWavePopup.setContent("<p>Tasty Hollows with great consistency</p><a href='perfect-wave.html'>View surf forecast for Perfect Wave</a>");
perfectWaveMarker.bindPopup(perfectWavePopup);

var annestownPopup = L.popup();
annestownPopup.setContent("<p>Gentler waves in general but it can transform on occasion</p><a href='annestown.html'>View surf forecast for Annestown</a>");
annestownMarker.bindPopup(annestownPopup);

var tramorePopup = L.popup();
tramorePopup.setContent("<p>Ideal for learners with smaller waves for the most part</p><a href='tramore.html'>View surf forecast for Tramore</a>");
tramoreMarker.bindPopup(tramorePopup);