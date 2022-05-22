let beachName = document.getElementsByTagName("title")[0].innerHTML;

let beachDict = {
    "Annestown": [52.129254, -7.294315, 52.1944, -7.6228],
    "Ardmore": [51.945847, -7.779053, 52.1944, -7.6228],
    "Ballinskelligs": [51.826181, -10.204100, 52, -9.9],
    "Ballybunion": [52.498310, -9.412298, 52, -9.9],
    "Bunmahon": [52.135120, -7.366740, 52.1944, -7.6228],
    "Castlegregory": [52.281091, -10.057973, 52, -9.9],
    "Coumeenole": [52.100819, -10.464211, 52, -9.9],
    "Doolin Point": [53.009012, -9.412298, 52.9045, -8.981],
    "Doughmore": [52.806895, -9.499054, 52.9045, -8.981],
    "Garretstown": [51.631213, -8.622963, 51.9942, -8.7285],
    "Inch(Cork)": [51.786432, -8.183083, 51.9942, -8.7285],
    "Inch(Kerry)": [52.111918, -9.980602, 52, -9.9],
    "Inchydoney": [51.583101, -8.866123, 51.9942, -8.7285],
    "Kilkee": [52.681758, -9.648977, 52.9045, -8.981],
    "Lahinch": [52.9338, -9.3499, 52.9045, -8.981],
    "Long Strand": [51.560475, -8.992523, 51.9942, -8.7285],
    "Perfect Wave": [52.127357, -7.259639, 52.1944, -7.6228],
    "Red Strand": [51.534426, -8.939241, 51.9942, -8.7285],
    "Spanish Point": [52.806895, -9.499054, 52.9045, -8.981],
    "Tramore": [52.148639, -7.131580, 52.1944, -7.6228]
};
let lat = beachDict[beachName][0];
let lng = beachDict[beachName][1];
let sunriseTimes = [];
let sunsetTimes = [];
let stormGlassData = {};
let daysLargeScreen = document.getElementsByClassName('days-large-screen');
let dayDisplayedSmallScreen = document.getElementsByClassName('day-selector-center')[0];
let daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']; 
let dateArray = [];
let firstDayInSelector;
let fetchedSun = 0;
let fetchedStorm = false;

for (i = 0; i < 7; i ++)
    {
    let day = i * 86400000; 
    let today = Date.now();
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
    dateArray.push(monthDate);
    dayOfWeek = daysArray[dayOfWeek]; 
    if(i == 0){
        dayDisplayedSmallScreen.innerHTML = `${dayOfWeek}<br>${monthDate}`;
    }
    daysLargeScreen[i].innerHTML = `${dayOfWeek}<br>${monthDate}`;

    let fullDate = `${year}-${month}-${monthDate}`;
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${fullDate}`).then((sunResponse) => sunResponse.json()).then((sunData) => {
            let sR = sunData.results.sunrise;
            let sS = sunData.results.sunset; 
            sunriseTimes.push(sR);
            sunsetTimes.push(sS);
            console.log(sunData);
            if(sunData.status=='OK'){ 
                fetchedSun++;
                fetchComplete(); 
            }
            else{
                errorHandler(); 
            }
        
}).catch((error) => 
    errorHandler());
}

for (i = firstDayInSelector; i < (firstDayInSelector+7); i ++){
    daysArray.push(daysArray[i%7]);
}

for(i = 0; i < 7; i ++){
    daysArray.shift();
}

const params = 'airTemperature,waterTemperature,precipitation,swellHeight,waveHeight,waveDirection,windSpeed,windDirection';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
    headers: {
        'Authorization': '9a759cae-c394-11eb-9f40-0242ac130002-9a759d26-c394-11eb-9f40-0242ac130002'
    }
}).then((WeatherResponse) => WeatherResponse.json()).then((weatherData) => {
    stormGlassData = weatherData;
    if('errors' in weatherData){
        errorHandler();  
    }
    else{
    fetchedStorm = true; 
    fetchComplete();
}
}).catch((error) => 
    errorHandler()); 


let currentDaySelected = 0;
let currentHourSelected = 12; 
let timeReachedStart = false; 
let timeReachedEnd = false; 

let timesList = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am',
                  '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
                   '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
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
    dayDisplayedSmallScreen.innerHTML = `${daysArray[currentDaySelected]} <br>
            ${dateArray[currentDaySelected]}`;
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
    dayDisplayedSmallScreen.innerHTML = `${daysArray[currentDaySelected]} <br>
            ${dateArray[currentDaySelected]}`;
    setWeatherDataOnPage();
});

daysLargeScreen[0].style.borderBottom = '3px solid yellow';  
for(i =0; i<7; i++){
    daysLargeScreen[i].addEventListener('click', function(){ 
        for (i = 0; i < 7; i ++){
            daysLargeScreen[i].style.borderBottom = 'none'; 
        }
        currentDaySelected = this.dataset.day;
        daysLargeScreen[currentDaySelected].style.borderBottom = '4px solid yellow'; 
        dayDisplayedSmallScreen.innerHTML = `${daysArray[currentDaySelected]} <br>
            ${dateArray[currentDaySelected]}`;
       
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
    });
}
function fetchComplete(){
    if(fetchedSun == 7 && fetchedStorm == true){ 
        document.getElementsByClassName('day-selector')[0].style.pointerEvents = 'auto'; 
        document.getElementsByClassName('time-selector')[0].style.pointerEvents = 'auto';
        setWeatherDataOnPage(); 
    }
}
function setWeatherDataOnPage(){
    document.getElementsByClassName('sunrise-value')[0].innerHTML = sunriseTimes[currentDaySelected];
    document.getElementsByClassName('sunset-value')[0].innerHTML = sunsetTimes[currentDaySelected];
    document.getElementsByClassName('temperature-value')[0].innerHTML = `${stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].airTemperature.sg} °C`;
    document.getElementsByClassName('water-temperature-value')[0].innerHTML = `${stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waterTemperature.sg} °C`;
    document.getElementsByClassName('precipitation-value')[0].innerHTML = `${stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].precipitation.sg} CM`;
    document.getElementsByClassName('swell-height-value')[0].innerHTML = `${stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].swellHeight.sg} M`;
    document.getElementsByClassName('wave-height-value')[0].innerHTML = `${stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waveHeight.sg} M`;
    document.getElementsByClassName('wave-direction-value')[0].innerHTML = `${stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waveDirection.sg} °`;
    document.getElementsByClassName('wind-speed-value')[0].innerHTML =`${stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].windSpeed.sg} KMPH`;
    document.getElementsByClassName('wind-direction-value')[0].innerHTML = `${stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].windDirection.sg} °`
}

function errorHandler(){ 
    document.getElementsByClassName('day-selector')[0].innerHTML = 
    '<h2 style="text-align: center;">Oops... there was a problem :(</h2>'; 
    document.getElementsByClassName('time-selector')[0].innerHTML = 
    '<h2 style="text-align: center;">We\'re really sorry, we\'re working on it.</h2>'; 
    document.getElementsByClassName('sunset-value')[0].innerHTML = 'unavailable'; 
        document.getElementsByClassName('temperature-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('water-temperature-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('precipitation-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('swell-height-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('wave-height-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('wave-direction-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('wind-direction-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('wind-speed-value')[0].innerHTML = 'unavailable';
}


var beachMap = L.map('beach-map').setView([beachDict[beachName][2],beachDict[beachName][3]], 7);
var Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 1,
    maxZoom: 20,
    ext: 'jpg'
}).addTo(beachMap);

var myIcon = L.icon({
    iconUrl: 'assets/images/surfboard.png', 
    iconSize: [96, 38],
    iconAnchor: [48, 19],
    popupAnchor: [0, 0]
});

var beachMarker = L.marker([lat, lng],{ 
    icon: myIcon, 
    title: beachName,
    alt: `surfboard icon showing ${beachName}`, 
    opacity: 1.0
    });
beachMarker.addTo(beachMap);

var beachPopup = L.popup();
beachPopup.setContent(beachName);
beachMarker.bindPopup(beachPopup);


