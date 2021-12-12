getLocation();
const x = document.getElementById("Temp");

async function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}

async function showPosition(position) {
    var url1="https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=dc7c5a85257f3769a97f58a204690696&units=metric";

  const api_url1=url1;
  const response1= await fetch(api_url1);
  const data1= await response1.json();

  document.getElementById("Temp").innerHTML= data1.main.temp;
  document.getElementById("cName").innerHTML= data1.name;
  document.getElementById("humid").innerHTML = data1.main.humidity;
  document.getElementById("wind").innerHTML = Math.round((data1.wind.speed)*3.6);
}


(function () {

    var clockElement = document.getElementById( "Time" );

  
    function updateClock ( clock ) {
        
        // clock.innerHTML = new Date().toLocaleTimeString();

    const d = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById("date").innerHTML = d.toLocaleDateString( undefined, options);
    document.getElementById("date2").innerHTML = d.toLocaleDateString( undefined, options);
    document.getElementById("weekDay").innerHTML = d.toLocaleDateString(undefined, { weekday: 'long' });

    var zone = "AM";
    const Hour = d.getHours();
    var H = Hour;
    if(H == 0) H = 12;
    else if(H > 12) {
        H = (H-12);
        zone = "PM";
    }
    clock.innerHTML = String(H)+" : "+String(d.getMinutes())+" "+String(zone);

    }
  
    setInterval(function () {
        updateClock( clockElement );
    }, 1000);
  
  }());
  

function bgchange() {

    const body = document.getElementById("bdy");
    var cc = body.style.backgroundColor;
    if( cc == "rgb(241, 242, 255)"){
        body.style.backgroundColor = "rgb(11, 16, 33)";
    }
    else{
        body.style.backgroundColor = "rgb(241, 242, 255)";
    }
}


var input = document.getElementById("search_bar");
input.addEventListener("keyup", function(event) {
if (event.keyCode === 13) {
event.preventDefault();
document.getElementById("search_btn").click();
}
});
async function fun() {
    
}

async function search() {
var str= document.getElementById("search_bar").value;


var key = "&appid=fc49d4baf1e6660f1b18f3a470f19c15";
var url = "https://api.openweathermap.org/data/2.5/weather?q="+str+"&units=metric"+key;

const callurl = url;

const response = await fetch(callurl);
const data = await response.json();

document.getElementById("Temp").innerHTML = data.main.temp;
document.getElementById("cName").innerHTML = data.name;
document.getElementById("humid").innerHTML = data.main.humidity;
document.getElementById("wind").innerHTML = Math.round((data.wind.speed)*3.6);
}