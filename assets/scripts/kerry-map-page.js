var kerryMap = L.map('kerry-map').setView([52, -9.9], 7);
// code taken from the leaflet provider tool 
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 20,
    ext: 'jpg'
}).addTo(kerryMap);

 var myIcon = L.icon({
    iconUrl: 'assets/images/surfboard.png', // creating a custom surfboard icon to be used as a marker
    iconSize: [96, 38],
    iconAnchor: [48, 19],
    popupAnchor: [0, 0]
});

var ballybunionMarker = L.marker([52.498310, -9.412298],{ //coordinates of Ballybunion
    icon: myIcon, 
    title: 'Ballybunion',
    alt: 'surfboard icon showing Ballybunion', 
    opacity: 1.0
    });
    ballybunionMarker.addTo(kerryMap);

var castlegregoryMarker = L.marker([52.281091, -10.057973],{ // coordinates of Castlegregory
    icon: myIcon, 
    title: 'Castlegregory',
    alt: 'surfboard icon showing Castlegregory', 
    opacity: 1.0}
);
castlegregoryMarker.addTo(kerryMap);

var coumeenoleMarker = L.marker([52.100819, -10.464211],{ //coordinates of Coumeenole
    icon: myIcon, 
    title: 'Coumeenole',
    alt: 'surfboard icon showing Coumeenole', 
    opacity: 1.0}
);
coumeenoleMarker.addTo(kerryMap);

var inchKerryMarker = L.marker([52.111918, -9.980602],{ // coordinates of Inch
    icon: myIcon, 
    title: 'Inch',
    alt: 'surfboard icon showing Inch', 
    opacity: 1.0}
);
inchKerryMarker.addTo(kerryMap);
    
var ballyskelligsMarker = L.marker([51.826181, -10.204100],{
    icon: myIcon, 
    title: 'Ballyskelligs',
    alt: 'surfboard icon showing Ballyskelligs', 
    opacity: 1.0}
    );
ballyskelligsMarker.addTo(kerryMap);

//popups

var ballybunionPopup = L.popup();
ballybunionPopup.setContent("<p>Powerful right handers fire in all tidal conditions</p><a href='ballybunion.html'>View surf forecast for Ballybunion</a>");
ballybunionMarker.bindPopup(ballybunionPopup);

var castlegregoryPopup = L.popup();
castlegregoryPopup.setContent("<p>Long rolling swells create exceptional surf</p><a href='castlegregory.html'>View surf forecast for Castlegregory</a>");
castlegregoryMarker.bindPopup(castlegregoryPopup);

var coumeenolePopup = L.popup();
coumeenolePopup.setContent("<p>Powerful sand bottomed waves not suitable for beginners</p><a href='coumeenole.html'>View surf forecast for Coumeenole</a>");
coumeenoleMarker.bindPopup(coumeenolePopup);

var inchKerryPopup = L.popup();
inchKerryPopup.setContent("<p>Good sized waves which handle all types of swells really well</p><a href='doughmore.html'>View surf forecast for Inch</a>");
inchKerryMarker.bindPopup(inchKerryPopup);

var ballyskelligsPopup = L.popup();
ballyskelligsPopup.setContent("<p>Smooth gentle sloping beach with the possibility for challenging waves</p><a href='doughmore.html'>View surf forecast for Ballyskelligs</a>");
ballyskelligsMarker.bindPopup(ballyskelligsPopup);