document.onkeydown = checkKey;

var a = 0;
var b = 0;
var c = 0;
var x = 0;
var y = 0;
var z = 0;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        x = x + 1;
    }
    
    if (e.keyCode == '40') {
        y = y + 1;
    }
    
    if (e.keyCode == '37') {
        z = z + 1;
    }
    
    if (e.keyCode == '39') {
        a = a + 1;
    }
    
    if (e.keyCode == '65') {
        b = b + 1;
    }
    
    if (e.keyCode == '66') {
        c = c + 1;
    }
    
    if (x == 2 && y == 2 && z == 2 && a == 2 && b == 1 && c == 1) {
        top.location.href="sites.html";
    }

}

function showDate() {
    var now = new Date();
    var days = new Array('Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday');
    var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
    var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
    function fourdigits(number) {
        return (number < 1000) ? number + 1900 : number;
    }

    tnow=new Date();
    thour=now.getHours();
    tmin=now.getMinutes();
    tsec=now.getSeconds();

    if (tmin<=9) { tmin="0"+tmin; }
    if (tsec<=9) { tsec="0"+tsec; }
    if (thour<10) { thour="0"+thour; }

    today = days[now.getDay()] + ", " + date + " " + months[now.getMonth()] + ", " + (fourdigits(now.getYear())) + " - " + thour + ":" + tmin +":"+ tsec;
    document.getElementById("dateDiv").innerHTML = today;
}

setInterval("showDate()", 1000);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-109227996-1');