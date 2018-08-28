function show() {

}

function changeCase(clicked_id){
    var id = clicked_id;
    switch (id) {
        case "b1":
            document.getElementById("showCase1").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            break;
        case "b2":
            document.getElementById("showCase2").style.display = "block";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            break;
        case "b3":
            document.getElementById("showCase3").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            break;
        case "b4":
            document.getElementById("showCase4").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            break;
        case "b5":
            document.getElementById("showCase5").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            break;
    }
}
