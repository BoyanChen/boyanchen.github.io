var runHeroPage = {
    name: "Run! Hero",
    linkName:"runHeroPage",
    intro:"Mobile Fitness Application",
    skill:"Gamification/UI/UX Design",
    date:"5/12/2017",
    status:"Done."
};

var muExplorePage = {
    name:"MU Explore",
    linkName:"muExplore",
    intro:"Mobile Fitness Application",
    skill:"Gamification/UI/UX Design",
    date:"5/12/2017",
    status:"Done."
};

var searchPage = {
    name:"Search",
    linkName:"search",
    intro:"Mobile Fitness Application",
    skill:"Gamification/UI/UX Design",
    date:"5/12/2017",
    status:"Done."
};

var hangmanPage = {
    name:"Hangman",
    linkName:"hangman",
    intro:"Mobile Fitness Application",
    skill:"Gamification/UI/UX Design",
    date:"5/12/2017",
    status:"Done."
};

var timePage = {
    name:"Time",
    linkName:"time",
    intro:"Mobile Fitness Application",
    skill:"Gamification/UI/UX Design",
    date:"5/12/2017",
    status:"Done."
};

var dashBoardPage = {
    name:"Multi Functional Dashboard",
    linkName:"dashBoard",
    intro: "Mobile Fitness Application",
    skill: "Gamification/UI/UX Design",
    date: "5/12/2017",
    status: "Done"
};
var galleryArray = ["runHeroPage","searchPage","hangmanPage","muExplorePage","timePage","dashBoardPage"];
$(document).ready(function () {
    checkProject();
    $(function(){
        $("#design").hover(
            function(){
                $("#design").css('color','#f8e200');
                $("#design").css('transition','1.5s');
                $(".tech").css('opacity','0');
                $(".tech").css('transition','1.5s');
                $(".container").css('background-color',"#f8e200");
                $(".container").css('transition','1.5s');
            },
            function(){
                $("#design").css('color','#ffffff');
                $("#design").css('transition','1.5s');
                $(".tech").css('opacity','1');
                $(".tech").css('transition','1.5s');
                $(".container").css('background-color',"#ffffff");
                $(".container").css('transition','1.5s');
            }
        );
    });
    $(function(){
        $("#tech").hover(
            function(){
                $("#tech").css('color','#bc62ff');
                $("#tech").css('transition','1.5s');
                $(".design").css('opacity','0');
                $(".design").css('transition','1.5s');
                $(".container").css('background-color',"#bc62ff");
                $(".container").css('transition','1.5s');
            },
            function(){
                $("#tech").css('color','#ffffff');
                $("#tech").css('transition','1.5s');
                $(".design").css('opacity','1');
                $(".design").css('transition','1.5s');
                $(".container").css('background-color',"#ffffff");
                $(".container").css('transition','1.5s');

            }
        );
    });

});

function checkProject() {
    if($(".projectIntro").is(':visible')){
        var nextPage = "";
        var previousPage = "";
        var currentPage = $(".container").attr("id");
        var indexNum = galleryArray.indexOf(currentPage);
        var nextNum = indexNum+1;
        var previousNum = indexNum-1;
        if(nextNum >  galleryArray.length-1){
            nextNum = 0;
            nextPage = galleryArray[nextNum];
        }else{
            nextPage = galleryArray[nextNum];
        }
        if(previousNum < 0){
            previousNum = galleryArray.length-1;
            previousPage = galleryArray[previousNum];
            // alert("This is the first page...");
        }else{
            previousPage = galleryArray[previousNum];
        }
        $(".projectIntro").append("        <div class=\"projectController\">\n" +
            " <a href='"+ previousPage.substr(0,previousPage.length-4) +".html'>" + "<div class=\"controllerItem\" id=\"previous\">Last</div>\n" + "</a>" +
            " <a href='index.html'>" + "<div class=\"controllerItem\" id=\"gallery\">Gallery</div>\n" + "</a>" +
            " <a href='"+ nextPage.substr(0,nextPage.length-4) +".html'>" + "<div class=\"controllerItem\" id=\"next\">Next</div>\n" + "</a>" +
            "        </div>");

    }else{
        setTimeout(checkProject,50);
    }
}

function checkWorks() {
    if($("#workPage").is(':visible')){

    }
}