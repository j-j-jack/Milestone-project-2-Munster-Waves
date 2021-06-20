let beachName = document.getElementsByTagName('title')[0].innerHTML;

let beachDict = {'Doolin Point': [53.009012, -9.412298, 52.9045, -8.981], 
                    'Doughmore': [52.806895, -9.499054, 52.9045, -8.981], 
                    'Lahinch': [52.9338, -9.3499, 52.9045, -8.981], 
                    'Spanish Point': [52.806895, -9.499054, 52.9045, -8.981],
                    'Kilkee': [52.681758, -9.648977, 52.9045, -8.981]
};


var beachMap = L.map('beach-map').setView([beachDict[beachName][2],beachDict[beachName][3]], 9);
// code taken from the leaflet provider tool 
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 20,
    ext: 'jpg'
}).addTo(beachMap);

var myIcon = L.icon({
    iconUrl: 'assets/images/surfboard.png', // creating a custom surfboard icon to be used as a marker
    iconSize: [96, 38],
    iconAnchor: [48, 19],
    popupAnchor: [0, 0]
});

var beachMarker = L.marker([beachDict[beachName][0],beachDict[beachName][1]],{ //coordinates of Doolin Point
    icon: myIcon, 
    title: beachName,
    alt: `surfboard icon showing ${beachName}`, 
    opacity: 1.0
    });
beachMarker.addTo(beachMap);

var beachPopup = L.popup();
beachPopup.setContent(beachName);
beachMarker.bindPopup(beachPopup);


