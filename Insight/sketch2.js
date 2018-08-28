
var s = function( p ) { // p could be any variable name
    var img;
    var img2;
    var texture;
    var profile;
    var text;
    var ifClick;
    var scene1;
    var scene2;
    var alphaI;
    var alphaT;

    p.setup = function() {
        p.createCanvas(800, 500);
        p.alphaI = 0;
        p.alphaT = 0;
        p.ifClick = false;
        p.img = p.loadImage("story/pic1.jpg");
        p.img2 = p.loadImage("story/pic2.jpg");
        p.scene1 = p.loadImage("story/anotherM.png");
        p.scene2 = p.loadImage("story/lost.png");
        p.texture = p.loadImage("story/texture.png");
        p.profile = p.loadImage("story/profile.jpg");

    };

    p.draw = function() {
        p.texture.resize(0,p.height);
        p.background(251,240,212);
        p.img.resize(0,p.height);
        p.image(p.img,(p.width-p.img.width)/2,0);
        if(p.keyIsPressed) {
            if (p.key == 'E') {
                p.alphaI = p.map(p.mouseX, 100, p.width / 2, 0, 255);
                p.alphaT = p.map(p.mouseX, p.width / 2, p.width - 100, 0, 255);

                p.tint(255, p.alphaI);
                p.image(p.scene1, 0, 0);
                p.tint(255, p.alphaT);
                p.image(p.scene2, 0, 0);
                p.tint(255, 255);
            }
        }
    };
    p.mousePressed = function () {
        if(p.ifClick){
            p.ifClick = false;
        }else{
            p.ifClick = true;
        }
    };
};
var myp6 = new p5(s, 'mShow');


var t = function( p ) { // p could be any variable name
    var img;
    var faceImg;
    var handsImg;
    var faceTextImg;
    var handsTextImg;
    var sfumato;
    var x, y;
    var rot;
    var alpha;
    var ifClick = false;
    var alphaUp;
    var alphaDown;
    var alphaIntro;
    var alphaText;
    var d1;
    var d2;
    var fd1;
    var fd2;
    var r;


    p.setup = function() {
        p.createCanvas(800, 500);
        p.alphaUp = 100;
        p.alphaDown = 100;
        p.alphaText = 0;
        p.alphaIntro = 0;
        p.r=1;
        p.img = p.loadImage("story/pic1.jpg");
        p.faceImg = p.loadImage("iconography/intro_The Face.jpg");
        p.handsImg = p.loadImage("iconography/intro_The Hands.jpg");
        p.faceTextImg = p.loadImage("iconography/pic_The Face Text.png");
        p.handsTextImg = p.loadImage("iconography/pic_The Hands Text.png");


        // p.sfumato = p.loadImage("iconography/sfumato.jpg");
        // p.img.resize(0,p.height);
        // p.image(p.img,(p.width-p.img.width)/2,0);
        // p.fill(235,235,235,255);
    };

    p.draw = function() {
        p.img.resize(0,p.height);
        p.image(p.img,(p.width-p.img.width)/2,0);
        p.fill(235,235,235,255);
        p.stroke(250,134,57);
        //stroke(246,155,95);
        p.background(251,240,212);
        p.image(p.img,(p.width-p.img.width)/2,0);

        if(p.mouseIsPressed){
            p.drawTags();
            p.drawIntro();
            //drawSfumato();
        }
    };
    
    p.drawIntro = function () {
        p.cacD();
        if(p.d1 <= 10){
            // p.filter(BLUR,10);
            p.alphaIntro = p.map(p.d1,0,p.fd1/2,255,0);
            p.image(p.faceImg,78,78);
            p.image(p.faceTextImg,78,278);
        }else if(p.d2 <= 10){
            // p.filter(BLUR,10);
            p.image(p.handsImg,584.5,308.5);
            p.image(p.handsTextImg,124.5,308.5);
        }
    };
    
    p.cacD = function () {
        p.d1 = p.sqrt(p.sq(p.mouseX - 378)+p.sq(p.mouseY-135));
        p.fd1 = p.sqrt(p.sq(p.width-378)+p.sq(p.height-135));
        p.d2 = p.sqrt(p.sq(p.mouseX - 375)+p.sq(p.mouseY-395));
        p.fd2 = p.sqrt(p.sq(p.width-375)+p.sq(p.height-395));
    };
    
    p.drawTags = function () {
        p.cacD();
        //===========================for upper point
        p.alphaUp = p.map(p.d1,0,p.fd1/2,255,0);
        p.r = p.map(p.d1,0,p.fd1/2,30,1);

        p.stroke(250,134,57,p.alphaUp);
        p.strokeWeight(5);
        p.line(p.mouseX,p.mouseY,378,135);
        p.strokeWeight(3);
        p.fill(0,0,0,0);
        //filter(BLUR,6);
        p.stroke(105,242,242,p.alphaUp);
        p.ellipse(378,135,p.r,p.r);

        //===========================for lower point
        p.alphaDown = p.map(p.d2,0,p.fd2/2,255,0);
        p.r = p.map(p.d2,0,p.fd2/2,30,1);
        p.stroke(250,134,57,p.alphaDown);
        p.strokeWeight(5);
        p.line(p.mouseX,p.mouseY,375,395);
        p.strokeWeight(3);
        p.fill(0,0,0,0);
        p.stroke(105,242,242,p.alphaDown);
        p.ellipse(375,395,p.r,p.r);
    }

    // p.drawSfumato = function () {
    //     p.fill(0,0,0,90);
    //     p.rect(mouseX,mouseY,200,100);
    //     sfumato.resize(0,100);
    //     image(sfumato,mouseX,mouseY);
    // }

    p.mousePressed = function () {
        if(p.ifClick){
            p.ifClick = false;
        }else{
            p.ifClick = true;
        }
    }

};
var myp7 = new p5(t, 'iShow');


var u = function( p ) { // p could be any variable name
    var img;
    var gdT;
    var gdM;
    var x;
    var y;
    var times;
    var a;
    var dP;
    var x1;
    var y1;
    var counter;
    var alphaR;
    p.setup = function() {
        p.createCanvas(800, 500);
        p.x = 373;
        p.y = 142;
        p.times = 6.3;
        p.img = p.loadImage("story/pic1.jpg");
        p.gdT = p.loadImage("ratio/gdtext.png");
        p.gdM = p.loadImage("ratio/gdm.png");
        p.dP = 1;
        p.counter = 1;
        p.alphaR = 0;
    };

    p.draw = function() {
        p.background(251,240,212);
        p.img.resize(0,p.height);
        p.image(p.img,(p.width-p.img.width)/2,0);
        if(p.mouseIsPressed){
            p.alphaR = p.map(p.mouseY, 100,p.height,0,255);
            p.drawGoldenRatio();
            p.drawInfo();
        }
    };

    p.drawInfo = function () {
        p.tint(255,p.alphaR);
        p.image(p.gdT,5,p.y-p.fib(7)*p.times-p.fib(3)*p.times);
        p.image(p.gdM,(p.width-p.img.width)/2+p.img.width,p.y-p.fib(7)*p.times-p.fib(3)*p.times);
        p.tint(255,255);
    }
    
    p.drawGoldenRatio = function () {
        p.strokeWeight(2);
        p.noFill();
        p.stroke(250,134,57,p.alphaR);
        for(var i = 1; i <=9; i++){
            if(i == 1){
                p.rect(p.x,p.y,p.fib(i)*p.times,p.fib(i)*p.times);
            }else if(i == 2){
                p.rect(p.x+p.fib(i)*p.times,p.y,p.fib(i)*p.times,p.fib(i)*p.times);
            }else if(i == 3){
                p.rect(p.x,p.y-p.fib(3)*p.times,p.fib(i)*p.times,p.fib(i)*p.times);
            }else if(i == 4){
                p.rect(p.x+p.fib(3)*p.times,p.y-p.fib(3)*p.times,p.fib(i)*p.times,p.fib(i)*p.times);
            }else if(i == 5){
                p.rect(p.x,p.y+p.fib(1)*p.times,p.fib(i)*p.times,p.fib(i)*p.times);
            }else if(i == 6){
                p.rect(p.x-p.fib(i)*p.times,p.y-p.fib(3)*p.times,p.fib(i)*p.times,p.fib(i)*p.times);
            }else if(i == 7){
                p.rect(p.x-p.fib(6)*p.times,p.y-p.fib(7)*p.times-p.fib(3)*p.times,p.fib(i)*p.times,p.fib(i)*p.times);
            }else if(i == 8){
                p.rect(p.x+p.fib(5)*p.times,p.y-(p.fib(3)*p.times +p.fib(7)*p.times),p.fib(i)*p.times,p.fib(i)*p.times);
            }else if(i == 9){
                p.rect(p.x-p.fib(6)*p.times,p.y+p.fib(1)*p.times+p.fib(5)*p.times,p.fib(i)*p.times,p.fib(i)*p.times);

            }
        }
        //noFill();
        p.arc(p.x-p.fib(6)*p.times,p.y+p.fib(1)*p.times+p.fib(5)*p.times,p.fib(9)*p.times*2,p.fib(9)*p.times*2,0,p.PI*0.5);
        p.arc(p.x+p.fib(1)*p.times*2+p.fib(4)*p.times,p.y+p.fib(1)*p.times+p.fib(5)*p.times,p.fib(8)*p.times*2,p.fib(8)*p.times*2,1.5*p.PI,p.PI*2);
        p.arc(p.x+p.fib(1)*p.times*2+p.fib(4)*p.times,p.y-p.fib(3)*p.times,p.fib(7)*p.times*2,p.fib(7)*p.times*2,p.PI,1.5*p.PI);
        p.arc(p.x,p.y-p.fib(3)*p.times,p.fib(6)*p.times*2,p.fib(6)*p.times*2,0.5*p.PI,p.PI);
        p.arc(p.x,p.y+p.fib(1)*p.times,p.fib(5)*p.times*2,p.fib(5)*p.times*2,0,p.PI*0.5);
        p.arc(p.x+p.fib(1)*p.times*2,p.y+p.fib(1)*p.times,p.fib(4)*p.times*2,p.fib(4)*p.times*2,p.PI*1.5,p.PI*2);
        p.arc(p.x+p.fib(1)*p.times*2,p.y,p.fib(3)*p.times*2,p.fib(3)*p.times*2,p.PI,p.PI*1.5);
        p.line((p.width-p.img.width)/2+p.img.width,p.y-p.fib(7)*p.times-p.fib(3)*p.times,(p.width-p.img.width)/2+p.img.width+50,p.y-p.fib(7)*p.times-p.fib(3)*p.times);
        p.line((p.width-p.img.width)/2+p.img.width+25,p.y-p.fib(7)*p.times-p.fib(3)*p.times,(p.width-p.img.width)/2+p.img.width+25,p.y+p.fib(1)*p.times+p.fib(5)*p.times);
        p.line((p.width-p.img.width)/2+p.img.width,p.y+p.fib(1)*p.times+p.fib(5)*p.times,(p.width-p.img.width)/2+p.img.width+50,p.y+p.fib(1)*p.times+p.fib(5)*p.times);
        p.line((p.width-p.img.width)/2+p.img.width+25,p.y+p.fib(1)*p.times+p.fib(5)*p.times,(p.width-p.img.width)/2+p.img.width+25,p.y+p.fib(1)*p.times+p.fib(5)*p.times+p.fib(9)*p.times);
        p.line((p.width-p.img.width)/2+p.img.width,p.y+p.fib(1)*p.times+p.fib(5)*p.times+p.fib(9)*p.times,(p.width-p.img.width)/2+p.img.width+50,p.y+p.fib(1)*p.times+p.fib(5)*p.times+p.fib(9)*p.times);
    };

    p.fib = function (n) {
        if(n <= 1){
            return n;
        }
        return p.fib(n-1) + p.fib(n-2);
    }
};

var myp8 = new p5(u, 'lShow');





