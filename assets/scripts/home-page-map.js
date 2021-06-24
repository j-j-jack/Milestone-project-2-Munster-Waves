 // targeting the paths in the svg with the class name of cork

let cork = document.getElementsByClassName('cork');
for(let i in cork){
    if(cork[i].nodeName == 'path' || cork[i].nodeName == 'text')
    {
        cork[i].style.cursor = 'pointer';
	    cork[i].addEventListener('mouseover', function(){ // adds a mouseover event listener to each path with the class of cork
            for (let i in cork){
                if(cork[i].nodeName == 'path')
                {
                    cork[i].style.fill = 'yellow'; // when the mouse is over cork it lights up in yellow
                }
            }
	    });
    }
}
	
for(let i in cork){
    if(cork[i].nodeName == 'path' || cork[i].nodeName == 'text')
    {
	    cork[i].addEventListener('mouseleave', function(){
            for (let i in cork){
                if(cork[i].nodeName == 'path')
                {
                    cork[i].style.fill = 'rgb(255, 0, 76)'; // when the mouse leaves the cork paths the colours revert to red
                }
            }
	    });
    }
}

for(let i in cork){
    if(cork[i].nodeName == 'path' || cork[i].nodeName == 'text')
    {
	    cork[i].addEventListener('click', function(){
            window.location.href = "cork.html";
	    });
    }
}
	
let kerry = document.getElementsByClassName('kerry'); // the same task was completed for the other counties

for(let i in kerry){
    if(kerry[i].nodeName == 'path' || kerry[i].nodeName == 'text')
    {
        kerry[i].style.cursor = 'pointer';
	    kerry[i].addEventListener('mouseover', function(){
            for (let i in kerry){
                if(kerry[i].nodeName == 'path')
                {
                    kerry[i].style.fill = 'yellow';
                }
            }
	    });
    }
}
	
for(let i in kerry){
    if(kerry[i].nodeName == 'path' || kerry[i].nodeName == 'text')
    {
	    kerry[i].addEventListener('mouseleave', function(){
            for (let i in kerry){
                if(kerry[i].nodeName == 'path')
                {
                    kerry[i].style.fill = 'rgb(255, 0, 76)';
                }
            }
	    });
    }
}
	
for(let i in kerry){
    if(kerry[i].nodeName == 'path' || kerry[i].nodeName == 'text')
    {
	    kerry[i].addEventListener('click', function(){
            window.location.href = "kerry.html";
	    });
    }
}

let clare = document.getElementsByClassName('clare');

for(let i in clare){
    if(clare[i].nodeName == 'path' || clare[i].nodeName == 'text')
    {
        clare[i].style.cursor = 'pointer';
	    clare[i].addEventListener('mouseover', function(){
            for (let i in clare){
                if(clare[i].nodeName == 'path')
                {
                    clare[i].style.fill = 'yellow';
                    clare[i].style.cursor = 'pointer';
                }
            }
	    });
    }
}
	
for(let i in clare){
    if(clare[i].nodeName == 'path' || clare[i].nodeName == 'text')
    {
	    clare[i].addEventListener('mouseleave', function(){
            for (let i in clare){
                if(clare[i].nodeName == 'path')
                {
                    clare[i].style.fill = 'rgb(255, 0, 76)';
                }
            }
	    });
    }
}

for(let i in clare){
    if(clare[i].nodeName == 'path' || clare[i].nodeName == 'text')
    {
	    clare[i].addEventListener('click', function(){
            window.location.href = "clare.html";
	    });
    }
}

let waterford = document.getElementsByClassName('waterford');

for(let i in waterford){
    if(waterford[i].nodeName == 'path' || waterford[i].nodeName == 'text')
    {
        waterford[i].style.cursor = 'pointer';
	    waterford[i].addEventListener('mouseover', function(){
            for (let i in waterford){
                if(waterford[i].nodeName == 'path')
                {
                    waterford[i].style.fill = 'yellow';
                    waterford[i].style.cursor = 'pointer';
                }
            }
	    });
    }
}

for(let i in waterford){
    if(waterford[i].nodeName == 'path' || waterford[i].nodeName == 'text')
    {
	    waterford[i].addEventListener('mouseleave', function(){
            for (let i in waterford){
                if(waterford[i].nodeName == 'path')
                {
                    waterford[i].style.fill = 'rgb(255, 0, 76)';
                }
            }
	    });
    }
}

for(let i in waterford){
    if(waterford[i].nodeName == 'path' || waterford[i].nodeName == 'text')
    {
	    waterford[i].addEventListener('click', function(){
            window.location.href = "waterford.html";
	    });
    }
}

let limerick = document.getElementsByClassName('limerick');

for(let i in limerick){
    if(limerick[i].nodeName == 'path' || limerick[i].nodeName == 'text')
    {
	    limerick[i].addEventListener('mouseover', function(){
            for (let i in limerick){
                    document.getElementsByClassName('no-surfing-notification')[0].style.visibility = 'visible';
            }
	    });
    }
}

for(let i in limerick){
    if(limerick[i].nodeName == 'path' || limerick[i].nodeName == 'text')
    {
	    limerick[i].addEventListener('mouseleave', function(){
            for (let i in limerick){
                    document.getElementsByClassName('no-surfing-notification')[0].style.visibility = 'hidden';
            }
	    });
    }
}

let tipperary = document.getElementsByClassName('tipperary');

for(let i in tipperary){
    if(tipperary[i].nodeName == 'path' || tipperary[i].nodeName == 'text')
    {
	    tipperary[i].addEventListener('mouseover', function(){
            for (let i in tipperary){
                    document.getElementsByClassName('no-surfing-notification')[0].style.visibility = 'visible';
            }
	    });
    }
}

for(let i in tipperary){
    if(tipperary[i].nodeName == 'path' || tipperary[i].nodeName == 'text')
    {
	    tipperary[i].addEventListener('mouseleave', function(){
            for (let i in tipperary){
                    document.getElementsByClassName('no-surfing-notification')[0].style.visibility = 'hidden';
            }
	    });
    }
}

	


let placeNameColor = 'blue';

let doolin = document.getElementsByClassName('doolin');
for(let i in doolin){
    if(doolin[i].nodeName == 'ellipse' || doolin[i].nodeName == 'text')
    {
	    doolin[i].addEventListener('mouseover', function(){
            doolin[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            doolin[0].style.cursor="pointer"
            doolin[1].style.fill=placeNameColor; 
            doolin[1].style.cursor="pointer";
	    });
    }
}

for(let i in doolin){
    if(doolin[i].nodeName == 'ellipse' || doolin[i].nodeName == 'text')
    {
	    doolin[i].addEventListener('mouseleave', function(){
            doolin[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            doolin[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in doolin){
    if(doolin[i].nodeName == 'ellipse' || doolin[i].nodeName == 'text')
    {
	    doolin[i].addEventListener('click', function(){
            window.location.href = "doolin-point.html";
	    });
    }
}

let doughmore= document.getElementsByClassName('doughmore');
for(let i in doolin){
    if(doughmore[i].nodeName == 'ellipse' || doughmore[i].nodeName == 'text')
    {
	    doughmore[i].addEventListener('mouseover', function(){
            doughmore[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            doughmore[0].style.cursor="pointer"
            doughmore[1].style.fill=placeNameColor; 
            doughmore[1].style.cursor="pointer";
	    });
    }
}

for(let i in doughmore){
    if(doughmore[i].nodeName == 'ellipse' || doughmore[i].nodeName == 'text')
    {
	    doughmore[i].addEventListener('mouseleave', function(){
            doughmore[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            doughmore[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in doughmore){
    if(doughmore[i].nodeName == 'ellipse' || doughmore[i].nodeName == 'text')
    {
	    doughmore[i].addEventListener('click', function(){
            window.location.href = "doughmore.html";
	    });
    }
}

let lahinch= document.getElementsByClassName('lahinch');
for(let i in lahinch){
    if(lahinch[i].nodeName == 'ellipse' || lahinch[i].nodeName == 'text')
    {
	    lahinch[i].addEventListener('mouseover', function(){
            lahinch[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            lahinch[0].style.cursor="pointer"
            lahinch[1].style.fill=placeNameColor; 
            lahinch[1].style.cursor="pointer";
	    });
    }
}

for(let i in lahinch){
    if(lahinch[i].nodeName == 'ellipse' || lahinch[i].nodeName == 'text')
    {
	    lahinch[i].addEventListener('mouseleave', function(){
            lahinch[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            lahinch[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in lahinch){
    if(lahinch[i].nodeName == 'ellipse' || lahinch[i].nodeName == 'text')
    {
	    lahinch[i].addEventListener('click', function(){
            window.location.href = "lahinch.html";
	    });
    }
}

let spanishPoint= document.getElementsByClassName('spanish-point');
for(let i in spanishPoint){
    if(spanishPoint[i].nodeName == 'ellipse' || spanishPoint[i].nodeName == 'text')
    {
	    spanishPoint[i].addEventListener('mouseover', function(){
            spanishPoint[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            spanishPoint[0].style.cursor="pointer"
            spanishPoint[1].style.fill=placeNameColor; 
            spanishPoint[1].style.cursor="pointer";
	    });
    }
}

for(let i in spanishPoint){
    if(spanishPoint[i].nodeName == 'ellipse' || spanishPoint[i].nodeName == 'text')
    {
	    spanishPoint[i].addEventListener('mouseleave', function(){
            spanishPoint[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            spanishPoint[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in spanishPoint){
    if(spanishPoint[i].nodeName == 'ellipse' || spanishPoint[i].nodeName == 'text')
    {
	    spanishPoint[i].addEventListener('click', function(){
            window.location.href = "spanish-point.html";
	    });
    }
}

let kilkee= document.getElementsByClassName('kilkee');
for(let i in kilkee){
    if(kilkee[i].nodeName == 'ellipse' || kilkee[i].nodeName == 'text')
    {
	    kilkee[i].addEventListener('mouseover', function(){
            kilkee[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            kilkee[0].style.cursor="pointer"
            kilkee[1].style.fill=placeNameColor; 
            kilkee[1].style.cursor="pointer";
	    });
    }
}

for(let i in kilkee){
    if(kilkee[i].nodeName == 'ellipse' || kilkee[i].nodeName == 'text')
    {
	    kilkee[i].addEventListener('mouseleave', function(){
            kilkee[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            kilkee[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in kilkee){
    if(kilkee[i].nodeName == 'ellipse' || kilkee[i].nodeName == 'text')
    {
	    kilkee[i].addEventListener('click', function(){
            window.location.href = "kilkee.html";
	    });
    }
}

let ballybunion= document.getElementsByClassName('ballybunion');
for(let i in ballybunion){
    if(ballybunion[i].nodeName == 'ellipse' || ballybunion[i].nodeName == 'text')
    {
	    ballybunion[i].addEventListener('mouseover', function(){
            ballybunion[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            ballybunion[0].style.cursor="pointer"
            ballybunion[1].style.fill=placeNameColor; 
            ballybunion[1].style.cursor="pointer";
	    });
    }
}

for(let i in ballybunion){
    if(ballybunion[i].nodeName == 'ellipse' || ballybunion[i].nodeName == 'text')
    {
	    ballybunion[i].addEventListener('mouseleave', function(){
            ballybunion[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            ballybunion[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in ballybunion){
    if(ballybunion[i].nodeName == 'ellipse' || ballybunion[i].nodeName == 'text')
    {
	    ballybunion[i].addEventListener('click', function(){
            window.location.href = "ballybunion.html";
	    });
    }
}

let castlegregory= document.getElementsByClassName('castlegregory');
for(let i in castlegregory){
    if(castlegregory[i].nodeName == 'ellipse' || castlegregory[i].nodeName == 'text')
    {
	    castlegregory[i].addEventListener('mouseover', function(){
            castlegregory[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            castlegregory[0].style.cursor="pointer"
            castlegregory[1].style.fill=placeNameColor; 
            castlegregory[1].style.cursor="pointer"; 
	    });
    }
}

for(let i in castlegregory){
    if(castlegregory[i].nodeName == 'ellipse' || castlegregory[i].nodeName == 'text')
    {
	    castlegregory[i].addEventListener('mouseleave', function(){
            castlegregory[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            castlegregory[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in castlegregory){
    if(castlegregory[i].nodeName == 'ellipse' || castlegregory[i].nodeName == 'text')
    {
	    castlegregory[i].addEventListener('click', function(){
            window.location.href = "castlegregory.html";
	    });
    }
}

let coumeenole= document.getElementsByClassName('coumeenole');
for(let i in coumeenole){
    if(coumeenole[i].nodeName == 'ellipse' || coumeenole[i].nodeName == 'text')
    {
	    coumeenole[i].addEventListener('mouseover', function(){
            coumeenole[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            coumeenole[0].style.cursor="pointer"
            coumeenole[1].style.fill=placeNameColor; 
            coumeenole[1].style.cursor="pointer";
	    });
    }
}

for(let i in coumeenole){
    if(coumeenole[i].nodeName == 'ellipse' || coumeenole[i].nodeName == 'text')
    {
	    coumeenole[i].addEventListener('mouseleave', function(){
            coumeenole[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            coumeenole[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in coumeenole){
    if(coumeenole[i].nodeName == 'ellipse' || coumeenole[i].nodeName == 'text')
    {
	    coumeenole[i].addEventListener('click', function(){
            window.location.href = "coumeenole.html";
	    });
    }
}

let inchKerry= document.getElementsByClassName('inch-kerry');
for(let i in inchKerry){
    if(inchKerry[i].nodeName == 'ellipse' || inchKerry[i].nodeName == 'text')
    {
	    inchKerry[i].addEventListener('mouseover', function(){
            inchKerry[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            inchKerry[0].style.cursor="pointer"
            inchKerry[1].style.fill=placeNameColor; 
            inchKerry[1].style.cursor="pointer";
	    });
    }
}

for(let i in inchKerry){
    if(inchKerry[i].nodeName == 'ellipse' || inchKerry[i].nodeName == 'text')
    {
	    inchKerry[i].addEventListener('mouseleave', function(){
            inchKerry[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            inchKerry[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in inchKerry){
    if(inchKerry[i].nodeName == 'ellipse' || inchKerry[i].nodeName == 'text')
    {
	    inchKerry[i].addEventListener('click', function(){
            window.location.href = "inch-kerry.html";
	    });
    }
}

let ballinskelligs= document.getElementsByClassName('ballinskelligs');
for(let i in ballinskelligs){
    if(ballinskelligs[i].nodeName == 'ellipse' || ballinskelligs[i].nodeName == 'text')
    {
	    ballinskelligs[i].addEventListener('mouseover', function(){
            ballinskelligs[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            ballinskelligs[0].style.cursor="pointer"
            ballinskelligs[1].style.fill=placeNameColor; 
            ballinskelligs[1].style.cursor="pointer";
	    });
    }
}

for(let i in ballinskelligs){
    if(ballinskelligs[i].nodeName == 'ellipse' || ballinskelligs[i].nodeName == 'text')
    {
	    ballinskelligs[i].addEventListener('mouseleave', function(){
            ballinskelligs[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            ballinskelligs[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in ballinskelligs){
    if(ballinskelligs[i].nodeName == 'ellipse' || ballinskelligs[i].nodeName == 'text')
    {
	    ballinskelligs[i].addEventListener('click', function(){
            window.location.href = "ballinskelligs.html";
	    });
    }
}

let longStrand= document.getElementsByClassName('long-strand');
for(let i in longStrand){
    if(longStrand[i].nodeName == 'ellipse' || longStrand[i].nodeName == 'text')
    {
	    longStrand[i].addEventListener('mouseover', function(){
            longStrand[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            longStrand[0].style.cursor="pointer"
            longStrand[1].style.fill=placeNameColor; 
            longStrand[1].style.cursor="pointer"; 
	    });
    }
}

for(let i in longStrand){
    if(longStrand[i].nodeName == 'ellipse' || longStrand[i].nodeName == 'text')
    {
	    longStrand[i].addEventListener('mouseleave', function(){
            longStrand[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            longStrand[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in longStrand){
    if(longStrand[i].nodeName == 'ellipse' || longStrand[i].nodeName == 'text')
    {
	    longStrand[i].addEventListener('click', function(){
            window.location.href = "long-strand.html";
	    });
    }
}

let redStrand= document.getElementsByClassName('red-strand');
for(let i in redStrand){
    if(redStrand[i].nodeName == 'ellipse' || redStrand[i].nodeName == 'text')
    {
	    redStrand[i].addEventListener('mouseover', function(){
            redStrand[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            redStrand[0].style.cursor="pointer"
            redStrand[1].style.fill=placeNameColor; 
            redStrand[1].style.cursor="pointer"; 
	    });
    }
}

for(let i in redStrand){
    if(redStrand[i].nodeName == 'ellipse' || redStrand[i].nodeName == 'text')
    {
	    redStrand[i].addEventListener('mouseleave', function(){
            redStrand[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            redStrand[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in redStrand){
    if(redStrand[i].nodeName == 'ellipse' || redStrand[i].nodeName == 'text')
    {
	    redStrand[i].addEventListener('click', function(){
            window.location.href = "red-strand.html";
	    });
    }
}

let inchydoney= document.getElementsByClassName('inchydoney');
for(let i in inchydoney){
    if(inchydoney[i].nodeName == 'ellipse' || inchydoney[i].nodeName == 'text')
    {
	    inchydoney[i].addEventListener('mouseover', function(){
            inchydoney[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            inchydoney[0].style.cursor="pointer"
            inchydoney[1].style.fill=placeNameColor; 
            inchydoney[1].style.cursor="pointer"; 
	    });
    }
}

for(let i in inchydoney){
    if(inchydoney[i].nodeName == 'ellipse' || inchydoney[i].nodeName == 'text')
    {
	    inchydoney[i].addEventListener('mouseleave', function(){
            inchydoney[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            inchydoney[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in inchydoney){
    if(inchydoney[i].nodeName == 'ellipse' || inchydoney[i].nodeName == 'text')
    {
	    inchydoney[i].addEventListener('click', function(){
            window.location.href = "inchydoney.html";
	    });
    }
}

let garretstown= document.getElementsByClassName('garretstown');
for(let i in garretstown){
    if(garretstown[i].nodeName == 'ellipse' || garretstown[i].nodeName == 'text')
    {
	    garretstown[i].addEventListener('mouseover', function(){
            garretstown[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            garretstown[0].style.cursor="pointer"
            garretstown[1].style.fill=placeNameColor; 
            garretstown[1].style.cursor="pointer";
	    });
    }
}

for(let i in garretstown){
    if(garretstown[i].nodeName == 'ellipse' || garretstown[i].nodeName == 'text')
    {
	    garretstown[i].addEventListener('mouseleave', function(){
            garretstown[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            garretstown[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in garretstown){
    if(garretstown[i].nodeName == 'ellipse' || garretstown[i].nodeName == 'text')
    {
	    garretstown[i].addEventListener('click', function(){
            window.location.href = "garretstown.html";
	    });
    }
}

let inchCork= document.getElementsByClassName('inch-cork');
for(let i in inchCork){
    if(inchCork[i].nodeName == 'ellipse' || inchCork[i].nodeName == 'text')
    {
	    inchCork[i].addEventListener('mouseover', function(){
            inchCork[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            inchCork[0].style.cursor="pointer"
            inchCork[1].style.fill=placeNameColor; 
            inchCork[1].style.cursor="pointer";
	    });
    }
}

for(let i in inchCork){
    if(inchCork[i].nodeName == 'ellipse' || inchCork[i].nodeName == 'text')
    {
	    inchCork[i].addEventListener('mouseleave', function(){
            inchCork[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            inchCork[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in inchCork){
    if(inchCork[i].nodeName == 'ellipse' || inchCork[i].nodeName == 'text')
    {
	    inchCork[i].addEventListener('click', function(){
            window.location.href = "inch-cork.html";
	    });
    }
}

let ardmore= document.getElementsByClassName('ardmore');
for(let i in ardmore){
    if(ardmore[i].nodeName == 'ellipse' || ardmore[i].nodeName == 'text')
    {
	    ardmore[i].addEventListener('mouseover', function(){
            ardmore[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            ardmore[0].style.cursor="pointer"
            ardmore[1].style.fill=placeNameColor; 
            ardmore[1].style.cursor="pointer";
	    });
    }
}

for(let i in ardmore){
    if(ardmore[i].nodeName == 'ellipse' || ardmore[i].nodeName == 'text')
    {
	    ardmore[i].addEventListener('mouseleave', function(){
            ardmore[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            ardmore[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in ardmore){
    if(ardmore[i].nodeName == 'ellipse' || ardmore[i].nodeName == 'text')
    {
	    ardmore[i].addEventListener('click', function(){
            window.location.href = "ardmore.html";
	    });
    }
}

let bunmahon= document.getElementsByClassName('bunmahon');
for(let i in bunmahon){
    if(bunmahon[i].nodeName == 'ellipse' || bunmahon[i].nodeName == 'text')
    {
	    bunmahon[i].addEventListener('mouseover', function(){
            bunmahon[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            bunmahon[0].style.cursor="pointer"
            bunmahon[1].style.fill=placeNameColor; 
            bunmahon[1].style.cursor="pointer";
	    });
    }
}

for(let i in bunmahon){
    if(bunmahon[i].nodeName == 'ellipse' || bunmahon[i].nodeName == 'text')
    {
	    bunmahon[i].addEventListener('mouseleave', function(){
            bunmahon[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            bunmahon[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in bunmahon){
    if(bunmahon[i].nodeName == 'ellipse' || bunmahon[i].nodeName == 'text')
    {
	    bunmahon[i].addEventListener('click', function(){
            window.location.href = "bunmahon.html";
	    });
    }
}

let perfectWave= document.getElementsByClassName('perfect-wave');
for(let i in perfectWave){
    if(perfectWave[i].nodeName == 'ellipse' || perfectWave[i].nodeName == 'text')
    {
	    perfectWave[i].addEventListener('mouseover', function(){
            perfectWave[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            perfectWave[0].style.cursor="pointer"
            perfectWave[1].style.fill=placeNameColor; 
            perfectWave[1].style.cursor="pointer";
	    });
    }
}

for(let i in perfectWave){
    if(perfectWave[i].nodeName == 'ellipse' || perfectWave[i].nodeName == 'text')
    {
	    perfectWave[i].addEventListener('mouseleave', function(){
            perfectWave[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            perfectWave[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in perfectWave){
    if(perfectWave[i].nodeName == 'ellipse' || perfectWave[i].nodeName == 'text')
    {
	    perfectWave[i].addEventListener('click', function(){
            window.location.href = "perfect-wave.html";
	    });
    }
}

let annestown= document.getElementsByClassName('annestown');
for(let i in annestown){
    if(annestown[i].nodeName == 'ellipse' || annestown[i].nodeName == 'text')
    {
	    annestown[i].addEventListener('mouseover', function(){
            annestown[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            annestown[0].style.cursor="pointer"
            annestown[1].style.fill=placeNameColor; 
            annestown[1].style.cursor="pointer";
	    });
    }
}

for(let i in annestown){
    if(annestown[i].nodeName == 'ellipse' || annestown[i].nodeName == 'text')
    {
	    annestown[i].addEventListener('mouseleave', function(){
            annestown[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            annestown[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in annestown){
    if(annestown[i].nodeName == 'ellipse' || annestown[i].nodeName == 'text')
    {
	    annestown[i].addEventListener('click', function(){
            window.location.href = "annestown.html";
	    });
    }
}

let tramore= document.getElementsByClassName('tramore');
for(let i in tramore){
    if(tramore[i].nodeName == 'ellipse' || tramore[i].nodeName == 'text')
    {
	    tramore[i].addEventListener('mouseover', function(){
            tramore[0].style="paint-order: stroke markers; fill: url(#alt-surfboard-gradient);"
            tramore[0].style.cursor="pointer"
            tramore[1].style.fill=placeNameColor; 
            tramore[1].style.cursor="pointer";
	    });
    }
}

for(let i in tramore){
    if(tramore[i].nodeName == 'ellipse' || tramore[i].nodeName == 'text')
    {
	    tramore[i].addEventListener('mouseleave', function(){
            tramore[0].style="paint-order: stroke markers; fill: url(#gradient-2);"
            tramore[1].style.fill='rgb(51, 51, 51)'; 
	    });
    }
}

for(let i in tramore){
    if(tramore[i].nodeName == 'ellipse' || tramore[i].nodeName == 'text')
    {
	    tramore[i].addEventListener('click', function(){
            window.location.href = "tramore.html";
	    });
    }
}

/* 
The concept has been proven to work so can be included in the project. There needs to be surfboards 
edited into the svg which represent the individual beaches. These will be targeted using the 
getElementById function in the script. The svg may also require additional styling.
*/