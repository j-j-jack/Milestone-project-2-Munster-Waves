var corkMap = L.map('cork-map').setView([51.9942, -8.7285], 8);
// code taken from the leaflet provider tool 
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 20,
    ext: 'jpg'
}).addTo(corkMap);

 var myIcon = L.icon({
    iconUrl: 'assets/images/surfboard.png', // creating a custom surfboard icon to be used as a marker
    iconSize: [96, 38],
    iconAnchor: [48, 19],
    popupAnchor: [0, 0]
});

var longStrandMarker = L.marker([51.560475, -8.992523],{ //coordinates of Long Strand
    icon: myIcon, 
    title: 'Long Strand',
    alt: 'surfboard icon showing Long Strand', 
    opacity: 1.0
    });
    longStrandMarker.addTo(corkMap);

var redStrandMarker = L.marker([51.534426, -8.939241],{ // coordinates of Red Strand
    icon: myIcon, 
    title: 'Red Strand',
    alt: 'surfboard icon showing Red Strand', 
    opacity: 1.0}
);
redStrandMarker.addTo(corkMap);

var inchydoneyMarker = L.marker([51.583101, -8.866123],{ //coordinates of Inchydoney
    icon: myIcon, 
    title: 'Inchydoney',
    alt: 'surfboard icon showing Inchydoney', 
    opacity: 1.0}
);
inchydoneyMarker.addTo(corkMap);

var garretstownMarker = L.marker([51.631213, -8.622963],{ // coordinates of Garretstown
    icon: myIcon, 
    title: 'Garretstown',
    alt: 'surfboard icon showing Garretstown', 
    opacity: 1.0}
);
garretstownMarker.addTo(corkMap);
    
var inchCorkMarker = L.marker([51.786432, -8.183083],{ // coordinates of Inch
    icon: myIcon, 
    title: 'Inch',
    alt: 'surfboard icon showing Inch', 
    opacity: 1.0}
    );
    inchCorkMarker.addTo(corkMap);

//popups

var longStrandPopup = L.popup();
longStrandPopup.setContent("<p></p><a href='long-strand.html'>View surf forecast for Long Strand</a>");
longStrandMarker.bindPopup(longStrandPopup);

var redStrandPopup = L.popup();
redStrandPopup.setContent("<p></p><a href='red-strand.html'>View surf forecast for Red Strand</a>");
redStrandMarker.bindPopup(redStrandPopup);

var inchydoneyPopup = L.popup();
inchydoneyPopup.setContent("<p></p><a href='inchydoney.html'>View surf forecast for Inchydoney</a>");
inchydoneyMarker.bindPopup(inchydoneyPopup);

var garretstownPopup = L.popup();
garretstownPopup.setContent("<p></p><a href='garretstown.html'>View surf forecast for Garretstown</a>");
garretstownMarker.bindPopup(garretstownPopup);

var inchCorkPopup = L.popup();
inchCorkPopup.setContent("<p></p><a href='inch-cork.html'>View surf forecast for Inch</a>");
inchCorkMarker.bindPopup(inchCorkPopup);