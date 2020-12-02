var hourStick = document.querySelector('.hour');
var minuteStick = document.querySelector('.minute');
var secondStick = document.querySelector('.second');

var ampm="AM";

setInterval(function rotation()
{
    var currenDate=new Date();

    var currentHor = currenDate.getHours();
    var currentMin = currenDate.getMinutes();
    var currentSec = currenDate.getSeconds();

    var secondsFr = currentSec / 60;
    var minuteFr = (secondsFr + currentMin) / 60;
    var hoursFr = (minuteFr+currentHor) / 12;

    var secondRotate = secondsFr * 360;
    var minuteRotate = minuteFr * 360;
    var hoursRotate = hoursFr * 360;

    secondStick.style.transform =`rotate(${secondRotate}deg)`;
    minuteStick.style.transform=`rotate(${minuteRotate}deg)`;
    hourStick.style.transform= `rotate(${hoursRotate}deg)`;

    //Digital Clock block....

    currentHor=check(currentHor);
    currentMin=check(currentMin);
    currentSec=check(currentSec);
    if(currentHor>12)
    {
        currentHor-=12;
        ampm= "PM";
    }
    if(currentHor==0)
    {
        currentHor=12;
        ampm="AM";
    }
    document.getElementById("demo").innerHTML=currentHor +" : " + currentMin + " :  " + currentSec+ "  " +ampm;
    
    function check(t) {
        if (t < 10) {
            t = "0" + t;
        }
        return t;
      }
    
},1000);