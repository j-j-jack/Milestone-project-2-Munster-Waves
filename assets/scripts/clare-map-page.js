var clareMap = L.map('clare-map').setView([52.9045, -8.981], 7);
// code taken from the leaflet provider tool 
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 20,
    ext: 'jpg'
}).addTo(clareMap);

 var myIcon = L.icon({
    iconUrl: 'assets/images/surfboard.png', // creating a custom surfboard icon to be used as a marker
    iconSize: [96, 38],
    iconAnchor: [48, 19],
    popupAnchor: [0, 0]
});

var doolinPointMarker = L.marker([53.009012, -9.412298],{ //coordinates of Doolin Point
    icon: myIcon, 
    title: 'Doolin Point',
    alt: 'surfboard icon showing Doolin Point', 
    opacity: 1.0
    });
doolinPointMarker.addTo(clareMap);

var lahinchMarker = L.marker([52.9338, -9.3499],{ // coordinates of Lahinch
    icon: myIcon, 
    title: 'Lahinch',
    alt: 'surfboard icon showing Lahinch', 
    opacity: 1.0}
);
lahinchMarker.addTo(clareMap);

var spanishPointMarker = L.marker([52.847969, -9.456138],{ //coordinates of Spanish Point
    icon: myIcon, 
    title: 'Spanish Point',
    alt: 'surfboard icon showing Spanish Point', 
    opacity: 1.0}
);
spanishPointMarker.addTo(clareMap);

var doughmoreMarker = L.marker([52.806895, -9.499054],{ // coordinates of Doughmore
    icon: myIcon, 
    title: 'Doughmore',
    alt: 'surfboard icon showing Doughmore', 
    opacity: 1.0}
);
doughmoreMarker.addTo(clareMap);
    
var kilkeeMarker = L.marker([52.681758, -9.648977],{ //coordinates of Kilkee
    icon: myIcon, 
    title: 'Kilkee',
    alt: 'surfboard icon showing Kilkee', 
    opacity: 1.0}
    );
kilkeeMarker.addTo(clareMap);

//popups

var doolinPointPopup = L.popup();
doolinPointPopup.setContent("<p>One of Ireland's biggest waves is here under the Cliffs of Moher</p><a href='doolin-point.html'>View surf forecast for Doolin Point</a>");
doolinPointMarker.bindPopup(doolinPointPopup);

var lahinchPopup = L.popup();
lahinchPopup.setContent("<p>Consistent waves and an idyllic location make it one of the best surf spots in the country.</p><a href='lahinch.html'>View surf forecast for Lahinch</a>");
lahinchMarker.bindPopup(lahinchPopup);

var spanishPointPopup = L.popup();
spanishPointPopup.setContent("<p>Great variety of waves here allow for all levels of ability</p><a href='spanish-point.html'>View surf forecast for Spanish Point</a>");
spanishPointMarker.bindPopup(spanishPointPopup);

var doughmorePopup = L.popup();
doughmorePopup.setContent("<p>Reliably sized waves even when everywhere else is flat</p><a href='doughmore.html'>View surf forecast for Doughmore</a>");
doughmoreMarker.bindPopup(doughmorePopup);

var kilkeePopup = L.popup();
kilkeePopup.setContent("<p>Protected bay with a golden sandy beach ideal for learners</p><a href='doughmore.html'>View surf forecast for kilkee</a>");
kilkeeMarker.bindPopup(kilkeePopup);