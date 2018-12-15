console.log("skr");

function changeCase(clicked_id){
    var id = clicked_id;
    console.log(id);
    switch (id) {
        case "b1":
            document.getElementById("showCase1").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            document.getElementById("showCase6").style.display = "none";
            document.getElementById("showCase7").style.display = "none";
            document.getElementById("showCase8").style.display = "none";
            break;
        case "b2":
            document.getElementById("showCase2").style.display = "block";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            document.getElementById("showCase6").style.display = "none";
            document.getElementById("showCase7").style.display = "none";
            document.getElementById("showCase8").style.display = "none";
            break;
        case "b3":
            document.getElementById("showCase3").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            document.getElementById("showCase6").style.display = "none";
            document.getElementById("showCase7").style.display = "none";
            document.getElementById("showCase8").style.display = "none";
            break;
        case "b4":
            document.getElementById("showCase4").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            document.getElementById("showCase6").style.display = "none";
            document.getElementById("showCase7").style.display = "none";
            document.getElementById("showCase8").style.display = "none";
            break;
        case "b5":
            document.getElementById("showCase5").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase6").style.display = "none";
            document.getElementById("showCase7").style.display = "none";
            document.getElementById("showCase8").style.display = "none";
            break;

        case "b6":
            document.getElementById("showCase6").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            document.getElementById("showCase7").style.display = "none";
            document.getElementById("showCase8").style.display = "none";
            break;

        case "b7":
            document.getElementById("showCase7").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            document.getElementById("showCase6").style.display = "none";
            document.getElementById("showCase8").style.display = "none";
            break;


        case "b8":
            document.getElementById("showCase8").style.display = "block";
            document.getElementById("showCase2").style.display = "none";
            document.getElementById("showCase3").style.display = "none";
            document.getElementById("showCase4").style.display = "none";
            document.getElementById("showCase1").style.display = "none";
            document.getElementById("showCase5").style.display = "none";
            document.getElementById("showCase6").style.display = "none";
            document.getElementById("showCase7").style.display = "none";
            break;
    }
}

function changeDays(clicked_id){
    var id = clicked_id+"Container";
    var btnId = clicked_id;
    console.log(id);
    var a = document.getElementsByClassName("dayContainer");
    var b = document.getElementsByClassName("days");
    for(var i = 0; i < a.length;i++) {
        if (a[i].id == id) {
            a[i].style.display = "block";
        } else {
            a[i].style.display = "none";
        }
    }

    for(var i = 0; i < b.length; i++){
        if(b[i].id == btnId){
            b[i].style.textDecoration = "line";
            b[i].style.color = "red";
        }else{
            b[i].style.textDecoration = "none";
            b[i].style.color = "black";
        }
    }

}

function changeConsequences(clicked_id) {

    var id = clicked_id + "Container";
    var btnId = clicked_id;

    var id = clicked_id+"Container";
    var btnId = clicked_id;

    var a = document.getElementsByClassName("concequencesContainer");
    var b = document.getElementsByClassName("consequences");
    console.log(b);
    for(var i = 0; i < a.length;i++) {
        if (a[i].id == id) {
            a[i].style.display = "block";
        } else {
            a[i].style.display = "none";
        }
    }

    for(var i = 0; i < b.length; i++){
        console.log(b[i]);
        if(b[i].id == btnId){
            b[i].style.textDecoration = "line";
            b[i].style.color = "red";
        }else{
            b[i].style.textDecoration = "none";
            b[i].style.color = "black";
        }
    }

}