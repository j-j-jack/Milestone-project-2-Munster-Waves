let beachName = document.getElementsByTagName('title')[0].innerHTML;

let beachDict = {'Doolin Point': [53.009012, -9.412298, 52.9045, -8.981], 
                    'Doughmore': [52.806895, -9.499054, 52.9045, -8.981], 
                    'Lahinch': [52.9338, -9.3499, 52.9045, -8.981], 
                    'Spanish Point': [52.806895, -9.499054, 52.9045, -8.981],
                    'Kilkee': [52.681758, -9.648977, 52.9045, -8.981]
};
let lat = beachDict[beachName][0];
let lng = beachDict[beachName][1];
let sunriseTimes = [];
let sunsetTimes = [];
let stormGlassData = {};
let daysLargeScreen = document.getElementsByClassName('days-large-screen');
let dayDisplayedSmallScreen = document.getElementsByClassName('day-selector-center')[0];
let daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']; 
let firstDayInSelector;
console.log(daysLargeScreen);
for (let i = 0; i < 7; i ++)
    {
    let day = i * 86400000; // constructing the full date for the next seven days in the format required by the api to function correctly
    let today = Date.now()
    let date = new Date(today + day);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let dayOfWeek = date.getDay();
    if(i==0){
        firstDayInSelector=dayOfWeek;
    }
    if (month < 10){
        month = '0' + month;
    }
    let monthDate = date.getDate();
    if(monthDate < 10){
        monthDate = '0' + monthDate;
    }
    dayOfWeek = daysArray[dayOfWeek]; // this is used for the template literal printed to the console
    if(i == 0){
        dayDisplayedSmallScreen.innerHTML = `${dayOfWeek}<br>${monthDate}`;
    }
    daysLargeScreen[i].innerHTML = `${dayOfWeek}<br>${monthDate}`;

    let fullDate = `${year}-${month}-${monthDate}`;
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${fullDate}`).then((sunResponse) => sunResponse.json()).then((sunData) => {
    
    // getting the api information for the next seven days using the lahinch coordinates and the constructed date
            let sR = sunData.results.sunrise; // extracting the sunrise info from the api
            let sS = sunData.results.sunset; // extracting the sunset infor from the api
            sunriseTimes[i] = sR;
            sunsetTimes[i] = sS;   
});}
for (let i = firstDayInSelector; i < (firstDayInSelector+7); i ++){
    console.log(i%7);
    daysArray.push(daysArray[i%7]);
}

for(let i = 0; i < 7; i ++){
    daysArray.shift();
}
console.log(daysArray);
// the code below is based on the example code provided by Stormglass api 
const params = 'airTemperature,waterTemperature,precipitation,swellHeight,waveHeight,waveDirection,windSpeed,windDirection';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
    headers: {
        'Authorization': '9a759cae-c394-11eb-9f40-0242ac130002-9a759d26-c394-11eb-9f40-0242ac130002'
    }
}).then((WeatherResponse) => WeatherResponse.json()).then((weatherData) => {
    console.log(weatherData);
    stormGlassData = weatherData;
});
let currentDaySelected = 0;
let currentHourSelected = 12;
let timeReachedStart = false;
let timeReachedEnd = false;
let timesList = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am',
                  '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
                   '6pm', '7pm', '8pm', '9pm', '10pm', '11pm']
let hoursLeft = document.getElementsByClassName('hours-left')[0];
let hoursRight = document.getElementsByClassName('hours-right')[0];
let dayLeft = document.getElementsByClassName('day-left')[0];
let dayRight = document.getElementsByClassName('day-right')[0];
let timeDisplayed = document.getElementsByClassName('time-selector-center')[0];
hoursLeft.addEventListener('click', function(){
        currentHourSelected--;
        if(timeReachedEnd){
            hoursRight.style.pointerEvents='auto';
            hoursRight.innerHTML='<i class="fas fa-caret-right"></i>';
            timeReachedEnd=false;
        }
        if(currentHourSelected == 0){
            hoursLeft.style.pointerEvents='none';
            hoursLeft.innerHTML='';
            timeReachedStart='true';
        }
        timeDisplayed.innerHTML = timesList[currentHourSelected];
        setWeatherDataOnPage();
});

hoursRight.addEventListener('click', function(){
    currentHourSelected++;
    if(timeReachedStart){
        hoursLeft.style.pointerEvents='auto';
        hoursLeft.innerHTML='<i class="fas fa-caret-left"></i>';
        timeReachedStart=false;
    }
        
    if(currentHourSelected == 23){
        hoursRight.style.pointerEvents='none';
        hoursRight.innerHTML='';
        timeReachedEnd=true;
        }
    timeDisplayed.innerHTML = timesList[currentHourSelected];
    setWeatherDataOnPage();
});

dayLeft.addEventListener('click', function(){
    if (currentDaySelected==0){
        dayLeft.style.pointerEvents = 'none';
            dayLeft.innerHTML = '';
    }
    else{
        dayLeft.style.pointerEvents = 'auto';
        dayLeft.innerHTML = '<i class="fas fa-caret-left"></i>';
        currentDaySelected--;
    }
    dayRight.innerHTML = '<i class="fas fa-caret-right"></i>'
    dayRight.style.pointerEvents = 'auto';
    dayDisplayedSmallScreen.innerHTML = daysArray[currentDaySelected];
    setWeatherDataOnPage();
});

dayRight.addEventListener('click', function(){
    if (currentDaySelected==6){
        dayRight.style.pointerEvents = 'none';
            dayRight.innerHTML = '';
    }
    else{
        dayRight.style.pointerEvents = 'auto';
        dayRight.innerHTML = '<i class="fas fa-caret-right"></i>';
        currentDaySelected++;
    }
    dayLeft.innerHTML = '<i class="fas fa-caret-left"></i>'
    dayLeft.style.pointerEvents = 'auto';
    dayDisplayedSmallScreen.innerHTML = daysArray[currentDaySelected];
    setWeatherDataOnPage();
});
for(let i =0; i<7; i++){
    daysLargeScreen[i].addEventListener('click', function(){
        currentDaySelected = this.dataset.day;
        dayDisplayedSmallScreen.innerHTML = daysArray[currentDaySelected];
        if (currentDaySelected == 0){
            dayLeft.style.pointerEvents = 'none';
            dayLeft.innerHTML = '';
        }
        else{
            dayLeft.style.pointerEvents = 'auto';
            dayLeft.innerHTML = '<i class="fas fa-caret-left"></i>'
        }
        if (currentDaySelected == 6){
            dayRight.style.pointerEvents = 'none';
            dayRight.innerHTML = '';
        }
        else{
            dayRight.style.pointerEvents = 'auto';
            dayRight.innerHTML = '<i class="fas fa-caret-right"></i>'
        }
        setWeatherDataOnPage();     
        console.log(currentDaySelected*24);
    });
}

function setWeatherDataOnPage(){
    document.getElementsByClassName('sunrise-value')[0].innerHTML = sunriseTimes[currentDaySelected];
        document.getElementsByClassName('sunset-value')[0].innerHTML = sunsetTimes[currentDaySelected];
        document.getElementsByClassName('temperature-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].airTemperature.noaa;
        document.getElementsByClassName('water-temperature-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waterTemperature.noaa;
        document.getElementsByClassName('precipitation-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].precipitation.noaa;
        document.getElementsByClassName('swell-height-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].swellHeight.noaa;
        document.getElementsByClassName('wave-height-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waveHeight.noaa;
        document.getElementsByClassName('wave-direction-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waveDirection.noaa;
        document.getElementsByClassName('wind-direction-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].windSpeed.noaa;
        document.getElementsByClassName('wind-speed-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].windDirection.noaa; 
}
/* Map section of script------------------------------------------------------------------------ */

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

var beachMarker = L.marker([lat, lng],{ //coordinates of Doolin Point
    icon: myIcon, 
    title: beachName,
    alt: `surfboard icon showing ${beachName}`, 
    opacity: 1.0
    });
beachMarker.addTo(beachMap);

var beachPopup = L.popup();
beachPopup.setContent(beachName);
beachMarker.bindPopup(beachPopup);


