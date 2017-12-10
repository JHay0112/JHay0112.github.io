document.onkeydown = checkKey;

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var f = 0;
var g = 0;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        d = d + 1;
    }
    
    if (e.keyCode == '40') {
        f = f + 1;
    }
    
    if (e.keyCode == '37') {
        g = g + 1;
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
    
    if (d == 2 && f == 2 && g == 2 && a == 2 && b == 1 && c == 1) {
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

var facts = [
    'I need ideas for more facts',
    'No trees were harmed in the making of this website. However, a large number of electrons were seriously inconvenienced',
    'This website is \'skilfully\' crafted out of HTML, CSS and JS, no drag and drop website creators or Jekyll (Admittedly it would look better with drag and drop or Jekyll)',
    'If you click on the advertisments something secret will happen',
    '<p class="clear">This is a secret message</p>',
    'You can use anyone\'s email in the "Contact us here" section!',
    'Please join the mailing list (I\'m desperate)',
    '<a class="blue" href="tc.html" style="float: right;">Terms and Conditions</a>There are Terms and Conditions for this website, better go read them, just click on that button to the right',
    'You can suggest more facts in the "Contact us here" section, don\'t worry I won\'t credit you for them!'
]

function newFact() {
    var factNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById('funFact').innerHTML = facts[factNumber];
}

var facts2 = [
    'I need ideas for more facts',
    'No trees were harmed in the making of this website. However, a large number of electrons were seriously inconvenienced',
    'This website is \'skilfully\' crafted out of HTML, CSS and JS, no drag and drop website creators or Jekyll (Admittedly it would look better with drag and drop or Jekyll)',
    'If you click on the advertisments something secret will happen',
    'You can use anyone\'s email in the "Contact us here" section!',
    'Please join the mailing list (I\'m desperate)',
    '<a class="blue" href="tc.html" style="float: right;">Terms and Conditions</a>There are Terms and Conditions for this website, better go read them, just click on that button to the right',
    'You can suggest more facts in the "Contact us here" section, don\'t worry I won\'t credit you for them!'
]

function reFact() {
    var fact2Number = Math.floor(Math.random() * (facts2.length));
    document.getElementById('funFact').innerHTML = facts2[fact2Number];
}

var banners = [
    '<img src="images/banner1.JPG" class="banner" alt="Aoraki/Mt Cook - Jordan Hay (Own Work)" title="Aoraki/Mt Cook - Jordan Hay (Own Work)">',
    '<img src="images/banner2.jpg" class="banner" alt="Hooker Valley - Jordan Hay (Own Work)" title="Hooker Valley - Jordan Hay (Own Work)">',
    '<img src="images/banner3.jpg" class="banner" alt="Hooker Valley - Jordan Hay (Own Work)" title="Hooker Valley - Jordan Hay (Own Work)">',
    '<img src="images/banner4.jpg" class="banner" alt="Mt Sefton & The Footstool - Jordan Hay (Own Work)" title="Mt Sefton & The Footstool - Jordan Hay (Own Work)">',
    '<img src="images/banner5.jpg" class="banner" alt="Hooker Lake - Jordan Hay (Own Work)" title="Hooker Lake - Jordan Hay (Own Work)">'
]

function newBanner() {
    var bannerNumber = Math.floor(Math.random() * (banners.length));
    document.getElementById('banner').innerHTML = banners[bannerNumber];
}