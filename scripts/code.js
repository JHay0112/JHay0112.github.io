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

var banners = [
    '<img src="images/banners/banner1.jpg" class="banner">',
    '<img src="images/banners/banner2.jpg" class="banner">',
    '<img src="images/banners/banner3.jpg" class="banner">'
]

function newBanner() {
    var bannerNumber = Math.floor(Math.random() * (banners.length));
    document.getElementById('banner').innerHTML = banners[bannerNumber];
}

function searchFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("searchTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        } 
    }
}