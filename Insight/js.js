/**
 * Created by Ronnie on 8/13/18.
 */
console.log("linked!");
var galleryView = true;
var splitView = false;


//==========For sliders========================
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

//=============For show/hide ===================


function galleryToggle(){
    console.log("aasdf");
    var g = document.getElementById("galleryContainer");
    var s = document.getElementById("splitContainer");
    var gBtn = document.getElementById("galleryViewBtn");
    var sBtn = document.getElementById("itemViewBtn");
    g.style.display = "block";
    s.style.display = "none";
    gBtn.style.color = "#f88643";
    gBtn.style.borderBottom = "#f88643 solid 3px";

    sBtn.style.color = "#606060";
    sBtn.style.borderBottom = "none";
}

function splitToggle(){
    var g = document.getElementById("galleryContainer");
    var s = document.getElementById("splitContainer");
    var gBtn = document.getElementById("galleryViewBtn");
    var sBtn = document.getElementById("itemViewBtn");
    g.style.display = "none";
    s.style.display = "block";
    sBtn.style.color = "#f88643";
    sBtn.style.borderBottom = "#f88643 solid 3px";

    gBtn.style.color = "#606060";
    gBtn.style.borderBottom = "none";
}

function colorToggle(){
    console.log("color");
    var c = document.getElementById("mShow");
    var i = document.getElementById("iShow");
    var l = document.getElementById("lShow");
    var cBtn = document.getElementById("material");
    var iBtn = document.getElementById("iconography");
    var lBtn = document.getElementById("layout");
    console.log(c);
    console.log(i);
    console.log(l);

    c.style.display = "block";
    i.style.display = "none";
    l.style.display = "none";

    cBtn.style.color = "#f88643";
    cBtn.style.borderBottom = "#f88643 solid 3px";

    iBtn.style.color = "#606060";
    iBtn.style.borderBottom = "none";

    lBtn.style.color = "#606060";
    lBtn.style.borderBottom = "none";
}

function iconographyToggle(){
    console.log("iconography");
    var c = document.getElementById("mShow");
    var i = document.getElementById("iShow");
    var l = document.getElementById("lShow");
    var cBtn = document.getElementById("material");
    var iBtn = document.getElementById("iconography");
    var lBtn = document.getElementById("layout");
    console.log(c);
    console.log(i);
    console.log(l);

    c.style.display = "none";
    i.style.display = "block";
    l.style.display = "none";

    iBtn.style.color = "#f88643";
    iBtn.style.borderBottom = "#f88643 solid 3px";

    cBtn.style.color = "#606060";
    cBtn.style.borderBottom = "none";

    lBtn.style.color = "#606060";
    lBtn.style.borderBottom = "none";
}

function layoutToggle(){
    console.log("layout");
    var c = document.getElementById("mShow");
    var i = document.getElementById("iShow");
    var l = document.getElementById("lShow");
    console.log(c);
    console.log(i);
    console.log(l);
    var cBtn = document.getElementById("material");
    var iBtn = document.getElementById("iconography");
    var lBtn = document.getElementById("layout");

    c.style.display = "none";
    i.style.display = "none";
    l.style.display = "block";

    lBtn.style.color = "#f88643";
    lBtn.style.borderBottom = "#f88643 solid 3px";

    cBtn.style.color = "#606060";
    cBtn.style.borderBottom = "none";

    iBtn.style.color = "#606060";
    iBtn.style.borderBottom = "none";
}