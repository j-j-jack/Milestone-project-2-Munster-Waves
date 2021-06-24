let beachName = document.getElementsByTagName('title')[0].innerHTML;

let beachDict = {
    'Doolin Point': [53.009012, -9.412298, 52.9045, -8.981], 
    'Doughmore': [52.806895, -9.499054, 52.9045, -8.981], 
    'Lahinch': [52.9338, -9.3499, 52.9045, -8.981], 
    'Spanish Point': [52.806895, -9.499054, 52.9045, -8.981],
    'Kilkee': [52.681758, -9.648977, 52.9045, -8.981],
    'Ballybunion': [52.498310, -9.412298, 52, -9.9],
    'Castlegregory': [52.281091, -10.057973, 52, -9.9],
    'Coumeenole': [52.100819, -10.464211, 52, -9.9],
    'Inch(Kerry)': [52.111918, -9.980602, 52, -9.9],
    'Ballinskelligs': [51.826181, -10.204100, 52, -9.9],
    'Long Strand': [51.560475, -8.992523, 51.9942, -8.7285],
    'Red Strand': [51.534426, -8.939241, 51.9942, -8.7285],
    'Inchydoney': [51.583101, -8.866123, 51.9942, -8.7285],
    'Garretstown': [51.631213, -8.622963, 51.9942, -8.7285],
    'Inch(Cork)': [51.786432, -8.183083, 51.9942, -8.7285],
    'Ardmore': [51.945847, -7.779053, 52.1944, -7.6228],
    'Bunmahon': [52.135120, -7.366740, 52.1944, -7.6228],
    'Perfect Wave': [52.127357, -7.259639, 52.1944, -7.6228],
    'Annestown': [52.129254, -7.294315, 52.1944, -7.6228],
    'Tramore': [52.148639, -7.131580, 52.1944, -7.6228]
};


//global scope variable
let lat = beachDict[beachName][0]; // coordinates of current beach using dictionary
let lng = beachDict[beachName][1];
let sunriseTimes = [];
let sunsetTimes = [];
let stormGlassData = {}; // empty object to be assigned once fetch is complete
let daysLargeScreen = document.getElementsByClassName('days-large-screen');
let dayDisplayedSmallScreen = document.getElementsByClassName('day-selector-center')[0];
let daysArray = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']; 
let datArray = [];
let firstDayInSelector;
/* when the fetchedSun variable is 7 (the sunrise sunset api needs to be contacted 7 times succsessfully 
for this to occur) and the fetchedStorm variable is true (the stormGlass api is contacted successfully)
    the page is given its default values and the functionality is turned on using the fetchComplete funciton
    */
let fetchedSun = 0;
let fetchedStorm = false;

//Api section of script

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
    dayOfWeek = daysArray[dayOfWeek]; 
    if(i == 0){
        // initialising contenct of small screen interface
        dayDisplayedSmallScreen.innerHTML = `${dayOfWeek}<br>${monthDate}`;
    }
    //populating the large screen interface
    daysLargeScreen[i].innerHTML = `${dayOfWeek}<br>${monthDate}`;

    let fullDate = `${year}-${month}-${monthDate}`;
    fetch(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=${fullDate}`).then((sunResponse) => sunResponse.json()).then((sunData) => {
    
    // getting the api information for the next seven days using the dictionary coordinates and the constructed date
            let sR = sunData.results.sunrise; // extracting the sunrise info from the api
            let sS = sunData.results.sunset; // extracting the sunset infor from the api
            sunriseTimes[i] = sR;
            sunsetTimes[i] = sS;   
            
            if(sunData.status=='OK'){ // checking status code supplied by api to check for errors
                fetchedSun++;
                fetchComplete(); // if the status ok: fetch was successful; run fetch complete
            }
            else{
                errorHandler(); // if the status gives an error code the errorHandler function is called
            }
        
}).catch(error => // if the fetch fails otherwise the error handler function is callled
    errorHandler());
}

// the code below rearranges the day array to have the current day first
for (let i = firstDayInSelector; i < (firstDayInSelector+7); i ++){
    daysArray.push(daysArray[i%7]);
}

for(let i = 0; i < 7; i ++){
    daysArray.shift();
}
// the code below is based on the example code provided by Stormglass api 
const params = 'airTemperature,waterTemperature,precipitation,swellHeight,waveHeight,waveDirection,windSpeed,windDirection';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
    headers: {
        'Authorization': '9a759cae-c394-11eb-9f40-0242ac130002-9a759d26-c394-11eb-9f40-0242ac130002'
    }
}).then((WeatherResponse) => WeatherResponse.json()).then((weatherData) => {
    stormGlassData = weatherData;
    if('errors' in weatherData){
        errorHandler(); // checking for errors in the object. 
    }
    else{
    fetchedStorm = true; // no errors: call the fetch complete object
    fetchComplete();
}
}).catch(error => 
    errorHandler()); // handling errors if the fetch fails completely

// variables needed for the code below
let currentDaySelected = 0;
let currentHourSelected = 12; // the weather will be shown for 12 o clock today by default
let timeReachedStart = false; // used to monitor if the time displayed on screen has reached the first time
let timeReachedEnd = false; // used to monitor if the time displayed on screen has reached the last time

let timesList = ['12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am',
                  '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm',
                   '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'];
let hoursLeft = document.getElementsByClassName('hours-left')[0];
let hoursRight = document.getElementsByClassName('hours-right')[0];
let dayLeft = document.getElementsByClassName('day-left')[0];
let dayRight = document.getElementsByClassName('day-right')[0];
let timeDisplayed = document.getElementsByClassName('time-selector-center')[0];
hoursLeft.addEventListener('click', function(){
    /*code for the arrows functioning as the user selects the time. If the user reaches the last time
    available the right arrow disappears and the pointer is disabled. */
        currentHourSelected--;
        if(timeReachedEnd){ // this is for turning the arrow back on after it was turned of by the other arrow
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
        setWeatherDataOnPage(); // clicking the arrows also calls the function for setting the weather on screen
});

hoursRight.addEventListener('click', function(){
    // same code as above but for the first time and the left arrow
    currentHourSelected++;
    if(timeReachedStart){ // this is for turning the arrow back on after it was turned of by the other arrow
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
    setWeatherDataOnPage(); // clicking the arrows also sets the weather data displayed on the page
});

dayLeft.addEventListener('click', function(){ // left day arrow on small screen
    /* this code works in a similar manner to the code in the time selector but for the days selection
    on the smaller size screens */
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
    setWeatherDataOnPage(); // changing the day also changes the weather data displayed on screen
});

dayRight.addEventListener('click', function(){ // same code but for right arrow
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

daysLargeScreen[0].style.borderBottom = '3px solid yellow'; // showing what day selected when document is opened

for(let i =0; i<7; i++){
    daysLargeScreen[i].addEventListener('click', function(){ //when user clicks a day on large screen
        for (let i = 0; i < 7; i ++){
            daysLargeScreen[i].style.borderBottom = 'none'; // removing highlighted day
        }
        currentDaySelected = this.dataset.day;
        daysLargeScreen[currentDaySelected].style.borderBottom = '4px solid yellow'; //higlighting day clicked for feedback to the user
        dayDisplayedSmallScreen.innerHTML = daysArray[currentDaySelected];
       
       /* the code below was added to update the smaller screen days interface even though it is not seen
       this is incase of a screen resize such as a table rotating */
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
        setWeatherDataOnPage(); // clicking the large screen days interface also updates the weather
    });
}
function fetchComplete(){
    if(fetchedSun == 7 && fetchedStorm == true){ // once fetch has worked correctly for both apis
        document.getElementsByClassName('day-selector')[0].style.pointerEvents = 'auto'; // allow the interface to be clicked
        document.getElementsByClassName('time-selector')[0].style.pointerEvents = 'auto';
        setWeatherDataOnPage(); 
        console.log(stormGlassData);// initialise the weather data 
    }
}
function setWeatherDataOnPage(){
    /* this function uses the objects fetched from the apis to fill the spans on the page. The sunrise 
    and sunset data are taken from the sunrise-sunset.org api and the rest are taken from the stormGlass api
    */
    document.getElementsByClassName('sunrise-value')[0].innerHTML = sunriseTimes[currentDaySelected];
    document.getElementsByClassName('sunset-value')[0].innerHTML = sunsetTimes[currentDaySelected];
    document.getElementsByClassName('temperature-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].airTemperature.sg;
    document.getElementsByClassName('water-temperature-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waterTemperature.sg;
    document.getElementsByClassName('precipitation-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].precipitation.sg;
    document.getElementsByClassName('swell-height-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].swellHeight.sg;
    document.getElementsByClassName('wave-height-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waveHeight.sg;
    document.getElementsByClassName('wave-direction-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].waveDirection.sg;
    document.getElementsByClassName('wind-direction-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].windSpeed.sg;
    document.getElementsByClassName('wind-speed-value')[0].innerHTML = stormGlassData.hours[(currentDaySelected*24)+currentHourSelected].windDirection.sg; 
}

function errorHandler(){ // this is called if the fetches fails or there is an error within the fetches
    document.getElementsByClassName('day-selector')[0].innerHTML = 
    '<h2 style="text-align: center;">Oops... there was a problem :(</h2>'; // fills the day selector with an error notification
    document.getElementsByClassName('time-selector')[0].innerHTML = 
    '<h2 style="text-align: center;">We\'re really sorry, we\'re working on it.</h2>'; //fills the time selector with the notification
    document.getElementsByClassName('sunset-value')[0].innerHTML = 'unavailable'; //sets data to show unavailable
        document.getElementsByClassName('temperature-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('water-temperature-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('precipitation-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('swell-height-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('wave-height-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('wave-direction-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('wind-direction-value')[0].innerHTML = 'unavailable';
        document.getElementsByClassName('wind-speed-value')[0].innerHTML = 'unavailable';
}
/* Map section of script------------------------------------------------------------------------ */

var beachMap = L.map('beach-map').setView([beachDict[beachName][2],beachDict[beachName][3]], 7);
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


