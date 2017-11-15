document.onkeydown = checkKey;

var x = 0;
var y = 0;
var z = 0;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '88') {
        x = x + 1;
    }
    
    if (e.keyCode == '89') {
        y = y + 1;
    }
    
    if (e.keyCode == '90') {
        z = z + 1;
    }
    
    if (x == 5 && y == 5 && z == 5) {
        top.location.href="sites.html";
    }
    
    if (x > 5||y > 5||z > 5) {
        top.location.href="index.html";
    }

}